import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding-top: 2rem;
  width: 15rem;
`;

export const Button = styled.button<{ color: string; fontColor: string }>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 2.2rem;
  border-radius: 2rem;
  border-width: 0;
  font-weight: 400;
  font-size: 1.1rem;
  color: ${(props) => props.fontColor};
`;