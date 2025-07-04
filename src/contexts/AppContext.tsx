import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Config, MonthlyData, Guest } from "../types";
import {
  loadConfig,
  saveConfig,
  loadMonthlyData,
  saveMonthlyData,
  getCurrentMonth,
  setCurrentMonth,
  createMonthKey,
  DEFAULT_CONFIG,
  getRunningGuestFees,
  saveRunningGuestFees,
  clearRunningGuestFees,
  restToCurrentMonth,
} from "../utils/storage";
import { getPlayingDaysInMonth } from "../utils/calculations";

interface AppContextType {
  // Config
  config: Config;
  updateConfig: (config: Config) => void;

  // Monthly Data
  currentMonth: string;
  monthlyData: MonthlyData;
  changeMonth: (monthKey: string) => void;
  restMonth: () => void;

  // Guest operations (now using running total)
  runningGuestFees: Record<string, Guest[]>;
  addGuest: (date: string, guest: Guest) => void;
  updateGuest: (date: string, guestId: string, guest: Guest) => void;
  deleteGuest: (date: string, guestId: string) => void;
  getTotalRunningGuestFees: () => number;

  // Other operations
  updateExtraShuttleCost: (cost: number) => void;
  updateActualPlayingDays: (days: number) => void;
  generateMonthlyReport: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const [currentMonth, setCurrentMonthState] = useState<string>("");
  const [monthlyData, setMonthlyData] = useState<MonthlyData>({
    month: "",
    year: 0,
    guestEntries: {},
    extraShuttleCost: 0,
    actualPlayingDays: 0,
    previousMonthGuestTotal: 0,
  });
  const [runningGuestFees, setRunningGuestFees] = useState<
    Record<string, Guest[]>
  >({});

  // Initialize on mount
  useEffect(() => {
    const loadedConfig = loadConfig();
    setConfig(loadedConfig);

    const currentMonthKey = getCurrentMonth();
    setCurrentMonthState(currentMonthKey);

    loadMonthData(currentMonthKey, loadedConfig);

    // Load running guest fees
    const loadedGuestFees = getRunningGuestFees();
    setRunningGuestFees(loadedGuestFees);
  }, []);

  const loadMonthData = (monthKey: string, configData: Config) => {
    let data = loadMonthlyData(monthKey);

    if (!data) {
      // Create new month data
      const [year, month] = monthKey.split("-").map(Number);
      const playingDays = getPlayingDaysInMonth(
        year - 1,
        month - 1,
        configData.schedule.daysOfWeek
      );

      data = {
        month: new Date(year, month - 1).toLocaleString("en-US", {
          month: "long",
        }),
        year,
        guestEntries: {}, // No longer used for actual guest tracking
        extraShuttleCost: 0,
        actualPlayingDays: playingDays,
        previousMonthGuestTotal: 0, // Will be set when report is generated
      };

      saveMonthlyData(monthKey, data);
    }

    setMonthlyData(data);
  };

  const updateConfig = (newConfig: Config) => {
    setConfig(newConfig);
    saveConfig(newConfig);

    // Recalculate playing days for current month
    const updatedMonthlyData = { ...monthlyData };
    const [year, month] = currentMonth.split("-").map(Number);
    updatedMonthlyData.actualPlayingDays = getPlayingDaysInMonth(
      year - 1,
      month - 1,
      newConfig.schedule.daysOfWeek
    );

    setMonthlyData(updatedMonthlyData);
    saveMonthlyData(currentMonth, updatedMonthlyData);
  };

  const changeMonth = (monthKey: string) => {
    setCurrentMonth(monthKey);
    setCurrentMonthState(monthKey);
    loadMonthData(monthKey, config);
  };

  const restMonth = () => {
    restToCurrentMonth();
  };

  const addGuest = (date: string, guest: Guest) => {
    const newGuest = { ...guest, id: Date.now().toString() };
    const updatedFees = { ...runningGuestFees };

    if (!updatedFees[date]) {
      updatedFees[date] = [];
    }

    updatedFees[date].push(newGuest);

    setRunningGuestFees(updatedFees);
    saveRunningGuestFees(updatedFees);
  };

  const updateGuest = (date: string, guestId: string, guest: Guest) => {
    const updatedFees = { ...runningGuestFees };

    if (updatedFees[date]) {
      const index = updatedFees[date].findIndex((g) => g.id === guestId);
      if (index !== -1) {
        updatedFees[date][index] = { ...guest, id: guestId };
        setRunningGuestFees(updatedFees);
        saveRunningGuestFees(updatedFees);
      }
    }
  };

  const deleteGuest = (date: string, guestId: string) => {
    const updatedFees = { ...runningGuestFees };

    if (updatedFees[date]) {
      updatedFees[date] = updatedFees[date].filter((g) => g.id !== guestId);

      if (updatedFees[date].length === 0) {
        delete updatedFees[date];
      }

      setRunningGuestFees(updatedFees);
      saveRunningGuestFees(updatedFees);
    }
  };

  const getTotalRunningGuestFees = (): number => {
    let total = 0;
    Object.values(runningGuestFees).forEach((dayGuests) => {
      dayGuests.forEach((guest) => {
        total += guest.amount;
      });
    });
    return total;
  };

  const updateExtraShuttleCost = (cost: number) => {
    const updatedData = { ...monthlyData, extraShuttleCost: cost };
    setMonthlyData(updatedData);
    saveMonthlyData(currentMonth, updatedData);
  };

  const updateActualPlayingDays = (days: number) => {
    const updatedData = { ...monthlyData, actualPlayingDays: days };
    setMonthlyData(updatedData);
    saveMonthlyData(currentMonth, updatedData);
  };

  const generateMonthlyReport = () => {
    // Get current running guest fees total
    const totalGuestFees = getTotalRunningGuestFees();

    // Move to next month
    const [year, month] = currentMonth.split("-").map(Number);
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const nextMonthKey = createMonthKey(nextYear, nextMonth - 1);

    // Create next month data with current guest total for reduction
    const playingDays = getPlayingDaysInMonth(
      nextYear - 1,
      nextMonth - 1,
      config.schedule.daysOfWeek
    );
    const nextMonthData: MonthlyData = {
      month: new Date(nextYear, nextMonth - 1).toLocaleString("en-US", {
        month: "long",
      }),
      year: nextYear,
      guestEntries: {},
      extraShuttleCost: 0,
      actualPlayingDays: playingDays,
      previousMonthGuestTotal: totalGuestFees, // Use running total for reduction
    };

    saveMonthlyData(nextMonthKey, nextMonthData);

    // Clear running guest fees after using them
    setRunningGuestFees({});
    clearRunningGuestFees();

    // Change to next month
    changeMonth(nextMonthKey);
  };

  const value: AppContextType = {
    config,
    updateConfig,
    currentMonth,
    monthlyData,
    changeMonth,
    restMonth,
    runningGuestFees,
    addGuest,
    updateGuest,
    deleteGuest,
    getTotalRunningGuestFees,
    updateExtraShuttleCost,
    updateActualPlayingDays,
    generateMonthlyReport,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
