import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  DollarSign,
  Users,
  Calendar,
  Package,
  Edit3,
  Info,
  FileText,
  Settings,
} from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import {
  calculateMonthlyFee,
  calculateGuestSummary,
  formatCurrency,
} from "../../utils/calculations";
import type { GeneratedReport } from "../../types";
import { saveGeneratedReport, setReportStatus } from "../../utils/storage";
import AdjustmentModal from "./AdjustmentModal";
import {
  CostReviewContainer,
  Header,
  BackButton,
  HeaderContent,
  Title,
  Subtitle,
  SummaryCards,
  SummaryCard,
  SummaryIcon,
  SummaryValue,
  SummaryLabel,
  CostSection,
  SectionHeader,
  SectionTitle,
  EditButton,
  DetailsList,
  DetailRow,
  DetailLabel,
  DetailValue,
  InfoBox,
  ActionButtons,
  ActionButton,
  MembersList,
  MemberChip,
} from "./styles";

interface CostReviewProps {
  onBack: () => void;
  onNavigateToCostDashboard: () => void;
}

const CostReview: React.FC<CostReviewProps> = ({
  onBack,
  onNavigateToCostDashboard,
}) => {
  const {
    config,
    monthlyData,
    currentMonth,
    runningGuestFees,
    getTotalRunningGuestFees,
    updateExtraShuttleCost,
    updateActualPlayingDays,
    generateMonthlyReport,
  } = useApp();
  const [showAdjustmentModal, setShowAdjustmentModal] = useState(false);
  const [adjustments, setAdjustments] = useState({
    playingDays: monthlyData.actualPlayingDays,
    extraShuttleCost: monthlyData.extraShuttleCost,
    excludedDates: [] as string[],
    includedDates: [] as string[],
    absentMembers: [] as string[],
    extraShuttleTubes: 0,
  });

  // Parse current month
  const [year, month] = currentMonth.split("-").map(Number);
  const monthName = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Calculate data with adjustments
  const adjustedMonthlyData = {
    ...monthlyData,
    actualPlayingDays: adjustments.playingDays,
    extraShuttleCost: adjustments.extraShuttleCost,
  };

  const calculation = calculateMonthlyFee(config, adjustedMonthlyData);
  const guestSummary = calculateGuestSummary({
    ...monthlyData,
    guestEntries: runningGuestFees,
  });
  const totalGuestFees = getTotalRunningGuestFees();

  // Calculate per member with adjustments
  const activeMembers = config.members.filter(
    (m) => !adjustments.absentMembers.includes(m)
  );
  const perMemberAdjusted =
    activeMembers.length > 0
      ? calculation.finalAmount / activeMembers.length
      : 0;

  // Count playing days by type
  const tuesdayCount = config.schedule.daysOfWeek.includes("Tuesday")
    ? Math.floor(adjustments.playingDays * 0.5)
    : 0;
  const fridayCount = config.schedule.daysOfWeek.includes("Friday")
    ? Math.ceil(adjustments.playingDays * 0.5)
    : 0;

  const handleApplyAdjustments = (newAdjustments: typeof adjustments) => {
    setAdjustments(newAdjustments);
    // Update app state
    updateActualPlayingDays(newAdjustments.playingDays);
    updateExtraShuttleCost(newAdjustments.extraShuttleCost);
  };

  const handleGenerateReport = () => {
    // Create the generated report
    const report: GeneratedReport = {
      monthKey: currentMonth,
      month: monthlyData.month,
      year: monthlyData.year,
      generatedAt: new Date().toISOString(),
      calculation: {
        ...calculation,
        perMember: perMemberAdjusted, // Use adjusted per member cost
      },
      guestSummary,
      playingDays: adjustments.playingDays,
      members: config.members,
      activeMembers,
      adjustments: {
        excludedDates: adjustments.excludedDates,
        includedDates: adjustments.includedDates,
        absentMembers: adjustments.absentMembers,
        extraShuttleTubes: adjustments.extraShuttleTubes,
      },
    };

    // Save the report
    saveGeneratedReport(report);
    setReportStatus(currentMonth, true);

    // Generate next month
    generateMonthlyReport();

    // Navigate to Cost Dashboard
    onNavigateToCostDashboard();
  };

  const hasAdjustments =
    adjustments.excludedDates.length > 0 ||
    adjustments.includedDates.length > 0 ||
    adjustments.absentMembers.length > 0 ||
    adjustments.extraShuttleTubes > 0 ||
    adjustments.extraShuttleCost !== monthlyData.extraShuttleCost;

  return (
    <CostReviewContainer>
      <Header>
        <BackButton onClick={onBack}>
          <ArrowLeft />
        </BackButton>
        <HeaderContent>
          <Title>Cost Review</Title>
          <Subtitle>{monthName}</Subtitle>
        </HeaderContent>
      </Header>

      {/* Summary Cards */}
      <SummaryCards>
        <SummaryCard>
          <SummaryIcon $color="#198754">
            <DollarSign />
          </SummaryIcon>
          <SummaryValue>{formatCurrency(perMemberAdjusted)}</SummaryValue>
          <SummaryLabel>Per Member</SummaryLabel>
        </SummaryCard>

        <SummaryCard>
          <SummaryIcon $color="#0d6efd">
            <Calendar />
          </SummaryIcon>
          <SummaryValue>{adjustments.playingDays}</SummaryValue>
          <SummaryLabel>Playing Days</SummaryLabel>
        </SummaryCard>
      </SummaryCards>

      {/* Adjustment Button */}
      <ActionButton
        $variant="primary"
        onClick={() => setShowAdjustmentModal(true)}
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        <Settings />
        <span>Adjust for This Month</span>
      </ActionButton>

      {/* Show adjustments if any */}
      {hasAdjustments && (
        <InfoBox style={{ marginBottom: "1rem" }}>
          <Info />
          <div>
            <strong>Adjustments Applied:</strong>
            {adjustments.excludedDates.length > 0 && (
              <div>• {adjustments.excludedDates.length} days excluded</div>
            )}
            {adjustments.includedDates.length > 0 && (
              <div>• {adjustments.includedDates.length} days added</div>
            )}
            {adjustments.absentMembers.length > 0 && (
              <div>• {adjustments.absentMembers.length} members absent</div>
            )}
            {adjustments.extraShuttleTubes > 0 && (
              <div>• {adjustments.extraShuttleTubes} extra shuttle tubes</div>
            )}
          </div>
        </InfoBox>
      )}

      {/* Court Cost Section */}
      <CostSection>
        <SectionHeader>
          <SectionTitle>
            <Calendar style={{ color: "#0d6efd" }} />
            Court Cost
          </SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Rate</DetailLabel>
            <DetailValue>
              {formatCurrency(config.court.costPerHour)}/hour ×{" "}
              {config.court.hoursPerDay} hours
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Playing Days</DetailLabel>
            <DetailValue>
              {adjustments.playingDays} days ({tuesdayCount}T, {fridayCount}F)
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Subtotal</DetailLabel>
            <DetailValue>
              {formatCurrency(
                config.court.costPerHour *
                  config.court.hoursPerDay *
                  adjustments.playingDays
              )}
            </DetailValue>
          </DetailRow>
          <DetailRow $indent>
            <DetailLabel>
              Discount ({config.court.discountPercentage}%)
            </DetailLabel>
            <DetailValue $color="#dc3545">
              -
              {formatCurrency(
                (config.court.costPerHour *
                  config.court.hoursPerDay *
                  adjustments.playingDays *
                  config.court.discountPercentage) /
                  100
              )}
            </DetailValue>
          </DetailRow>
          <DetailRow $highlight>
            <DetailLabel>Final Court Cost</DetailLabel>
            <DetailValue>
              {formatCurrency(calculation.finalCourtFee)}
            </DetailValue>
          </DetailRow>
        </DetailsList>
      </CostSection>

      {/* Shuttle Cost Section */}
      <CostSection>
        <SectionHeader>
          <SectionTitle>
            <Package style={{ color: "#198754" }} />
            Shuttle Cost
          </SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Regular Tubes</DetailLabel>
            <DetailValue>
              {config.shuttle.defaultTubesPerMonth} ×{" "}
              {formatCurrency(config.shuttle.costPerTube)}
            </DetailValue>
          </DetailRow>
          {adjustments.extraShuttleCost > 0 && (
            <DetailRow>
              <DetailLabel>Extra Cost</DetailLabel>
              <DetailValue>
                {formatCurrency(adjustments.extraShuttleCost)}
              </DetailValue>
            </DetailRow>
          )}
          <DetailRow $highlight>
            <DetailLabel>Final Shuttle Cost</DetailLabel>
            <DetailValue>
              {formatCurrency(calculation.finalShuttleFee)}
            </DetailValue>
          </DetailRow>
        </DetailsList>
      </CostSection>

      {/* Guest Reduction Section */}
      <CostSection>
        <SectionHeader>
          <SectionTitle>
            <Users style={{ color: "#6f42c1" }} />
            Guest Contributions
          </SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Current Month Guests</DetailLabel>
            <DetailValue>{formatCurrency(totalGuestFees)}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Previous Month Reduction</DetailLabel>
            <DetailValue $color="#198754">
              -{formatCurrency(calculation.guestFeeReduction)}
            </DetailValue>
          </DetailRow>
        </DetailsList>

        <InfoBox>
          <Info />
          <div>
            Current month's guest fees ({formatCurrency(totalGuestFees)}) will
            be applied to next month's costs
          </div>
        </InfoBox>
      </CostSection>

      {/* Members Section */}
      <CostSection>
        <SectionHeader>
          <SectionTitle>
            <Users style={{ color: "#fd7e14" }} />
            Members ({activeMembers.length} of {config.members.length})
          </SectionTitle>
        </SectionHeader>

        <MembersList>
          {config.members.map((member, index) => {
            const isAbsent = adjustments.absentMembers.includes(member);
            return (
              <MemberChip key={index} $inactive={isAbsent}>
                {member}
              </MemberChip>
            );
          })}
        </MembersList>
      </CostSection>

      {/* Final Summary */}
      <CostSection>
        <SectionHeader>
          <SectionTitle>
            <DollarSign style={{ color: "#198754" }} />
            Final Summary
          </SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Total Cost</DetailLabel>
            <DetailValue>{formatCurrency(calculation.totalFee)}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Guest Reduction</DetailLabel>
            <DetailValue $color="#198754">
              -{formatCurrency(calculation.guestFeeReduction)}
            </DetailValue>
          </DetailRow>
          <DetailRow $highlight>
            <DetailLabel>Final Amount</DetailLabel>
            <DetailValue style={{ fontSize: "1.125rem" }}>
              {formatCurrency(calculation.finalAmount)}
            </DetailValue>
          </DetailRow>
          <DetailRow $highlight>
            <DetailLabel>
              Per Member ({activeMembers.length} active)
            </DetailLabel>
            <DetailValue style={{ fontSize: "1.125rem", color: "#198754" }}>
              {formatCurrency(perMemberAdjusted)}
            </DetailValue>
          </DetailRow>
        </DetailsList>
      </CostSection>

      {/* Generate Button */}
      <ActionButton
        $variant="success"
        onClick={handleGenerateReport}
        style={{ width: "100%", marginTop: "1.5rem" }}
      >
        <FileText />
        <span>Generate Report</span>
      </ActionButton>

      {/* Adjustment Modal */}
      <AdjustmentModal
        show={showAdjustmentModal}
        onClose={() => setShowAdjustmentModal(false)}
        onApply={handleApplyAdjustments}
      />
    </CostReviewContainer>
  );
};

export default CostReview;
