import styled from "styled-components";

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

export const Option = styled.button<{ backgroundColor: string }>`
  height: 100%;
  width: 30%;
  border-width: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.backgroundColor};
`;

export const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: medium;
`;
