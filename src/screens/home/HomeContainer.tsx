import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "../../redux/state";
import Home from "./Home";

const HomeContainer: FC = () => {
  const {
    fontColor,
    extraColor1,
    extraColor2,
    extraColor3,
    extraColor4,
    controlColor,
    fontContrastColor,
  } = useSelector((state: AppState) => state.theme);

  return (
    <Home
      fontColor={fontColor}
      firstButtonColor={extraColor1}
      secondButtonColor={extraColor2}
      thirdButtonColor={extraColor3}
      fourthButtonColor={extraColor4}
      primaryButtonColor={controlColor}
      primaryButtonTextColor={fontContrastColor}
    />
  );
};

export default HomeContainer;
