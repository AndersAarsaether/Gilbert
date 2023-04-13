import React, { FC, ReactNode } from "react";
import { Container } from "./PageWrapperStyles";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWrapper;
