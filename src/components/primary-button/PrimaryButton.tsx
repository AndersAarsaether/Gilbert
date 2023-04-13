import React, { FC } from "react";
import { Button, ButtonWrapper } from "./PrimaryButtonStyles";

interface PrimaryButtonProps {
  color: string;
  fontColor: string;
  onClick: () => void;
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  color,
  onClick,
  label,
  fontColor,
}) => {
  return (
    <ButtonWrapper>
      <Button color={color} onClick={onClick} fontColor={fontColor}>
        {label}
      </Button>
    </ButtonWrapper>
  );
};

export default PrimaryButton;
