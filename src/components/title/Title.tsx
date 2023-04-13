import React, { FC } from "react";
import { Header } from "./TitleStyles";

interface TitleProps {
  text: string;
  color: string;
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return <Header color={color}> {text} </Header>;
};

export default Title;
