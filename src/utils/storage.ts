import type { Config, MonthlyData, GeneratedReport, Guest } from "../types";

const STORAGE_KEYS = {
  CONFIG: "badminton-config",
  MONTHLY_DATA: "badminton-monthly-data",
  CURRENT_MONTH: "badminton-current-month",
  GENERATED_REPORT: "badminton-generated-report",
  REPORT_STATUS: "badminton-report-status",
};

// Default configuration
export const DEFAULT_CONFIG: Config = {
  court: {
    costPerHour: 100,
    hoursPerDay: 2,
    discountPercentage: 10,
  },
  shuttle: {
    costPerTube: 285,
    defaultTubesPerMonth: 3,
  },
  schedule: {
    daysOfWeek: ["Tuesday", "Friday"],
  },
  members: ["Tran", "Thang", "Nhut", "Thuy", "Tin", "Bao"],
  frequentGuests: ["Thu", "Hang", "Nha", "Nhan"],
};

// Config functions
export const loadConfig = (): Config => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONFIG);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading config:", error);
  }
  return DEFAULT_CONFIG;
};

export const saveConfig = (config: Config): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
  } catch (error) {
    console.error("Error saving config:", error);
  }
};

// Monthly data functions
export const loadMonthlyData = (monthKey: string): MonthlyData | null => {
  try {
    const allData = localStorage.getItem(STORAGE_KEYS.MONTHLY_DATA);
    if (allData) {
      const parsed = JSON.parse(allData);
      return parsed[monthKey] || null;
    }
  } catch (error) {
    console.error("Error loading monthly data:", error);
  }
  return null;
};

export const saveMonthlyData = (monthKey: string, data: MonthlyData): void => {
  try {
    const allData = localStorage.getItem(STORAGE_KEYS.MONTHLY_DATA);
    const parsed = allData ? JSON.parse(allData) : {};
    parsed[monthKey] = data;
    localStorage.setItem(STORAGE_KEYS.MONTHLY_DATA, JSON.stringify(parsed));
  } catch (error) {
    console.error("Error saving monthly data:", error);
  }
};

export const clearMonthlyData = (monthKey: string): void => {
  try {
    const allData = localStorage.getItem(STORAGE_KEYS.MONTHLY_DATA);
    if (allData) {
      const parsed = JSON.parse(allData);
      delete parsed[monthKey];
      localStorage.setItem(STORAGE_KEYS.MONTHLY_DATA, JSON.stringify(parsed));
    }
  } catch (error) {
    console.error("Error clearing monthly data:", error);
  }
};

// Current month functions
export const getCurrentMonth = (): string => {
  const stored = localStorage.getItem(STORAGE_KEYS.CURRENT_MONTH);
  if (stored) {
    return stored;
  }

  // Default to current month
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
  setCurrentMonth(monthKey);
  return monthKey;
};

export const setCurrentMonth = (monthKey: string): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_MONTH, monthKey);
};

export const restToCurrentMonth = (): void => {
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
  setCurrentMonth(monthKey);
};

// Helper function to create month key
export const createMonthKey = (year: number, month: number): string => {
  return `${year}-${String(month + 1).padStart(2, "0")}`;
};

// Helper function to parse month key
export const parseMonthKey = (
  monthKey: string
): { year: number; month: number } => {
  const [year, month] = monthKey.split("-").map(Number);
  return { year, month: month - 1 }; // month is 0-indexed in JavaScript Date
};

// Generated Report functions
export const saveGeneratedReport = (report: GeneratedReport): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.GENERATED_REPORT, JSON.stringify(report));
  } catch (error) {
    console.error("Error saving generated report:", error);
  }
};

export const loadGeneratedReport = (): GeneratedReport | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.GENERATED_REPORT);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading generated report:", error);
  }
  return null;
};

export const clearGeneratedReport = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.GENERATED_REPORT);
  } catch (error) {
    console.error("Error clearing generated report:", error);
  }
};

// Report Status functions
export const getReportStatus = (monthKey: string): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.REPORT_STATUS);
    if (stored) {
      const status = JSON.parse(stored);
      return status[monthKey] || false;
    }
  } catch (error) {
    console.error("Error getting report status:", error);
  }
  return false;
};

export const setReportStatus = (
  monthKey: string,
  isGenerated: boolean
): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.REPORT_STATUS);
    const status = stored ? JSON.parse(stored) : {};
    status[monthKey] = isGenerated;
    localStorage.setItem(STORAGE_KEYS.REPORT_STATUS, JSON.stringify(status));
  } catch (error) {
    console.error("Error setting report status:", error);
  }
};

// Running Guest Fees (not tied to months)
export const getRunningGuestFees = (): Record<string, Guest[]> => {
  try {
    const stored = localStorage.getItem("badminton-running-guest-fees");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading running guest fees:", error);
  }
  return {};
};

export const saveRunningGuestFees = (
  guestFees: Record<string, Guest[]>
): void => {
  try {
    localStorage.setItem(
      "badminton-running-guest-fees",
      JSON.stringify(guestFees)
    );
  } catch (error) {
    console.error("Error saving running guest fees:", error);
  }
};

export const clearRunningGuestFees = (): void => {
  try {
    localStorage.removeItem("badminton-running-guest-fees");
  } catch (error) {
    console.error("Error clearing running guest fees:", error);
  }
};
