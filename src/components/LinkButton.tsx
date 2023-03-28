import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div<{ color: string }>`
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span<{ color: string }>`
  align-items: center;
  color: ${(props) => props.color};
  padding-top: 1rem;
`;

interface LinkButtonProps {
  background: string;
  label: string;
  textcolor: string;
  icon: ReactNode;
  onClick: () => void;
}

const LinkButton: FC<LinkButtonProps> = ({
  background,
  textcolor,
  label,
  icon,
  onClick,
}) => {
  return (
    <Wrapper>
      <Circle color={background}>{icon}</Circle>
      <Label color={textcolor}>{label}</Label>
    </Wrapper>
  );
};

export default LinkButton;
