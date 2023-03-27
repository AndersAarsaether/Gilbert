import styled from "styled-components";

export const GlobalWrapper = styled.div<{ useDark: boolean }>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.useDark ? `#1F1F31` : `#F7E7CE`)};
  height: 50px;
  width: 100%;
`;
