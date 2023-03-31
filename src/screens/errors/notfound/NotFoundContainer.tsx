import React, { FC } from "react";
import AppState from "../../../redux/state";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";

const NotFoundContainer: FC = () => {
    const {fontColor} = useSelector((state: AppState) => state.theme);
  return <NotFound fontColor={fontColor}/>;
};

export default NotFoundContainer;
