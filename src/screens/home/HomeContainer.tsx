import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "../../redux/state";
import Home from "./Home";

const HomeContainer: FC = () => {
  const theme = useSelector((state: AppState) => state.theme);

  return <Home theme={theme} />;
};

export default HomeContainer;
