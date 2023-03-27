import React, { FC } from "react";
import { GlobalWrapper } from "./styles";

interface AppWrapperProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const AppWrapper: FC<AppWrapperProps> = ({ children, darkMode }) => {
  return <GlobalWrapper darkMode={darkMode}>{children}</GlobalWrapper>;
};

export default AppWrapper;
