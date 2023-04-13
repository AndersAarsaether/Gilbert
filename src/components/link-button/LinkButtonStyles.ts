import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
`;

export const Circle = styled(Link)<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 100%;
  border-width: 0;
  background-color: ${(props) => props.color};
`;

export const Label = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  padding-top: 1rem;
`;