import React, { FC, useState } from "react";
import Home from "./components/Home";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import { ColorMode, DarkMode } from "./types/Colors";

const App: FC = () => {
  const [theme, setTheme] = useState<ColorMode>(DarkMode);

  return (
    <GlobalWrapper background={theme.background}>
      <ThemeSwitch setTheme={setTheme} />
      <ContentWrapper>
        <Margin>
          <Home />
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
