import { useState } from "react";
import { AppProvider } from "./contexts/AppContext";
import Navigation from "./components/common/Navigation";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import GuestEntry from "./components/GuestEntry";
import CostReview from "./components/CostReview";
import CostDashboard from "./components/CostDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveTab} />;
      case "settings":
        return <Settings />;
      case "guests":
        return <GuestEntry onBack={() => setActiveTab("dashboard")} />;
      case "cost-review":
        return (
          <CostReview
            onBack={() => setActiveTab("dashboard")}
            onNavigateToCostDashboard={() => setActiveTab("costs")}
          />
        );
      case "costs":
        return <CostDashboard />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  const showNavigation = ["dashboard", "costs", "settings"].includes(activeTab);

  return (
    <AppProvider>
      <div className="app">
        {renderContent()}
        {showNavigation && (
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        )}
      </div>
    </AppProvider>
  );
}

export default App;
