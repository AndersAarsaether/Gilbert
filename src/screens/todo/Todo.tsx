import React, { FC, useState } from "react";
import PageWrapper from "components/page-wrapper";
import Title from "components/title";
import RadioButtons from "components/radio-buttons/RadioButtons";
import Checklist from "components/checklist";
import { TaskWithState } from "models/task";
import InputWithButton from "components/input-with-button";

interface TodoProps {
  todos: TaskWithState[];
  setTodos: (todos: TaskWithState[]) => void;
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

  const onAdd = (input: string | undefined) => {
    if (input === undefined) {
      return;
    }
    const todo = {
      description: input,
      category: user,
      finished: false,
    } as TaskWithState;
    const todosCopy = [...todos];
    todosCopy.push(todo);
    setTodos(todosCopy);
  };

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
      <InputWithButton
        inputColor={foregroundColor}
        fontColor={fontColor}
        buttonColor={controlColor}
        buttonFontColor={fontContrastColor}
        onSubmit={onAdd}
      />
    </PageWrapper>
  );
};

export default Todo;
