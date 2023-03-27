import React, { FC } from "react";
import Home from "./components/Home";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import { DarkMode, LightMode } from "./types/Colors";

const App: FC = () => {

  const color = 1 < 2 ? DarkMode : LightMode

  return (
    <GlobalWrapper background={color.background}>
      <ThemeSwitch />
      <ContentWrapper>
        <Margin>
          <Home />
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
