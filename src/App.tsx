import React, { FC } from "react";
import { useSelector } from "react-redux";
import ThemeSwitch from "./components/ThemeSwitch";
import { ContentWrapper, GlobalWrapper, Margin } from "./styles";
import AppState from "./redux/state";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./screens/home/HomeContainer";
import TodoContainer from "./screens/todo/TodoContainer";
import DatesContainer from "./screens/dates/DatesContainer";
import GroceriesContainer from "./screens/groceries/GroceriesContainer";
import EconomyContainer from "./screens/economy/EconomyContainer";
import NotFound from "./screens/errors/NotFound";

const App: FC = () => {
  const { backgroundColor } = useSelector((state: AppState) => state.theme);

  return (
    <GlobalWrapper background={backgroundColor}>
      <ThemeSwitch />
      <ContentWrapper>
        <Margin>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/todo" element={<TodoContainer />} />
            <Route path="/groceries" element={<GroceriesContainer />} />
            <Route path="/dates" element={<DatesContainer />} />
            <Route path="/dates" element={<DatesContainer />} />
            <Route path="/economy" element={<EconomyContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Margin>
      </ContentWrapper>
    </GlobalWrapper>
  );
};

export default App;
