import React, { FC, useState } from "react";
import { Task } from "redux/todos/types";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";
import RadioButtons from "components/RadioButtons";

interface TodoProps {
  fontColor: string;
  fontContrastColor: string;
  todos: Task[];
  foregroundColor: string;
  controlColor: string;
}

const Todo: FC<TodoProps> = ({
  fontColor,
  fontContrastColor,
  todos,
  foregroundColor,
  controlColor,
}) => {
  const [user, setUser] = useState<string>("Begge");

  const filteredTodos = todos.filter((task) => task.appointee === user);
  return (
    <PageWrapper>
      <Title text="To do" color={fontColor} />
      <RadioButtons
        options={["Begge", "Anders", "Vilde"]}
        selected={user}
        setSelected={setUser}
        unselectedColor={foregroundColor}
        selectedColor={controlColor}
        fontSelectedColor={fontContrastColor}
        fontUnselectedColor={fontColor}
      />
    </PageWrapper>
  );
};

export default Todo;
