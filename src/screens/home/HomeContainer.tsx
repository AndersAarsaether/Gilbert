import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import Home from "screens/home/Home";

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
      firstButtonColor={extraColor4}
      secondButtonColor={extraColor3}
      thirdButtonColor={extraColor1}
      fourthButtonColor={extraColor2}
      primaryButtonColor={controlColor}
      primaryButtonTextColor={fontContrastColor}
    />
  );
};

export default HomeContainer;
