import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
`;

export const Input = styled.input<{ background: string; fontColor: string }>`
  display: flex;
  flex: 3;
  background: ${(props) => props.background};
  color: ${(props) => props.fontColor};
  font-size: medium;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-width: 0;
  padding-left: 1rem;
`;

export const Button = styled.button<{ color: string; fontColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  border-radius: 0.5rem;
  border-width: 0;
  font-size: medium;
`;