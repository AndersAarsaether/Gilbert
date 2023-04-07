import React, { FC, useState } from "react";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";
import RadioButtons from "components/RadioButtons";
import Checklist from "components/Checklist";
import { Task } from "models/task";

interface TodoProps {
  todos: Task[];
  setTodos: (todos: Task[]) => void;
  fontColor: string;
  fontContrastColor: string;
  foregroundColor: string;
  controlColor: string;
  checkmarkColor: string;
  checkboxColors: string[];
}

const Todo: FC<TodoProps> = ({
  todos,
  setTodos,
  fontColor,
  fontContrastColor,
  foregroundColor,
  controlColor,
  checkmarkColor,
  checkboxColors,
}) => {
  const [user, setUser] = useState<string>("Begge");

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
      <Checklist
        tasks={todos}
        setTasks={setTodos}
        category={user}
        taskBackgroundColor={foregroundColor}
        fontColor={fontColor}
        checkColor={checkmarkColor}
        checkBoxColors={checkboxColors}
      />
    </PageWrapper>
  );
};

export default Todo;
