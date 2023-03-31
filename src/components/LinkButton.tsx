import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
`;

const Circle = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 100%;
  border-width: 0;
  background-color: ${(props) => props.color};
`;

const Label = styled.span<{ color: string }>`
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
      <Circle color={background} onClick={onClick}>
        {icon}
      </Circle>
      <Label color={textcolor}>{label}</Label>
    </Wrapper>
  );
};

export default LinkButton;
