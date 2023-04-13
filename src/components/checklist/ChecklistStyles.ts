import styled, { keyframes } from "styled-components";

//Animations
export const fadeInLeft = keyframes`
  from {
    padding-right: 3rem;
    opacity: 0;
  }
  to {
    padding-right: 0;
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

//Styles
export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const TaskWrapper = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.background};
  border-width: 0;
  &.fade-exit {
    animation: ${fadeOut} 1s;
    animation-delay: 1s;
  }
`;

export const Checkbox = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border-width: 0;
  margin-inline: 1rem;
  background-color: ${(props) => props.background};
`;

export const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: medium;
`;

export const CheckIconWrapper = styled.div`
  animation: ${fadeInLeft} 0.5s ease forwards;
`;

export const FinishedText = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: ${(props) => props.color};
  animation: ${fadeIn} 0.5s ease forwards;
`;
