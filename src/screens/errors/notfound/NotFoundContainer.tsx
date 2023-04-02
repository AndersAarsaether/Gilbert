import React, { FC } from "react";
import AppState from "redux/state";
import { useSelector } from "react-redux";
import NotFound from "screens/errors/notfound/NotFound";

const NotFoundContainer: FC = () => {
  const { fontColor } = useSelector((state: AppState) => state.theme);
  return <NotFound fontColor={fontColor} />;
};

export default NotFoundContainer;
