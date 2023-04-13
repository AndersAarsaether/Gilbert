import React, { FC, ReactNode } from "react";
import { Circle, Label, Wrapper } from "./LinkButtonStyles";

interface LinkButtonProps {
  background: string;
  label: string;
  textcolor: string;
  icon: ReactNode;
  to: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  background,
  textcolor,
  label,
  icon,
  to,
}) => {
  return (
    <Wrapper>
      <Circle color={background} to={to}>
        {icon}
      </Circle>
      <Label color={textcolor}>{label}</Label>
    </Wrapper>
  );
};

export default LinkButton;
