import React, { useState, useEffect } from "react";
import { Calendar, Package, Users, X, Save, SettingsIcon } from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import type { Config } from "../../types";
import {
  SettingsContainer,
  Header,
  Title,
  Subtitle,
  SettingsSection,
  SectionHeader,
  SectionTitle,
  FormGroup,
  FormLabel,
  FormInput,
  DaySelector,
  DayButton,
  MembersList,
  MemberItem,
  MemberName,
  RemoveButton,
  AddMemberForm,
  AddMemberInput,
  AddButton,
  SaveButton,
  InfoBox,
  RestMonthButton,
} from "./styles";

const Settings: React.FC = () => {
  const { config, updateConfig, restMonth } = useApp();
  const [localConfig, setLocalConfig] = useState<Config>(config);
  const [newMember, setNewMember] = useState("");
  const [newFrequentGuest, setNewFrequentGuest] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setLocalConfig(config);
  }, [config]);

  useEffect(() => {
    setHasChanges(JSON.stringify(localConfig) !== JSON.stringify(config));
  }, [localConfig, config]);

  const handleInputChange = (
    section: keyof Config,
    field: string,
    value: any
  ) => {
    setLocalConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof Config],
        [field]: value,
      },
    }));
  };

  const handleDayToggle = (day: string) => {
    const currentDays = localConfig.schedule.daysOfWeek;
    const newDays = currentDays.includes(day)
      ? currentDays.filter((d) => d !== day)
      : [...currentDays, day];

    setLocalConfig((prev) => ({
      ...prev,
      schedule: { ...prev.schedule, daysOfWeek: newDays },
    }));
  };

  const handleAddMember = () => {
    if (newMember.trim() && !localConfig.members.includes(newMember.trim())) {
      setLocalConfig((prev) => ({
        ...prev,
        members: [...prev.members, newMember.trim()],
      }));
      setNewMember("");
    }
  };

  const handleRemoveMember = (member: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m !== member),
    }));
  };

  const handleAddFrequentGuest = () => {
    if (
      newFrequentGuest.trim() &&
      !localConfig.frequentGuests.includes(newFrequentGuest.trim())
    ) {
      setLocalConfig((prev) => ({
        ...prev,
        frequentGuests: [...prev.frequentGuests, newFrequentGuest.trim()],
      }));
      setNewFrequentGuest("");
    }
  };

  const handleRemoveFrequentGuest = (guest: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      frequentGuests: prev.frequentGuests.filter((g) => g !== guest),
    }));
  };

  const handleSave = () => {
    updateConfig(localConfig);
    setHasChanges(false);
  };

  const handleResetMonth = () => {
    restMonth();
  };

  return (
    <SettingsContainer>
      <Header>
        <Title>Settings</Title>
        <Subtitle>Configure app defaults</Subtitle>
      </Header>

      {/* Court Settings */}
      <SettingsSection>
        <SectionHeader>
          <Calendar style={{ color: "#0d6efd" }} />
          <SectionTitle>Court Settings</SectionTitle>
        </SectionHeader>

        <FormGroup>
          <FormLabel>Cost per Hour ($)</FormLabel>
          <FormInput
            type="number"
            value={localConfig.court.costPerHour}
            onChange={(e) =>
              handleInputChange("court", "costPerHour", Number(e.target.value))
            }
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Hours per Day</FormLabel>
          <FormInput
            type="number"
            step="0.5"
            value={localConfig.court.hoursPerDay}
            onChange={(e) =>
              handleInputChange("court", "hoursPerDay", Number(e.target.value))
            }
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Discount Percentage (%)</FormLabel>
          <FormInput
            type="number"
            value={localConfig.court.discountPercentage}
            onChange={(e) =>
              handleInputChange(
                "court",
                "discountPercentage",
                Number(e.target.value)
              )
            }
          />
        </FormGroup>
      </SettingsSection>

      {/* Shuttle Settings */}
      <SettingsSection>
        <SectionHeader>
          <Package style={{ color: "#198754" }} />
          <SectionTitle>Shuttle Settings</SectionTitle>
        </SectionHeader>

        <FormGroup>
          <FormLabel>Cost per Tube ($)</FormLabel>
          <FormInput
            type="number"
            value={localConfig.shuttle.costPerTube}
            onChange={(e) =>
              handleInputChange(
                "shuttle",
                "costPerTube",
                Number(e.target.value)
              )
            }
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Default Tubes per Month</FormLabel>
          <FormInput
            type="number"
            value={localConfig.shuttle.defaultTubesPerMonth}
            onChange={(e) =>
              handleInputChange(
                "shuttle",
                "defaultTubesPerMonth",
                Number(e.target.value)
              )
            }
          />
        </FormGroup>
      </SettingsSection>

      {/* Schedule Settings */}
      <SettingsSection>
        <SectionHeader>
          <Calendar style={{ color: "#6f42c1" }} />
          <SectionTitle>Playing Schedule</SectionTitle>
        </SectionHeader>

        <FormGroup>
          <FormLabel>Playing Days</FormLabel>
          <DaySelector>
            {daysOfWeek.map((day) => (
              <DayButton
                key={day}
                $selected={localConfig.schedule.daysOfWeek.includes(day)}
                onClick={() => handleDayToggle(day)}
              >
                {day}
              </DayButton>
            ))}
          </DaySelector>
        </FormGroup>
      </SettingsSection>

      {/* Members Settings */}
      <SettingsSection>
        <SectionHeader>
          <Users style={{ color: "#fd7e14" }} />
          <SectionTitle>Members</SectionTitle>
        </SectionHeader>

        <MembersList>
          {localConfig.members.map((member, index) => (
            <MemberItem key={index}>
              <MemberName>{member}</MemberName>
              <RemoveButton onClick={() => handleRemoveMember(member)}>
                <X />
              </RemoveButton>
            </MemberItem>
          ))}
        </MembersList>

        <AddMemberForm>
          <AddMemberInput
            type="text"
            placeholder="Add new member"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddMember()}
          />
          <AddButton onClick={handleAddMember} disabled={!newMember.trim()}>
            Add
          </AddButton>
        </AddMemberForm>
      </SettingsSection>

      {/* Frequent Guests Settings */}
      <SettingsSection>
        <SectionHeader>
          <Users style={{ color: "#20c997" }} />
          <SectionTitle>Frequent Guests</SectionTitle>
        </SectionHeader>

        <MembersList>
          {localConfig.frequentGuests.map((guest, index) => (
            <MemberItem key={index}>
              <MemberName>{guest}</MemberName>
              <RemoveButton onClick={() => handleRemoveFrequentGuest(guest)}>
                <X />
              </RemoveButton>
            </MemberItem>
          ))}
        </MembersList>

        <AddMemberForm>
          <AddMemberInput
            type="text"
            placeholder="Add frequent guest"
            value={newFrequentGuest}
            onChange={(e) => setNewFrequentGuest(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddFrequentGuest()}
          />
          <AddButton
            onClick={handleAddFrequentGuest}
            disabled={!newFrequentGuest.trim()}
          >
            Add
          </AddButton>
        </AddMemberForm>
      </SettingsSection>

      <RestMonthButton onClick={handleResetMonth} disabled={false}>
        <SettingsIcon style={{ marginRight: "0.5rem" }} />
        Reset Month
      </RestMonthButton>

      {hasChanges && (
        <>
          <InfoBox>Changes will be applied after saving</InfoBox>
          <SaveButton onClick={handleSave}>
            <Save style={{ marginRight: "0.5rem" }} />
            Save Changes
          </SaveButton>
        </>
      )}
    </SettingsContainer>
  );
};

export default Settings;
