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
      category: "Anders",
      finished: false,
    },
    { description: "Se formel 1", category: "Begge", finished: false },
    { description: "Kode", category: "Vilde", finished: false },
    { description: "Trene", category: "Begge", finished: false },
    { description: "Spille Harry Potter", category: "Vilde", finished: false },
    { description: "Vanne planter", category: "Anders", finished: false },
    { description: "Gjøre skole", category: "Anders", finished: false },
    { description: "Lage middag", category: "Begge", finished: false },
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
