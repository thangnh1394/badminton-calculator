import React from "react";
import { Home, DollarSign, Settings } from "lucide-react";
import { NavContainer, NavWrapper, NavList, NavItem, NavLabel } from "./styles";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "costs", icon: DollarSign, label: "Costs" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <NavContainer>
      <NavWrapper>
        <NavList>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavItem
                key={item.id}
                $active={activeTab === item.id}
                onClick={() => onTabChange(item.id)}
              >
                <Icon />
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            );
          })}
        </NavList>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
