import React, { FC, useState } from "react";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";
import RadioButtons from "components/RadioButtons";
import Checklist from "components/Checklist";
import { mapTasksToWeb, Task } from "models/task";

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
        tasks={mapTasksToWeb(todos)}
        user={user}
        taskBackgroundColor={foregroundColor}
        fontColor={fontColor}
        checkColor={checkmarkColor}
        checkBoxColors={checkboxColors}
      />
    </PageWrapper>
  );
};

export default Todo;
