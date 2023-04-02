import React, { FC, useState } from "react";
import { Task, User } from "redux/todos/types";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";

interface TodoProps {
  textColor: string;
  todos: Task[];
}

const Todo: FC<TodoProps> = ({ textColor, todos }) => {
  const [user, setUser] = useState<User>(User.Both);

  const filteredTodos = todos.filter((task) => task.appointee == user);
  return (
    <PageWrapper>
      <Title text="To do" color={textColor} />
    </PageWrapper>
  );
};

export default Todo;
