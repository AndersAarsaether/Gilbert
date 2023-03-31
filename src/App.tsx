import React, { FC } from "react";
import { useSelector } from "react-redux";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import AppState from "./redux/state";
import HomeContainer from "./screens/home/HomeContainer";

const App: FC = () => {
  const { backgroundColor } = useSelector((state: AppState) => state.theme);

  return (
    <GlobalWrapper background={backgroundColor}>
      <ThemeSwitch />
      <ContentWrapper>
        <Margin>
          <HomeContainer />
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
