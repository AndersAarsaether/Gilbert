import styled from "styled-components";

export const Header = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 2.3rem;
  font-weight: 300;
`;