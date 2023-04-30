import React, { FC } from "react";
import styled from "styled-components";

const Header = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 2.3rem;
  font-weight: 300;
`;

interface TitleProps {
  text: string;
  color: string;
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return <Header color={color}> {text} </Header>;
};

export default Title;
