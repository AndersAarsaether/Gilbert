import React, { FC, useState } from "react";
import styled from "styled-components";
import { Task, TaskWeb } from "models/task";
import CheckIcon from "icons/CheckIcon";

const ListWrapper = styled.div`
  width: 100%;
`;

const TaskWrapper = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.background};
  border-width: 0;
`;

const Checkbox = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border-width: 0;
  margin-inline: 1rem;
  background-color: ${(props) => props.background};
`;

const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

interface ChecklistProps {
  tasks: TaskWeb[];
  user?: string;
  taskBackgroundColor: string;
  fontColor: string;
  checkBoxColors: string[];
  checkColor: string;
}

const Checklist: FC<ChecklistProps> = ({
  tasks,
  user,
  taskBackgroundColor,
  fontColor,
  checkBoxColors,
  checkColor,
}) => {
  const clickHandler = (task: Task): void => {
    console.log(task);
  };

  const [tasklist, setTasklist] = useState<TaskWeb[]>(tasks);

  const updateTask = (index: number) => {
    const newState = [...tasks];
    newState[index] = { ...newState[index], finished: true };
    setTasklist(newState);
  };

  return (
    <ListWrapper>
      {tasklist.map(
        (task, i) =>
          task.appointee == user && (
            <TaskWrapper
              background={taskBackgroundColor}
              key={task.description}
            >
              <Checkbox
                background={checkBoxColors[i % checkBoxColors.length]}
                onClick={() => updateTask(i)}
              >
                {task.finished && ( //Må kjøre en ny metode inne her som fjerner den (animert)
                  <div>
                    <CheckIcon fill={checkColor} />
                  </div>
                )}
              </Checkbox>
              <Text color={fontColor}>{task.description}</Text>
            </TaskWrapper>
          )
      )}
    </ListWrapper>
  );
};

export default Checklist;
