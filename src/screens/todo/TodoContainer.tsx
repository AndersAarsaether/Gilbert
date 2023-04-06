import { Task } from "models/task";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import Todo from "screens/todo/Todo";

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

  const mockTodos = [
    {
      description: "Støvsuge soverommet",
      appointee: "Anders",
      finished: false,
    },
    { description: "Se formel 1", appointee: "Begge", finished: false },
    { description: "Kode", appointee: "Vilde", finished: false },
    { description: "Trene", appointee: "Begge", finished: false },
    { description: "Spille Harry Potter", appointee: "Vilde", finished: false },
    { description: "Vanne planter", appointee: "Anders", finished: false },
    { description: "Gjøre skole", appointee: "Anders", finished: false },
    { description: "Lage middag", appointee: "Begge", finished: false },
  ] as Task[];

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
