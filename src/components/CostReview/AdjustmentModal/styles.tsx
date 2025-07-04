import styled from "styled-components";

export const ModalOverlay = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 0.75rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #212529;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ModalBody = styled.div`
  padding: 1.25rem;
  overflow-y: auto;
  flex: 1;
`;

export const ModalFooter = styled.div`
  padding: 1.25rem;
  border-top: 1px solid #dee2e6;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.$active ? "#0d6efd" : "#6c757d")};
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#0d6efd" : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #0d6efd;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const CalendarDayHeader = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6c757d;
  padding: 0.5rem 0;
`;

export const CalendarDay = styled.button<{
  $isPlayingDay?: boolean;
  $isExcluded?: boolean;
  $isIncluded?: boolean;
  $disabled?: boolean;
}>`
  aspect-ratio: 1;
  border: 1px solid
    ${(props) => {
      if (props.$isExcluded) return "#dc3545";
      if (props.$isIncluded) return "#198754";
      return "transparent";
    }};
  background: ${(props) => {
    if (props.$isExcluded) return "#f8d7da";
    if (props.$isIncluded) return "#d1e7dd";
    if (props.$isPlayingDay) return "#e7f1ff";
    return "#f8f9fa";
  }};
  color: ${(props) => {
    if (props.$isExcluded) return "#842029";
    if (props.$isIncluded) return "#0f5132";
    if (props.$isPlayingDay) return "#0d6efd";
    return "#495057";
  }};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: ${(props) =>
    props.$isPlayingDay || props.$isIncluded ? "500" : "400"};
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  transition: all 0.2s ease;
  position: relative;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const EmptyDay = styled.div`
  aspect-ratio: 1;
`;

export const CalendarLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const LegendColor = styled.div<{ $color: string }>`
  width: 16px;
  height: 16px;
  background: ${(props) => props.$color};
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => (props.$color === "#e7f1ff" ? "#0d6efd" : "transparent")};
`;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const MemberCard = styled.div<{ $absent?: boolean }>`
  padding: 1rem;
  border: 1px solid ${(props) => (props.$absent ? "#dc3545" : "#dee2e6")};
  background: ${(props) => (props.$absent ? "#f8d7da" : "white")};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MemberName = styled.div`
  font-weight: 500;
  color: #212529;
  margin-bottom: 0.25rem;
`;

export const MemberStatus = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.color || "#6c757d"};
`;

export const ShuttleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ShuttleInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  color: #495057;
  min-width: 120px;
`;

export const NumberInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`;

export const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  padding: 0.5rem 1rem;
  background: ${(props) =>
    props.$variant === "primary" ? "#0d6efd" : "white"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#6c757d")};
  border: 1px solid
    ${(props) => (props.$variant === "primary" ? "#0d6efd" : "#6c757d")};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$variant === "primary" ? "#0b5ed7" : "#f8f9fa"};
  }
`;

export const InfoBox = styled.div`
  background: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #055160;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
`;

export const SummaryBox = styled.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SummaryLabel = styled.span`
  color: #6c757d;
`;

export const SummaryValue = styled.span`
  font-weight: 500;
  color: #212529;
`;
