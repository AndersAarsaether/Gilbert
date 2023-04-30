import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { TaskWithState } from "models/task";
import CheckIcon from "icons/CheckIcon";
import styled, { keyframes } from "styled-components";

//Animations
const fadeInLeft = keyframes`
  from {
    padding-right: 3rem;
    opacity: 0;
  }
  to {
    padding-right: 0;
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

//Styles
const ListWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const TaskWrapper = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.background};
  border-width: 0;
  &.fade-exit {
    animation: ${fadeOut} 1s;
    animation-delay: 1s;
  }
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
  font-size: medium;
`;

const CheckIconWrapper = styled.div`
  animation: ${fadeInLeft} 0.5s ease forwards;
`;

const FinishedText = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: ${(props) => props.color};
  animation: ${fadeIn} 0.5s ease forwards;
`;

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
