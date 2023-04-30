import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { TaskWithState } from "models/task";
import CheckIcon from "icons/CheckIcon";
import {
  CheckIconWrapper,
  Checkbox,
  FinishedText,
  ListWrapper,
  TaskWrapper,
  Text,
} from "./ChecklistStyles";

interface ChecklistProps {
  tasks: TaskWithState[];
  setTasks: (tasks: TaskWithState[]) => void;
  category: string;
  taskBackgroundColor: string;
  fontColor: string;
  checkBoxColors: string[];
  checkColor: string;
}

const Checklist: FC<ChecklistProps> = ({
  tasks,
  setTasks,
  category,
  taskBackgroundColor,
  fontColor,
  checkBoxColors,
  checkColor,
}) => {
  const updateTask = (index: number) => {
    const newState = [...tasks];
    newState[index] = { ...newState[index], finished: true };
    setTasks(newState);
  };

  const filterTasks = () => {
    setTasks(tasks.filter((task) => !task.finished));
  };

  let counter = 0;

  return (
    <ListWrapper>
      {tasks.filter((task) => task.category === category).length === 0 && (
        <FinishedText color={fontColor}> Ingen flere oppgaver </FinishedText>
      )}
      {tasks.map(
        (task, i) =>
          task.category === category && (
            <CSSTransition
              key={counter}
              in={!task.finished}
              classNames="fade"
              timeout={1500}
              unmountOnExit
              onExited={() => filterTasks()}
            >
              <TaskWrapper
                background={taskBackgroundColor}
                key={task.description}
              >
                <Checkbox
                  background={checkBoxColors[counter++ % checkBoxColors.length]}
                  onClick={() => updateTask(i)}
                >
                  {task.finished && (
                    <CheckIconWrapper>
                      <CheckIcon fill={checkColor} />
                    </CheckIconWrapper>
                  )}
                </Checkbox>
                <Text color={fontColor}>{task.description}</Text>
              </TaskWrapper>
            </CSSTransition>
          )
      )}
    </ListWrapper>
  );
};

export default Checklist;
