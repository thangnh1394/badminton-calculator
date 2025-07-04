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
  max-width: 400px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ModalIcon = styled.div`
  color: #ffc107;
  margin-bottom: 1rem;
  text-align: center;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ModalMessage = styled.p`
  font-size: 0.875rem;
  color: #495057;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const GuestFeeInfo = styled.div`
  background: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const GuestFeeLabel = styled.div`
  font-size: 0.75rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
`;

export const GuestFeeAmount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #198754;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  padding: 0.75rem 1rem;
  background: ${(props) =>
    props.$variant === "primary" ? "#0d6efd" : "white"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#6c757d")};
  border: 1px solid
    ${(props) => (props.$variant === "primary" ? "#0d6efd" : "#6c757d")};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$variant === "primary" ? "#0b5ed7" : "#f8f9fa"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
