import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import Todo from "screens/todo/Todo";

const TodoContainer: FC = () => {
  const { fontColor } = useSelector((state: AppState) => state.theme);

  return <Todo textColor={fontColor} />;
};

export default TodoContainer;
