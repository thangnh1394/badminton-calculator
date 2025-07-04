import type {
  Config,
  MonthlyData,
  CalculationResult,
  Guest,
  GuestSummary,
} from "../types";

export const calculateMonthlyFee = (
  config: Config,
  monthlyData: MonthlyData
): CalculationResult => {
  // Court Fee calculations
  const courtFee =
    config.court.costPerHour *
    config.court.hoursPerDay *
    monthlyData.actualPlayingDays;
  const courtDiscount = courtFee * (config.court.discountPercentage / 100);
  const finalCourtFee = courtFee - courtDiscount;

  // Shuttle Fee calculations
  const shuttleFee =
    config.shuttle.costPerTube * config.shuttle.defaultTubesPerMonth;
  const finalShuttleFee = shuttleFee + monthlyData.extraShuttleCost;

  // Total Fee
  const totalFee = finalCourtFee + finalShuttleFee;

  // Guest Fee Reduction (from previous month)
  const guestFeeReduction = monthlyData.previousMonthGuestTotal;

  // Final calculations
  const finalAmount = totalFee - guestFeeReduction;
  const perMember = finalAmount / config.members.length;
  const costPerDay = perMember / monthlyData.actualPlayingDays;

  return {
    courtFee,
    courtDiscount,
    finalCourtFee,
    shuttleFee,
    extraShuttleCost: monthlyData.extraShuttleCost,
    finalShuttleFee,
    totalFee,
    guestFeeReduction,
    finalAmount,
    perMember,
    costPerDay,
  };
};

export const calculateGuestSummary = (
  monthlyData: MonthlyData
): GuestSummary[] => {
  const guestMap = new Map<string, { totalAmount: number; sessions: number }>();

  // Aggregate guest data
  Object.values(monthlyData.guestEntries).forEach((dayGuests) => {
    dayGuests.forEach((guest) => {
      const existing = guestMap.get(guest.name) || {
        totalAmount: 0,
        sessions: 0,
      };
      guestMap.set(guest.name, {
        totalAmount: existing.totalAmount + guest.amount,
        sessions: existing.sessions + 1,
      });
    });
  });

  // Convert to array
  return Array.from(guestMap.entries()).map(([name, data]) => ({
    name,
    totalAmount: data.totalAmount,
    sessions: data.sessions,
  }));
};

export const calculateTotalGuestFees = (monthlyData: MonthlyData): number => {
  let total = 0;
  Object.values(monthlyData.guestEntries).forEach((dayGuests) => {
    dayGuests.forEach((guest) => {
      total += guest.amount;
    });
  });
  return total;
};

export const getPlayingDaysInMonth = (
  year: number,
  month: number,
  daysOfWeek: string[]
): number => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let count = 0;

  const dayMap: Record<string, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const targetDays = daysOfWeek.map((day) => dayMap[day]);

  for (
    let date = new Date(firstDay);
    date <= lastDay;
    date.setDate(date.getDate() + 1)
  ) {
    if (targetDays.includes(date.getDay())) {
      count++;
    }
  }

  return count;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
