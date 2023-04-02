import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import Todo from "screens/todo/Todo";

const TodoContainer: FC = () => {
  const todos = [
    { description: "Støvsuge soverommet", appointee: "Anders" },
    { description: "Se formel 1", appointee: "Begge" },
    { description: "Kode", appointee: "Vilde" },
    { description: "Trene", appointee: "Begge" },
    { description: "Spille Harry Potter", appointee: "Vilde" },
    { description: "Vanne planter", appointee: "Anders" },
    { description: "Gjøre skole", appointee: "Anders" },
    { description: "Lage middag", appointee: "Begge" },
  ];

  const { fontColor, foregroundColor, controlColor, fontContrastColor } =
    useSelector((state: AppState) => state.theme);

  return (
    <Todo
      fontColor={fontColor}
      fontContrastColor={fontContrastColor}
      todos={todos}
      foregroundColor={foregroundColor}
      controlColor={controlColor}
    />
  );
};

export default TodoContainer;