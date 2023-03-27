import React, { FC } from "react";
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
          <h1>test</h1>
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
