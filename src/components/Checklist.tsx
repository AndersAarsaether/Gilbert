import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { Task } from "models/task";
import CheckIcon from "icons/CheckIcon";

//Animations
const fadeIn = keyframes`
  from {
    padding-right: 3rem;
    opacity: 0;
  }
  to {
    padding-right: 0;
    opacity: 1;
  }
`

//Styles
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

const CheckIconWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease forwards;
`

interface ChecklistProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
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

  let colourIndex = 0;

  return (
    <ListWrapper>
      {tasks.map(
        (task, i) =>
          (!task.finished  || 1 < 2) && task.category === category && (
            <TaskWrapper
              background={taskBackgroundColor}
              key={task.description}
            >
              <Checkbox
                background={checkBoxColors[colourIndex++ % checkBoxColors.length]}
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
          )
      )}
    </ListWrapper>
  );
};

export default Checklist;
