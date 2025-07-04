import styled from "styled-components";

export const CostDashboardContainer = styled.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const GeneratedBadge = styled.span`
  background: #198754;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  font-weight: 500;
`;

export const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 3rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`;

export const EmptyIcon = styled.div`
  color: #6c757d;
  margin-bottom: 1rem;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
`;

export const EmptyText = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SummaryCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  text-align: center;
`;

export const SummaryIcon = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  margin-bottom: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const SummaryValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.25rem;
`;

export const SummaryLabel = styled.div`
  font-size: 0.75rem;
  color: #6c757d;
`;

export const ReportSection = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailRow = styled.div<{
  $highlight?: boolean;
  $indent?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  padding-left: ${(props) => (props.$indent ? "1rem" : "0")};

  ${(props) =>
    props.$highlight &&
    `
    font-weight: 600;
    color: #212529;
    padding-top: 0.75rem;
    border-top: 1px solid #dee2e6;
  `}
`;

export const DetailLabel = styled.span`
  color: #495057;
`;

export const DetailValue = styled.span<{ $color?: string }>`
  font-weight: 500;
  color: ${(props) => props.$color || "#212529"};
`;

export const MemberCostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const MemberCostCard = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`;

export const MemberName = styled.div`
  font-size: 0.875rem;
  color: #495057;
  margin-bottom: 0.25rem;
`;

export const MemberAmount = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: #198754;
`;

export const GuestTable = styled.table`
  width: 100%;
  font-size: 0.875rem;
`;

export const TableHeader = styled.thead`
  background: #f8f9fa;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dee2e6;
`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
  color: #495057;
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  color: #212529;
`;

export const TotalRow = styled.tr`
  background: #f8f9fa;
  font-weight: 600;
`;

export const InfoBox = styled.div`
  background: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.875rem;
  color: #055160;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-top: 1rem;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
`;

export const AdjustmentTag = styled.span`
  display: inline-block;
  background: #ffc107;
  color: #664d03;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
`;

export const GeneratedInfo = styled.div`
  text-align: center;
  color: #6c757d;
  font-size: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`;
