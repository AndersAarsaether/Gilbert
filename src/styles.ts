import styled from "styled-components";

export const GlobalWrapper = styled.div<{ background: string }>`
  position: fixed;
  background-color: ${(props) => (props.background)};
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Margin = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 90rem;
`;