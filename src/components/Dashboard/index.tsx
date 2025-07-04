import React, { useState } from "react";
import { Plus, FileText, DollarSign, CheckCircle } from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import {
  calculateMonthlyFee,
  calculateGuestSummary,
  formatCurrency,
} from "../../utils/calculations";
import { getReportStatus } from "../../utils/storage";
import WarningModal from "./WarningModal";
import {
  DashboardContainer,
  Header,
  Title,
  Subtitle,
  StatsCard,
  StatsHeader,
  StatsLabel,
  StatsValue,
  StatsSubtext,
  SummaryCard,
  SummaryTitle,
  SummaryList,
  SummaryItem,
  SummaryName,
  SummaryAmount,
  ActionButtons,
  ActionButton,
  CalendarCard,
  CalendarHeader,
  CalendarTitle,
  CalendarStats,
  CalendarPreview,
  CalendarDays,
  CalendarDaysDetail,
} from "./styles";

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const {
    config,
    monthlyData,
    currentMonth,
    runningGuestFees,
    getTotalRunningGuestFees,
  } = useApp();
  const [showWarningModal, setShowWarningModal] = useState(false);

  // Calculate current month data
  const calculation = calculateMonthlyFee(config, monthlyData);

  // Calculate guest summary from running fees
  const guestSummary = calculateGuestSummary({
    ...monthlyData,
    guestEntries: runningGuestFees,
  });
  const totalGuestFees = getTotalRunningGuestFees();

  // Parse current month for display
  const [year, month] = currentMonth.split("-").map(Number);
  const monthName = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Count playing days by type
  const playingDates = Object.keys(runningGuestFees).length;
  const tuesdayCount = config.schedule.daysOfWeek.includes("Tuesday")
    ? Math.floor(monthlyData.actualPlayingDays * 0.5)
    : 0;
  const fridayCount = config.schedule.daysOfWeek.includes("Friday")
    ? Math.ceil(monthlyData.actualPlayingDays * 0.5)
    : 0;

  // Check if report is generated for this month
  const isReportGenerated = getReportStatus(currentMonth);

  const handleGenerateReportClick = () => {
    setShowWarningModal(true);
  };

  const handleContinueGenerate = () => {
    setShowWarningModal(false);
    onNavigate("cost-review");
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>Badminton Calculator</Title>
        <Subtitle>
          {monthName}
          {isReportGenerated && (
            <span
              style={{
                marginLeft: "0.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "#198754",
                fontSize: "0.75rem",
                fontWeight: "500",
              }}
            >
              <CheckCircle size={14} />
              Report Generated
            </span>
          )}
        </Subtitle>
      </Header>

      {/* Current Guest Fee Total */}
      <StatsCard>
        <StatsHeader>
          <DollarSign style={{ color: "#198754" }} />
          <StatsLabel>Current Guest Fee</StatsLabel>
        </StatsHeader>
        <StatsValue>{formatCurrency(totalGuestFees)}</StatsValue>
        <StatsSubtext>This month total</StatsSubtext>
      </StatsCard>

      {/* Playing Schedule */}
      <CalendarCard>
        <CalendarHeader>
          <CalendarTitle>Playing Schedule</CalendarTitle>
          <CalendarStats>
            {monthlyData.actualPlayingDays} days ({tuesdayCount}T•{fridayCount}
            F)
          </CalendarStats>
        </CalendarHeader>
        <CalendarPreview>
          <CalendarDays>{monthlyData.actualPlayingDays} days</CalendarDays>
          <CalendarDaysDetail>
            {config.schedule.daysOfWeek.join(" & ")}
          </CalendarDaysDetail>
        </CalendarPreview>
      </CalendarCard>

      {/* Guest Summary */}
      {guestSummary.length > 0 && (
        <SummaryCard>
          <SummaryTitle>Guest Summary</SummaryTitle>
          <SummaryList>
            {guestSummary.map((guest, index) => (
              <SummaryItem key={index}>
                <SummaryName>{guest.name}</SummaryName>
                <SummaryAmount>
                  {formatCurrency(guest.totalAmount)}
                </SummaryAmount>
              </SummaryItem>
            ))}
          </SummaryList>
        </SummaryCard>
      )}

      {/* Action Buttons */}
      <ActionButtons>
        <ActionButton $variant="primary" onClick={() => onNavigate("guests")}>
          <Plus />
          <span>Add Guests</span>
        </ActionButton>
        <ActionButton $variant="success" onClick={handleGenerateReportClick}>
          <FileText />
          <span>Generate Report</span>
        </ActionButton>
      </ActionButtons>

      {/* Warning Modal */}
      <WarningModal
        show={showWarningModal}
        guestFeeTotal={totalGuestFees}
        onCancel={() => setShowWarningModal(false)}
        onContinue={handleContinueGenerate}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
