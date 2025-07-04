import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Info,
  Edit2,
  Trash2,
} from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import type { Guest } from "../../types";
import { formatCurrency } from "../../utils/calculations";
import {
  GuestEntryContainer,
  Header,
  BackButton,
  HeaderContent,
  Title,
  Subtitle,
  CalendarCard,
  CalendarHeader,
  MonthNav,
  MonthButton,
  MonthTitle,
  CalendarGrid,
  CalendarDayHeader,
  CalendarDay,
  GuestCountBadge,
  EmptyDay,
  GuestForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FrequentGuestButtons,
  FrequentGuestButton,
  AddButton,
  GuestList,
  GuestItem,
  GuestInfo,
  GuestName,
  GuestNote,
  GuestAmount,
  GuestActions,
  ActionButton,
  InfoMessage,
  GuestIndicator,
} from "./styles";

interface GuestEntryProps {
  onBack: () => void;
}

const GuestEntry: React.FC<GuestEntryProps> = ({ onBack }) => {
  const {
    config,
    monthlyData,
    currentMonth,
    runningGuestFees,
    addGuest,
    updateGuest,
    deleteGuest,
  } = useApp();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [guestForm, setGuestForm] = useState<Guest>({
    name: "",
    amount: 0,
    note: "",
    date: "",
  });
  const [editingGuest, setEditingGuest] = useState<string | null>(null);

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

  const handleDateSelect = (day: number) => {
    if (!isPlayingDay(day)) return;

    const dateKey = formatDateKey(day);
    setSelectedDate(dateKey);
    setGuestForm({
      name: "",
      amount: 0,
      note: "",
      date: dateKey,
    });
    setEditingGuest(null);
  };

  const handleFrequentGuestSelect = (name: string) => {
    setGuestForm((prev) => ({ ...prev, name }));
  };

  const handleSubmit = () => {
    if (!guestForm.name || guestForm.amount <= 0) return;

    if (editingGuest) {
      updateGuest(selectedDate, editingGuest, guestForm);
      setEditingGuest(null);
    } else {
      addGuest(selectedDate, guestForm);
    }

    setGuestForm({
      name: "",
      amount: 0,
      note: "",
      date: selectedDate,
    });
  };

  const handleEdit = (guest: Guest) => {
    if (!guest.id) return;
    setGuestForm(guest);
    setEditingGuest(guest.id);
  };

  const handleDelete = (guestId: string) => {
    if (confirm("Are you sure you want to delete this guest?")) {
      deleteGuest(selectedDate, guestId);
    }
  };

  const selectedDateGuests = selectedDate
    ? runningGuestFees[selectedDate] || []
    : [];
  const selectedDayNumber = selectedDate
    ? parseInt(selectedDate.split("-")[2])
    : null;

  return (
    <GuestEntryContainer>
      <Header>
        <BackButton onClick={onBack}>
          <ArrowLeft />
        </BackButton>
        <HeaderContent>
          <Title>Add Guests</Title>
          <Subtitle>Select a playing day</Subtitle>
        </HeaderContent>
      </Header>

      <InfoMessage>
        <Calendar />
        <span>
          Tap on any blue playing day ({config.schedule.daysOfWeek.join(" or ")}
          ) to add guests for that session.
        </span>
      </InfoMessage>

      <CalendarCard>
        <CalendarHeader>
          <MonthTitle>{monthName}</MonthTitle>
        </CalendarHeader>

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
            const hasGuests =
              monthlyData.guestEntries[dateKey] &&
              monthlyData.guestEntries[dateKey].length > 0;
            const isSelected = selectedDate === dateKey;

            return (
              <CalendarDay
                key={index}
                $isPlayingDay={playing}
                $hasGuests={hasGuests}
                $isSelected={isSelected}
                onClick={() => handleDateSelect(day)}
                disabled={!playing}
              >
                {day}
                {hasGuests && <GuestIndicator />}
              </CalendarDay>
            );
          })}
        </CalendarGrid>
      </CalendarCard>

      {selectedDate && (
        <>
          <GuestForm>
            <FormTitle>
              {editingGuest ? "Edit Guest" : "Add New Guest"} -{" "}
              {selectedDayNumber &&
                new Date(year, month - 1, selectedDayNumber).toLocaleDateString(
                  "en-US",
                  { weekday: "long", month: "long", day: "numeric" }
                )}
            </FormTitle>

            <FormGroup>
              <FormLabel>Guest Name</FormLabel>
              <FrequentGuestButtons>
                {config.frequentGuests.map((guest) => (
                  <FrequentGuestButton
                    key={guest}
                    $selected={guestForm.name === guest}
                    onClick={() => handleFrequentGuestSelect(guest)}
                  >
                    {guest}
                  </FrequentGuestButton>
                ))}
              </FrequentGuestButtons>
              <FormInput
                type="text"
                placeholder="Or enter custom name"
                value={guestForm.name}
                onChange={(e) =>
                  setGuestForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Amount ($)</FormLabel>
              <FormInput
                type="number"
                placeholder="Enter amount"
                value={guestForm.amount || ""}
                onChange={(e) =>
                  setGuestForm((prev) => ({
                    ...prev,
                    amount: Number(e.target.value),
                  }))
                }
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Note (Optional)</FormLabel>
              <FormTextarea
                placeholder="Add a note"
                value={guestForm.note}
                onChange={(e) =>
                  setGuestForm((prev) => ({ ...prev, note: e.target.value }))
                }
              />
            </FormGroup>

            <AddButton
              onClick={handleSubmit}
              disabled={!guestForm.name || guestForm.amount <= 0}
            >
              {editingGuest ? "Update Guest" : "Add Guest"}
            </AddButton>
          </GuestForm>

          {selectedDateGuests.length > 0 && (
            <GuestList>
              <FormTitle>Guests for this date</FormTitle>
              {selectedDateGuests.map((guest) => (
                <GuestItem key={guest.id}>
                  <GuestInfo>
                    <GuestName>{guest.name}</GuestName>
                    {guest.note && <GuestNote>{guest.note}</GuestNote>}
                  </GuestInfo>
                  <GuestActions>
                    <GuestAmount>{formatCurrency(guest.amount)}</GuestAmount>
                    <ActionButton onClick={() => handleEdit(guest)}>
                      <Edit2 />
                    </ActionButton>
                    <ActionButton
                      onClick={() => guest.id && handleDelete(guest.id)}
                      color="#dc3545"
                    >
                      <Trash2 />
                    </ActionButton>
                  </GuestActions>
                </GuestItem>
              ))}
            </GuestList>
          )}
        </>
      )}
    </GuestEntryContainer>
  );
};

export default GuestEntry;
