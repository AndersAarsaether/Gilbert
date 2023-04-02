import React, { FC } from "react";
import { useSelector } from "react-redux";
import AppState from "redux/state";
import { User } from "redux/todos/types";
import Todo from "screens/todo/Todo";

const TodoContainer: FC = () => {
  const todos = [
    { description: "Støvsuge soverommet", appointee: User.Anders },
    { description: "Se formel 1", appointee: User.Both },
    { description: "Kode", appointee: User.Vilde },
    { description: "Trene", appointee: User.Both },
    { description: "Spille Harry Potter", appointee: User.Vilde },
    { description: "Vanne planter", appointee: User.Anders },
    { description: "Gjøre skole", appointee: User.Anders },
    { description: "Lage middag", appointee: User.Both },
  ];

  const { fontColor } = useSelector((state: AppState) => state.theme);

  return <Todo textColor={fontColor} todos={todos} />;
};

export default TodoContainer;
