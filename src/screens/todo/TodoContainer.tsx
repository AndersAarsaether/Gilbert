import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import Todo from "screens/todo/Todo";
import { mockTodos } from "models/task";

const TodoContainer: FC = () => {
  const {
    backgroundColor,
    fontColor,
    foregroundColor,
    controlColor,
    fontContrastColor,
    extraColor1,
    extraColor2,
    extraColor3,
    extraColor4,
  } = useSelector((state: AppState) => state.theme);

  return (
    <Todo
      fontColor={fontColor}
      fontContrastColor={fontContrastColor}
      todos={mockTodos}
      foregroundColor={foregroundColor}
      controlColor={controlColor}
      checkmarkColor={backgroundColor}
      checkboxColors={[extraColor1, extraColor2, extraColor3, extraColor4]}
    />
  );
};

export default TodoContainer;
