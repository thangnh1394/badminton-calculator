import React from "react";
import { AlertTriangle } from "lucide-react";
import { formatCurrency } from "../../../utils/calculations";
import {
  ModalOverlay,
  ModalContent,
  ModalIcon,
  ModalTitle,
  ModalMessage,
  GuestFeeInfo,
  GuestFeeLabel,
  GuestFeeAmount,
  ButtonGroup,
  Button,
} from "./styles";

interface WarningModalProps {
  show: boolean;
  guestFeeTotal: number;
  onCancel: () => void;
  onContinue: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({
  show,
  guestFeeTotal,
  onCancel,
  onContinue,
}) => {
  if (!show) return null;

  return (
    <ModalOverlay $show={show} onClick={onCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalIcon>
          <AlertTriangle />
        </ModalIcon>

        <ModalTitle>Generate Report</ModalTitle>

        <ModalMessage>
          You will use current guest fee to generate next report
        </ModalMessage>

        <GuestFeeInfo>
          <GuestFeeLabel>Current Guest Fee</GuestFeeLabel>
          <GuestFeeAmount>{formatCurrency(guestFeeTotal)}</GuestFeeAmount>
        </GuestFeeInfo>

        <ButtonGroup>
          <Button $variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button $variant="primary" onClick={onContinue}>
            Continue
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WarningModal;
