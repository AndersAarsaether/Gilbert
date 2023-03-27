import React, { FC } from "react";
import { GlobalWrapper } from "./styles";

interface AppWrapperProps {
  children: React.ReactNode;
  useDark: boolean;
}

const AppWrapper: FC<AppWrapperProps> = ({ children, useDark }) => {
  return <GlobalWrapper useDark={useDark}>{children}</GlobalWrapper>;
};

export default AppWrapper;
