import React, { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding-top: 5rem;
  width: 60%;
`;

const Button = styled.button<{ color: string; textColor: string }>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 2rem;
  border-radius: 2rem;
  border-width: 0;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.textColor};
`;

interface PrimaryButtonProps {
  color: string;
  textColor: string;
  onClick: () => void;
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  color,
  onClick,
  label,
  textColor,
}) => {
  return (
    <ButtonWrapper>
      <Button color={color} onClick={onClick} textColor={textColor}>
        {label}
      </Button>
    </ButtonWrapper>
  );
};

export default PrimaryButton;
