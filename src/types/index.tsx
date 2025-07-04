// Configuration types
export interface CourtConfig {
  costPerHour: number;
  hoursPerDay: number;
  discountPercentage: number;
}

export interface ShuttleConfig {
  costPerTube: number;
  defaultTubesPerMonth: number;
}

export interface ScheduleConfig {
  daysOfWeek: string[];
}

export interface Config {
  court: CourtConfig;
  shuttle: ShuttleConfig;
  schedule: ScheduleConfig;
  members: string[];
  frequentGuests: string[];
}

// Guest types
export interface Guest {
  id?: string;
  name: string;
  amount: number;
  note?: string;
  date: string;
}

// Monthly data types
export interface MonthlyData {
  month: string;
  year: number;
  guestEntries: Record<string, Guest[]>; // date string as key
  extraShuttleCost: number;
  actualPlayingDays: number;
  previousMonthGuestTotal: number;
}

// Calculation types
export interface CalculationResult {
  courtFee: number;
  courtDiscount: number;
  finalCourtFee: number;
  shuttleFee: number;
  extraShuttleCost: number;
  finalShuttleFee: number;
  totalFee: number;
  guestFeeReduction: number;
  finalAmount: number;
  perMember: number;
  costPerDay: number;
}

// Report types
export interface MonthlyReport {
  month: string;
  year: number;
  calculation: CalculationResult;
  guestSummary: GuestSummary[];
  playingDays: number;
  members: string[];
}

export interface GuestSummary {
  name: string;
  totalAmount: number;
  sessions: number;
}

// Generated Report types
export interface GeneratedReport {
  monthKey: string;
  month: string;
  year: number;
  generatedAt: string;
  calculation: CalculationResult;
  guestSummary: GuestSummary[];
  playingDays: number;
  members: string[];
  activeMembers: string[];
  adjustments: {
    excludedDates: string[];
    includedDates: string[];
    absentMembers: string[];
    extraShuttleTubes: number;
  };
}
