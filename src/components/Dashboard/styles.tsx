import styled from "styled-components";

export const DashboardContainer = styled.div`
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
`;

export const StatsCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

export const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StatsLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
`;

export const StatsValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #198754;
  margin-top: 0.5rem;
`;

export const StatsSubtext = styled.div`
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
`;

export const SummaryCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

export const SummaryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

export const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

export const SummaryName = styled.span`
  color: #495057;
`;

export const SummaryAmount = styled.span`
  font-weight: 600;
  color: #212529;
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ActionButton = styled.button<{ $variant: "primary" | "success" }>`
  background-color: ${(props) =>
    props.$variant === "primary" ? "#0d6efd" : "#198754"};
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
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

export const CalendarCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CalendarTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`;

export const CalendarStats = styled.div`
  font-size: 0.75rem;
  color: #0d6efd;
  font-weight: 500;
`;

export const CalendarPreview = styled.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`;

export const CalendarDays = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0d6efd;
`;

export const CalendarDaysDetail = styled.div`
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
`;
