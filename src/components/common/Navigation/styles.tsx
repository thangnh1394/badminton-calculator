import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;

export const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${(props) => (props.$active ? "#0d6efd" : "#6c757d")};

  &:hover {
    color: #0d6efd;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const NavLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;
