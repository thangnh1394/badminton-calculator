import styled from "styled-components";

export const ReportContainer = styled.div`
  padding: 1rem;
  padding-bottom: 5rem; // Space for bottom navigation
  max-width: 768px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const BackButton = styled.button`
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
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

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`;

export const CostBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CostRow = styled.div<{ $highlight?: boolean; $indent?: boolean }>`
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

export const CostLabel = styled.span`
  color: #495057;
`;

export const CostValue = styled.span<{ $color?: string }>`
  font-weight: 500;
  color: ${(props) => props.$color || "#212529"};
`;

export const GuestSummaryTable = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
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

export const MemberCostCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const MemberCostItem = styled.div`
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
  font-size: 1.25rem;
  font-weight: bold;
  color: #198754;
`;

export const HighlightBox = styled.div<{
  $variant: "info" | "success" | "warning";
}>`
  background: ${(props) => {
    switch (props.$variant) {
      case "success":
        return "#d1e7dd";
      case "warning":
        return "#fff3cd";
      default:
        return "#cff4fc";
    }
  }};
  border: 1px solid
    ${(props) => {
      switch (props.$variant) {
        case "success":
          return "#badbcc";
        case "warning":
          return "#ffecb5";
        default:
          return "#b6effb";
      }
    }};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export const HighlightTitle = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.color || "#055160"};
`;

export const HighlightContent = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.color || "#055160"};
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ActionButton = styled.button<{
  $variant: "primary" | "success" | "danger";
}>`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => {
    switch (props.$variant) {
      case "success":
        return "#198754";
      case "danger":
        return "#dc3545";
      default:
        return "#0d6efd";
    }
  }};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) => {
      switch (props.$variant) {
        case "success":
          return "#157347";
        case "danger":
          return "#bb2d3b";
        default:
          return "#0b5ed7";
      }
    }};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ExtraShuttleSection = styled.div`
  margin-top: 1rem;
`;

export const ExtraShuttleInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ShuttleInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`;

export const ShuttleButton = styled.button`
  padding: 0.5rem 1rem;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #0b5ed7;
  }
`;
