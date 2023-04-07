import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  margin-inline: 1rem;
`;

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWrapper;
