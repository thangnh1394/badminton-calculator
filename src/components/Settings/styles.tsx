import styled from "styled-components";

export const SettingsContainer = styled.div`
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

export const SettingsSection = styled.div`
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

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
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

export const DaySelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const DayButton = styled.button<{ $selected: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.$selected ? "#0d6efd" : "#ced4da")};
  background-color: ${(props) => (props.$selected ? "#0d6efd" : "white")};
  color: ${(props) => (props.$selected ? "white" : "#495057")};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$selected ? "#0b5ed7" : "#f8f9fa")};
  }
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
`;

export const MemberName = styled.span`
  font-size: 0.875rem;
  color: #495057;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #c82333;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const AddMemberForm = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const AddMemberInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`;

export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0b5ed7;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #198754;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #157347;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const RestMonthButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color:rgb(221, 89, 89);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  &:hover {
    background-color: : rgb(221, 89, 89);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const InfoBox = styled.div`
  background-color: #cff4fc;
  border: 1px solid #b6effb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #055160;
`;
