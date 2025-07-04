import styled from "styled-components";

export const CostReviewContainer = styled.div`
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

export const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SummaryCard = styled.div<{ $color?: string }>`
  background: white;
  border-radius: 0.75rem;
  padding: 1rem;
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

export const CostSection = styled.div`
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
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: #0d6efd;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 16px;
    height: 16px;
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

export const AdjustmentSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
`;

export const AdjustmentTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.75rem;
`;

export const AdjustmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const AdjustmentItem = styled.div``;

export const AdjustmentLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
`;

export const AdjustmentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
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
  margin-bottom: 1rem;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ActionButton = styled.button<{ $variant: "primary" | "success" }>`
  padding: 1rem;
  background: ${(props) =>
    props.$variant === "success" ? "#198754" : "#0d6efd"};
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) =>
      props.$variant === "success" ? "#157347" : "#0b5ed7"};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const MembersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const MemberChip = styled.div<{ $inactive?: boolean }>`
  padding: 0.25rem 0.75rem;
  background: ${(props) => (props.$inactive ? "#f8f9fa" : "#e7f1ff")};
  color: ${(props) => (props.$inactive ? "#6c757d" : "#0d6efd")};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: ${(props) => (props.$inactive ? "line-through" : "none")};
`;
