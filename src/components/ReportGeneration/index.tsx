import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  DollarSign,
  Users,
  Calendar,
  Package,
  AlertCircle,
  CheckCircle,
  FileText,
} from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import {
  calculateMonthlyFee,
  calculateGuestSummary,
  formatCurrency,
} from "../../utils/calculations";
import {
  ReportContainer,
  Header,
  BackButton,
  HeaderContent,
  Title,
  Subtitle,
  ReportSection,
  SectionHeader,
  SectionTitle,
  CostBreakdown,
  CostRow,
  CostLabel,
  CostValue,
  GuestSummaryTable,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
  TotalRow,
  MemberCostCard,
  MemberCostItem,
  MemberName,
  MemberAmount,
  HighlightBox,
  HighlightTitle,
  HighlightContent,
  ActionButtons,
  ActionButton,
  ExtraShuttleSection,
  ExtraShuttleInput,
  ShuttleInput,
  ShuttleButton,
} from "./styles";

interface ReportGenerationProps {
  onBack: () => void;
}

const ReportGeneration: React.FC<ReportGenerationProps> = ({ onBack }) => {
  const {
    config,
    monthlyData,
    currentMonth,
    updateExtraShuttleCost,
    updateActualPlayingDays,
    generateMonthlyReport,
  } = useApp();
  const [extraShuttle, setExtraShuttle] = useState(0);
  const [playingDaysOverride, setPlayingDaysOverride] = useState<number | null>(
    null
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Parse current month
  const [year, month] = currentMonth.split("-").map(Number);
  const monthName = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Calculate report data
  const calculation = calculateMonthlyFee(config, monthlyData);
  const guestSummary = calculateGuestSummary(monthlyData);
  const totalGuestFees = guestSummary.reduce(
    (sum, guest) => sum + guest.totalAmount,
    0
  );

  useEffect(() => {
    setExtraShuttle(monthlyData.extraShuttleCost);
  }, [monthlyData.extraShuttleCost]);

  const handleExtraShuttleUpdate = () => {
    updateExtraShuttleCost(extraShuttle);
  };

  const handlePlayingDaysUpdate = (days: number) => {
    updateActualPlayingDays(days);
    setPlayingDaysOverride(days);
  };

  const handleGenerateReport = () => {
    if (showConfirmation) {
      generateMonthlyReport();
      onBack();
    } else {
      setShowConfirmation(true);
    }
  };

  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const nextMonthName = new Date(nextYear, nextMonth - 1).toLocaleString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  return (
    <ReportContainer>
      <Header>
        <BackButton onClick={onBack}>
          <ArrowLeft />
        </BackButton>
        <HeaderContent>
          <Title>Monthly Report</Title>
          <Subtitle>{monthName}</Subtitle>
        </HeaderContent>
      </Header>

      {/* Cost Breakdown */}
      <ReportSection>
        <SectionHeader>
          <DollarSign style={{ color: "#198754" }} />
          <SectionTitle>Cost Breakdown</SectionTitle>
        </SectionHeader>

        <CostBreakdown>
          <CostRow>
            <CostLabel>
              Court Fee ({monthlyData.actualPlayingDays} days ×{" "}
              {config.court.hoursPerDay} hrs)
            </CostLabel>
            <CostValue>{formatCurrency(calculation.courtFee)}</CostValue>
          </CostRow>
          <CostRow $indent>
            <CostLabel>Discount ({config.court.discountPercentage}%)</CostLabel>
            <CostValue $color="#dc3545">
              -{formatCurrency(calculation.courtDiscount)}
            </CostValue>
          </CostRow>
          <CostRow>
            <CostLabel>Final Court Fee</CostLabel>
            <CostValue>{formatCurrency(calculation.finalCourtFee)}</CostValue>
          </CostRow>

          <CostRow>
            <CostLabel>
              Shuttle Fee ({config.shuttle.defaultTubesPerMonth} tubes)
            </CostLabel>
            <CostValue>{formatCurrency(calculation.shuttleFee)}</CostValue>
          </CostRow>
          {calculation.extraShuttleCost > 0 && (
            <CostRow $indent>
              <CostLabel>Extra Shuttle Cost</CostLabel>
              <CostValue>
                {formatCurrency(calculation.extraShuttleCost)}
              </CostValue>
            </CostRow>
          )}
          <CostRow>
            <CostLabel>Final Shuttle Fee</CostLabel>
            <CostValue>{formatCurrency(calculation.finalShuttleFee)}</CostValue>
          </CostRow>

          <CostRow $highlight>
            <CostLabel>Total Fee</CostLabel>
            <CostValue>{formatCurrency(calculation.totalFee)}</CostValue>
          </CostRow>

          <CostRow>
            <CostLabel>
              Guest Fee Reduction (from{" "}
              {new Date(year, month - 2).toLocaleString("en-US", {
                month: "long",
              })}
              )
            </CostLabel>
            <CostValue $color="#198754">
              -{formatCurrency(calculation.guestFeeReduction)}
            </CostValue>
          </CostRow>

          <CostRow $highlight>
            <CostLabel>Final Amount</CostLabel>
            <CostValue style={{ fontSize: "1.25rem" }}>
              {formatCurrency(calculation.finalAmount)}
            </CostValue>
          </CostRow>
        </CostBreakdown>
      </ReportSection>

      {/* Guest Summary */}
      {guestSummary.length > 0 && (
        <ReportSection>
          <SectionHeader>
            <Users style={{ color: "#0d6efd" }} />
            <SectionTitle>Guest Summary</SectionTitle>
          </SectionHeader>

          <GuestSummaryTable>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell style={{ textAlign: "center" }}>
                    Sessions
                  </TableHeaderCell>
                  <TableHeaderCell style={{ textAlign: "right" }}>
                    Total
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {guestSummary.map((guest, index) => (
                  <TableRow key={index}>
                    <TableCell>{guest.name}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {guest.sessions}
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      {formatCurrency(guest.totalAmount)}
                    </TableCell>
                  </TableRow>
                ))}
                <TotalRow>
                  <TableCell>Total</TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {guestSummary.reduce((sum, g) => sum + g.sessions, 0)}
                  </TableCell>
                  <TableCell style={{ textAlign: "right" }}>
                    {formatCurrency(totalGuestFees)}
                  </TableCell>
                </TotalRow>
              </tbody>
            </Table>
          </GuestSummaryTable>
        </ReportSection>
      )}

      {/* Member Cost */}
      <ReportSection>
        <SectionHeader>
          <Users style={{ color: "#6f42c1" }} />
          <SectionTitle>Cost per Member</SectionTitle>
        </SectionHeader>

        <MemberCostCard>
          {config.members.map((member, index) => (
            <MemberCostItem key={index}>
              <MemberName>{member}</MemberName>
              <MemberAmount>
                {formatCurrency(calculation.perMember)}
              </MemberAmount>
            </MemberCostItem>
          ))}
        </MemberCostCard>

        <HighlightBox $variant="info">
          <HighlightContent>
            Cost per playing day: {formatCurrency(calculation.costPerDay)}
          </HighlightContent>
        </HighlightBox>
      </ReportSection>

      {/* Extra Shuttle Cost */}
      <ReportSection>
        <SectionHeader>
          <Package style={{ color: "#fd7e14" }} />
          <SectionTitle>Adjustments</SectionTitle>
        </SectionHeader>

        <ExtraShuttleSection>
          <CostLabel>Extra Shuttle Cost</CostLabel>
          <ExtraShuttleInput>
            <ShuttleInput
              type="number"
              value={extraShuttle}
              onChange={(e) => setExtraShuttle(Number(e.target.value))}
              placeholder="0"
            />
            <ShuttleButton onClick={handleExtraShuttleUpdate}>
              Update
            </ShuttleButton>
          </ExtraShuttleInput>
        </ExtraShuttleSection>
      </ReportSection>

      {/* Confirmation Message */}
      {showConfirmation && (
        <HighlightBox $variant="warning">
          <HighlightTitle color="#856404">
            <AlertCircle style={{ display: "inline", marginRight: "0.5rem" }} />
            Confirm Report Generation
          </HighlightTitle>
          <HighlightContent color="#856404">
            Generating this report will:
            <ul style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
              <li>
                Apply {formatCurrency(totalGuestFees)} guest fees to{" "}
                {nextMonthName}
              </li>
              <li>Reset current month's guest data</li>
              <li>Create a new entry for {nextMonthName}</li>
            </ul>
          </HighlightContent>
        </HighlightBox>
      )}

      {/* Action Buttons */}
      <ActionButtons>
        {!showConfirmation && (
          <ActionButton $variant="primary" onClick={handleGenerateReport}>
            <FileText />
            Generate Report
          </ActionButton>
        )}

        {showConfirmation && (
          <>
            <ActionButton $variant="success" onClick={handleGenerateReport}>
              <CheckCircle />
              Confirm and Generate
            </ActionButton>
            <ActionButton
              $variant="danger"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </ActionButton>
          </>
        )}
      </ActionButtons>
    </ReportContainer>
  );
};

export default ReportGeneration;
