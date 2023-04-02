import React, { FC, useEffect, useState } from "react";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";
import RadioButtons from "components/RadioButtons";
import Checklist from "components/Checklist";
import { Task } from "models/task";

interface TodoProps {
  fontColor: string;
  fontContrastColor: string;
  todos: Task[];
  foregroundColor: string;
  controlColor: string;
  checkmarkColor: string;
  checkboxColors: string[];
}

const Todo: FC<TodoProps> = ({
  fontColor,
  fontContrastColor,
  todos,
  foregroundColor,
  controlColor,
  checkmarkColor,
  checkboxColors,
}) => {
  const [user, setUser] = useState<string>("Begge");
  const [tasks, setTasks] = useState<Task[]>(
    todos.filter((task) => task.appointee === user)
  );

  useEffect(() => {
    setTasks(todos.filter((task) => task.appointee === user));
  }, [user]);

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
        tasks={tasks}
        setTasks={setTasks}
        taskBackgroundColor={foregroundColor}
        fontColor={fontColor}
        checkColor={checkmarkColor}
        checkBoxColors={checkboxColors}
      />
    </PageWrapper>
  );
};

export default Todo;
