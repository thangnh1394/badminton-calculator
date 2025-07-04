import React, { useState, useEffect } from "react";
import { X, Calendar, Users, Package, Info } from "lucide-react";
import { useApp } from "../../../contexts/AppContext";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  TabContainer,
  TabButton,
  SectionTitle,
  CalendarGrid,
  CalendarDayHeader,
  CalendarDay,
  EmptyDay,
  CalendarLegend,
  LegendItem,
  LegendColor,
  MemberGrid,
  MemberCard,
  MemberName,
  MemberStatus,
  ShuttleSection,
  ShuttleInput,
  InputLabel,
  NumberInput,
  Button,
  InfoBox,
  SummaryBox,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
} from "./styles";

interface AdjustmentModalProps {
  show: boolean;
  onClose: () => void;
  onApply: (adjustments: {
    playingDays: number;
    extraShuttleCost: number;
    excludedDates: string[];
    includedDates: string[];
    absentMembers: string[];
    extraShuttleTubes: number;
  }) => void;
}

type TabType = "calendar" | "members" | "shuttle";

const AdjustmentModal: React.FC<AdjustmentModalProps> = ({
  show,
  onClose,
  onApply,
}) => {
  const { config, monthlyData, currentMonth } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>("calendar");

  // Calendar adjustments
  const [excludedDates, setExcludedDates] = useState<string[]>([]);
  const [includedDates, setIncludedDates] = useState<string[]>([]);

  // Member adjustments
  const [absentMembers, setAbsentMembers] = useState<string[]>([]);

  // Shuttle adjustments
  const [extraShuttleTubes, setExtraShuttleTubes] = useState(0);
  const [extraShuttleCost, setExtraShuttleCost] = useState(0);

  // Parse current month
  const [year, month] = currentMonth.split("-").map(Number);
  const monthName = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Calendar calculations
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const dayHeaders = ["S", "M", "T", "W", "T", "F", "S"];

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const isPlayingDay = (day: number): boolean => {
    const date = new Date(year, month - 1, day);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    return config.schedule.daysOfWeek.includes(dayName);
  };

  const formatDateKey = (day: number): string => {
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  };

  const handleDateToggle = (day: number) => {
    const dateKey = formatDateKey(day);
    const isDefault = isPlayingDay(day);

    if (isDefault) {
      // Toggle exclusion for default playing days
      if (excludedDates.includes(dateKey)) {
        setExcludedDates((prev) => prev.filter((d) => d !== dateKey));
      } else {
        setExcludedDates((prev) => [...prev, dateKey]);
      }
    } else {
      // Toggle inclusion for non-playing days
      if (includedDates.includes(dateKey)) {
        setIncludedDates((prev) => prev.filter((d) => d !== dateKey));
      } else {
        setIncludedDates((prev) => [...prev, dateKey]);
      }
    }
  };

  const handleMemberToggle = (member: string) => {
    if (absentMembers.includes(member)) {
      setAbsentMembers((prev) => prev.filter((m) => m !== member));
    } else {
      setAbsentMembers((prev) => [...prev, member]);
    }
  };

  const calculateAdjustedPlayingDays = () => {
    let totalDays = monthlyData.actualPlayingDays;
    totalDays -= excludedDates.length;
    totalDays += includedDates.length;
    return Math.max(0, totalDays);
  };

  const handleApply = () => {
    onApply({
      playingDays: calculateAdjustedPlayingDays(),
      extraShuttleCost:
        extraShuttleCost + extraShuttleTubes * config.shuttle.costPerTube,
      excludedDates,
      includedDates,
      absentMembers,
      extraShuttleTubes,
    });
    handleClose();
  };

  const handleClose = () => {
    // Reset state
    setExcludedDates([]);
    setIncludedDates([]);
    setAbsentMembers([]);
    setExtraShuttleTubes(0);
    setExtraShuttleCost(0);
    setActiveTab("calendar");
    onClose();
  };

  if (!show) return null;

  return (
    <ModalOverlay $show={show} onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Adjustments for {monthName}</ModalTitle>
          <CloseButton onClick={handleClose}>
            <X />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <TabContainer>
            <TabButton
              $active={activeTab === "calendar"}
              onClick={() => setActiveTab("calendar")}
            >
              Calendar
            </TabButton>
            <TabButton
              $active={activeTab === "members"}
              onClick={() => setActiveTab("members")}
            >
              Members
            </TabButton>
            <TabButton
              $active={activeTab === "shuttle"}
              onClick={() => setActiveTab("shuttle")}
            >
              Shuttle
            </TabButton>
          </TabContainer>

          {activeTab === "calendar" && (
            <>
              <SectionTitle>
                <Calendar />
                Adjust Playing Days
              </SectionTitle>

              <InfoBox>
                <Info />
                <span>
                  Tap dates to exclude playing days or include non-playing days
                </span>
              </InfoBox>

              <CalendarGrid>
                {dayHeaders.map((header, index) => (
                  <CalendarDayHeader key={index}>{header}</CalendarDayHeader>
                ))}

                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <EmptyDay key={index} />;
                  }

                  const dateKey = formatDateKey(day);
                  const playing = isPlayingDay(day);
                  const isExcluded = excludedDates.includes(dateKey);
                  const isIncluded = includedDates.includes(dateKey);

                  return (
                    <CalendarDay
                      key={index}
                      $isPlayingDay={playing}
                      $isExcluded={isExcluded}
                      $isIncluded={isIncluded}
                      onClick={() => handleDateToggle(day)}
                    >
                      {day}
                    </CalendarDay>
                  );
                })}
              </CalendarGrid>

              <CalendarLegend>
                <LegendItem>
                  <LegendColor $color="#e7f1ff" />
                  <span>Default playing day</span>
                </LegendItem>
                <LegendItem>
                  <LegendColor $color="#f8d7da" />
                  <span>Excluded</span>
                </LegendItem>
                <LegendItem>
                  <LegendColor $color="#d1e7dd" />
                  <span>Added</span>
                </LegendItem>
              </CalendarLegend>

              <SummaryBox>
                <SummaryRow>
                  <SummaryLabel>Original playing days</SummaryLabel>
                  <SummaryValue>{monthlyData.actualPlayingDays}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>Excluded days</SummaryLabel>
                  <SummaryValue>-{excludedDates.length}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>Added days</SummaryLabel>
                  <SummaryValue>+{includedDates.length}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>
                    <strong>Adjusted total</strong>
                  </SummaryLabel>
                  <SummaryValue>
                    <strong>{calculateAdjustedPlayingDays()}</strong>
                  </SummaryValue>
                </SummaryRow>
              </SummaryBox>
            </>
          )}

          {activeTab === "members" && (
            <>
              <SectionTitle>
                <Users />
                Mark Absent Members
              </SectionTitle>

              <InfoBox>
                <Info />
                <span>Select members who won't participate this month</span>
              </InfoBox>

              <MemberGrid>
                {config.members.map((member, index) => {
                  const isAbsent = absentMembers.includes(member);
                  return (
                    <MemberCard
                      key={index}
                      $absent={isAbsent}
                      onClick={() => handleMemberToggle(member)}
                    >
                      <MemberName>{member}</MemberName>
                      <MemberStatus color={isAbsent ? "#842029" : "#198754"}>
                        {isAbsent ? "Absent" : "Present"}
                      </MemberStatus>
                    </MemberCard>
                  );
                })}
              </MemberGrid>

              <SummaryBox>
                <SummaryRow>
                  <SummaryLabel>Total members</SummaryLabel>
                  <SummaryValue>{config.members.length}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>Absent members</SummaryLabel>
                  <SummaryValue>{absentMembers.length}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>
                    <strong>Active members</strong>
                  </SummaryLabel>
                  <SummaryValue>
                    <strong>
                      {config.members.length - absentMembers.length}
                    </strong>
                  </SummaryValue>
                </SummaryRow>
              </SummaryBox>
            </>
          )}

          {activeTab === "shuttle" && (
            <>
              <SectionTitle>
                <Package />
                Shuttle Adjustments
              </SectionTitle>

              <ShuttleSection>
                <ShuttleInput>
                  <InputLabel>Extra Tubes</InputLabel>
                  <NumberInput
                    type="number"
                    value={extraShuttleTubes}
                    onChange={(e) =>
                      setExtraShuttleTubes(Number(e.target.value))
                    }
                    min="0"
                  />
                </ShuttleInput>

                <ShuttleInput>
                  <InputLabel>Extra Cost ($)</InputLabel>
                  <NumberInput
                    type="number"
                    value={extraShuttleCost}
                    onChange={(e) =>
                      setExtraShuttleCost(Number(e.target.value))
                    }
                    min="0"
                  />
                </ShuttleInput>
              </ShuttleSection>

              <SummaryBox>
                <SummaryRow>
                  <SummaryLabel>Regular tubes</SummaryLabel>
                  <SummaryValue>
                    {config.shuttle.defaultTubesPerMonth} × $
                    {config.shuttle.costPerTube}
                  </SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>Extra tubes</SummaryLabel>
                  <SummaryValue>
                    {extraShuttleTubes} × ${config.shuttle.costPerTube}
                  </SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>Extra cost</SummaryLabel>
                  <SummaryValue>${extraShuttleCost}</SummaryValue>
                </SummaryRow>
                <SummaryRow>
                  <SummaryLabel>
                    <strong>Total extra</strong>
                  </SummaryLabel>
                  <SummaryValue>
                    <strong>
                      $
                      {extraShuttleCost +
                        extraShuttleTubes * config.shuttle.costPerTube}
                    </strong>
                  </SummaryValue>
                </SummaryRow>
              </SummaryBox>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button $variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button $variant="primary" onClick={handleApply}>
            Apply Adjustments
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AdjustmentModal;
