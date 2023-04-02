import React, { FC } from "react";
import styled from "styled-components";
import { Task } from "models/task";
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
`;

const Checkbox = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  margin-inline: 1rem;
  border-width: 0;
  background-color: ${(props) => props.background};
`;

const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

interface ChecklistProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  taskBackgroundColor: string;
  fontColor: string;
  checkBoxColors: string[];
  checkColor: string;
}

const Checklist: FC<ChecklistProps> = ({
  tasks,
  setTasks,
  taskBackgroundColor,
  fontColor,
  checkBoxColors,
  checkColor,
}) => {
  const updateTask = (index: number) => {
    const newState = [...tasks];
    newState[index] = { ...newState[index], appointee: "Finished" };
    setTasks(newState);
  };

  return (
    <ListWrapper>
      {tasks.map((task, i) => (
        <TaskWrapper background={taskBackgroundColor} key={task.description}>
          <Checkbox
            background={checkBoxColors[i % checkBoxColors.length]}
            onClick={() => updateTask(i)}
          >
            {task.appointee == "Finished" && (
              <div>
                <CheckIcon fill={checkColor} />
              </div>
            )}
          </Checkbox>
          <Text color={fontColor}>{task.description}</Text>
        </TaskWrapper>
      ))}
    </ListWrapper>
  );
};

export default Checklist;
