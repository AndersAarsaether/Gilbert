import React, { FC } from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import AppState from "./redux/state";

const App: FC = () => {
  const theme = useSelector((state: AppState) => state.theme);

  return (
    <GlobalWrapper background={theme.background}>
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
