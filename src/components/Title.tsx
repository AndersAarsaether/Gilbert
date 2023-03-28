import React, { FC } from "react";
import styled from "styled-components";

const Header = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Palatino", serif;
`;

interface TitleProps {
  text: string;
  color: string;
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return <Header color={color}> {text} </Header>;
};

export default Title;
