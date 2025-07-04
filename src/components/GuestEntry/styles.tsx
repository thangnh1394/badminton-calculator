import styled from "styled-components";

export const GuestEntryContainer = styled.div`
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

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MonthButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  padding: 0.25rem;

  &:hover {
    color: #0d6efd;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MonthTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
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
  $hasGuests?: boolean;
  $isSelected?: boolean;
}>`
  aspect-ratio: 1;
  border: 1px solid
    ${(props) => (props.$isSelected ? "#0d6efd" : "transparent")};
  background: ${(props) => {
    if (props.$isSelected) return "#e7f1ff";
    if (props.$isPlayingDay) return "#0d6efd";
    return "#f8f9fa";
  }};
  color: ${(props) =>
    props.$isPlayingDay && !props.$isSelected ? "white" : "#212529"};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$isPlayingDay ? "500" : "400")};
  cursor: ${(props) => (props.$isPlayingDay ? "pointer" : "default")};
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${(props) =>
      props.$isPlayingDay &&
      `
      transform: scale(1.05);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `}
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const GuestIndicator = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  background: #dc3545;
  border-radius: 50%;
`;

export const GuestCountBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  background: #dc3545;
  color: white;
  border-radius: 9px;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 1px solid white;
`;

export const EmptyDay = styled.div`
  aspect-ratio: 1;
`;

export const GuestForm = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

export const FormTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  resize: vertical;
  min-height: 60px;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`;

export const FrequentGuestButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FrequentGuestButton = styled.button<{ $selected?: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.$selected ? "#0d6efd" : "#ced4da")};
  background: ${(props) => (props.$selected ? "#0d6efd" : "white")};
  color: ${(props) => (props.$selected ? "white" : "#495057")};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${(props) => (props.$selected ? "#0b5ed7" : "#f8f9fa")};
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0b5ed7;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export const GuestList = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`;

export const GuestItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GuestInfo = styled.div`
  flex: 1;
`;

export const GuestName = styled.div`
  font-weight: 500;
  color: #212529;
  font-size: 0.875rem;
`;

export const GuestNote = styled.div`
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 0.25rem;
`;

export const GuestAmount = styled.div`
  font-weight: 600;
  color: #198754;
  font-size: 0.875rem;
  margin-right: 0.5rem;
`;

export const GuestActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #6c757d;
  transition: color 0.15s ease;

  &:hover {
    color: ${(props) => props.color || "#0d6efd"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const InfoMessage = styled.div`
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #0c5460;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;
