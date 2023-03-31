import React, { FC } from "react";
import { useSelector } from "react-redux";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import AppState from "./redux/state";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./screens/home/HomeContainer";
import TodoContainer from "./screens/todo/TodoContainer";

const App: FC = () => {
  const { backgroundColor } = useSelector((state: AppState) => state.theme);

  return (
    <GlobalWrapper background={backgroundColor}>
      <ThemeSwitch />
      <ContentWrapper>
        <Margin>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/Todo" element={<TodoContainer />} />
          </Routes>
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
