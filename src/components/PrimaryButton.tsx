import React, { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding-top: 5rem;
  width: 60%;
`;

const Button = styled.button<{ color: string; fontColor: string }>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 2.2rem;
  border-radius: 2rem;
  border-width: 0;
  font-weight: 400;
  font-size: 1.1rem;
  color: ${(props) => props.fontColor};
`;

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
