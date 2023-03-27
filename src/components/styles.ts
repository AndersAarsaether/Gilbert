import styled from "styled-components";

export const GlobalWrapper = styled.div<{ darkMode: boolean }>`
  position: fixed;
  background-color: ${(props) => (props.darkMode ? `#1F1F31` : `#F7E7CE`)};
  width: 100%;
  height: 100%;
`;
