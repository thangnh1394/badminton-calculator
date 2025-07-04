import React from "react";
import {
  DollarSign,
  Calendar,
  Users,
  Package,
  FileText,
  Info,
  AlertCircle,
} from "lucide-react";
import { loadGeneratedReport } from "../../utils/storage";
import { formatCurrency } from "../../utils/calculations";
import {
  CostDashboardContainer,
  Header,
  Title,
  Subtitle,
  GeneratedBadge,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  SummaryGrid,
  SummaryCard,
  SummaryIcon,
  SummaryValue,
  SummaryLabel,
  ReportSection,
  SectionHeader,
  SectionTitle,
  DetailsList,
  DetailRow,
  DetailLabel,
  DetailValue,
  MemberCostGrid,
  MemberCostCard,
  MemberName,
  MemberAmount,
  GuestTable,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
  TotalRow,
  InfoBox,
  AdjustmentTag,
  GeneratedInfo,
} from "./styles";

const CostDashboard: React.FC = () => {
  const report = loadGeneratedReport();

  if (!report) {
    return (
      <CostDashboardContainer>
        <Header>
          <Title>Cost Dashboard</Title>
          <Subtitle>View generated reports</Subtitle>
        </Header>

        <EmptyState>
          <EmptyIcon>
            <FileText />
          </EmptyIcon>
          <EmptyTitle>No Report Available</EmptyTitle>
          <EmptyText>
            Generate a report from the Dashboard to view cost details here
          </EmptyText>
        </EmptyState>
      </CostDashboardContainer>
    );
  }

  const monthName = `${report.month} ${report.year}`;
  const generatedDate = new Date(report.generatedAt);
  const formattedDate = generatedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const hasAdjustments =
    report.adjustments.excludedDates.length > 0 ||
    report.adjustments.includedDates.length > 0 ||
    report.adjustments.absentMembers.length > 0 ||
    report.adjustments.extraShuttleTubes > 0;

  return (
    <CostDashboardContainer>
      <Header>
        <Title>Cost Dashboard</Title>
        <Subtitle>
          {monthName} Report
          <GeneratedBadge>Generated</GeneratedBadge>
        </Subtitle>
      </Header>

      {/* Summary Cards */}
      <SummaryGrid>
        <SummaryCard>
          <SummaryIcon $color="#198754">
            <DollarSign />
          </SummaryIcon>
          <SummaryValue>
            {formatCurrency(report.calculation.perMember)}
          </SummaryValue>
          <SummaryLabel>Per Member</SummaryLabel>
        </SummaryCard>

        <SummaryCard>
          <SummaryIcon $color="#0d6efd">
            <Calendar />
          </SummaryIcon>
          <SummaryValue>{report.playingDays}</SummaryValue>
          <SummaryLabel>Playing Days</SummaryLabel>
        </SummaryCard>
      </SummaryGrid>

      {/* Adjustments Notice */}
      {hasAdjustments && (
        <InfoBox style={{ marginBottom: "1rem" }}>
          <AlertCircle />
          <div>
            <strong>Adjustments Applied:</strong>
            {report.adjustments.excludedDates.length > 0 && (
              <div>
                • {report.adjustments.excludedDates.length} days excluded
              </div>
            )}
            {report.adjustments.includedDates.length > 0 && (
              <div>• {report.adjustments.includedDates.length} days added</div>
            )}
            {report.adjustments.absentMembers.length > 0 && (
              <div>
                • {report.adjustments.absentMembers.join(", ")} marked absent
              </div>
            )}
            {report.adjustments.extraShuttleTubes > 0 && (
              <div>
                • {report.adjustments.extraShuttleTubes} extra shuttle tubes
              </div>
            )}
          </div>
        </InfoBox>
      )}

      {/* Cost Breakdown */}
      <ReportSection>
        <SectionHeader>
          <DollarSign style={{ color: "#198754" }} />
          <SectionTitle>Cost Breakdown</SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Court Fee</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.courtFee)}
            </DetailValue>
          </DetailRow>
          <DetailRow $indent>
            <DetailLabel>Discount Applied</DetailLabel>
            <DetailValue $color="#dc3545">
              -{formatCurrency(report.calculation.courtDiscount)}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Final Court Fee</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.finalCourtFee)}
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Shuttle Fee</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.shuttleFee)}
            </DetailValue>
          </DetailRow>
          {report.calculation.extraShuttleCost > 0 && (
            <DetailRow $indent>
              <DetailLabel>Extra Shuttle Cost</DetailLabel>
              <DetailValue>
                {formatCurrency(report.calculation.extraShuttleCost)}
              </DetailValue>
            </DetailRow>
          )}
          <DetailRow>
            <DetailLabel>Final Shuttle Fee</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.finalShuttleFee)}
            </DetailValue>
          </DetailRow>

          <DetailRow $highlight>
            <DetailLabel>Total Fee</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.totalFee)}
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Guest Fee Reduction</DetailLabel>
            <DetailValue $color="#198754">
              -{formatCurrency(report.calculation.guestFeeReduction)}
            </DetailValue>
          </DetailRow>

          <DetailRow $highlight>
            <DetailLabel>Final Amount</DetailLabel>
            <DetailValue style={{ fontSize: "1.25rem" }}>
              {formatCurrency(report.calculation.finalAmount)}
            </DetailValue>
          </DetailRow>
        </DetailsList>
      </ReportSection>

      {/* Guest Summary */}
      {report.guestSummary.length > 0 && (
        <ReportSection>
          <SectionHeader>
            <Users style={{ color: "#0d6efd" }} />
            <SectionTitle>Guest Summary</SectionTitle>
          </SectionHeader>

          <GuestTable>
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
              {report.guestSummary.map((guest, index) => (
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
                  {report.guestSummary.reduce((sum, g) => sum + g.sessions, 0)}
                </TableCell>
                <TableCell style={{ textAlign: "right" }}>
                  {formatCurrency(
                    report.guestSummary.reduce(
                      (sum, g) => sum + g.totalAmount,
                      0
                    )
                  )}
                </TableCell>
              </TotalRow>
            </tbody>
          </GuestTable>

          <InfoBox>
            <Info />
            <div>
              These guest fees have been applied to the next month's costs
            </div>
          </InfoBox>
        </ReportSection>
      )}

      {/* Member Cost */}
      <ReportSection>
        <SectionHeader>
          <Users style={{ color: "#6f42c1" }} />
          <SectionTitle>
            Cost per Member
            {report.adjustments.absentMembers.length > 0 && (
              <AdjustmentTag>
                {report.activeMembers.length} of {report.members.length} active
              </AdjustmentTag>
            )}
          </SectionTitle>
        </SectionHeader>

        <MemberCostGrid>
          {report.members.map((member, index) => {
            const isAbsent = report.adjustments.absentMembers.includes(member);
            return (
              <MemberCostCard
                key={index}
                style={{ opacity: isAbsent ? 0.5 : 1 }}
              >
                <MemberName>
                  {member}
                  {isAbsent && " (Absent)"}
                </MemberName>
                <MemberAmount>
                  {isAbsent
                    ? "-"
                    : formatCurrency(report.calculation.perMember)}
                </MemberAmount>
              </MemberCostCard>
            );
          })}
        </MemberCostGrid>
      </ReportSection>

      {/* Summary Info */}
      <ReportSection>
        <SectionHeader>
          <Package style={{ color: "#fd7e14" }} />
          <SectionTitle>Summary</SectionTitle>
        </SectionHeader>

        <DetailsList>
          <DetailRow>
            <DetailLabel>Playing Days</DetailLabel>
            <DetailValue>
              {report.playingDays}
              {hasAdjustments && <AdjustmentTag>adjusted</AdjustmentTag>}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Active Members</DetailLabel>
            <DetailValue>
              {report.activeMembers.length} of {report.members.length}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Cost per Day</DetailLabel>
            <DetailValue>
              {formatCurrency(report.calculation.costPerDay)}
            </DetailValue>
          </DetailRow>
        </DetailsList>
      </ReportSection>

      <GeneratedInfo>Generated on {formattedDate}</GeneratedInfo>
    </CostDashboardContainer>
  );
};

export default CostDashboard;
