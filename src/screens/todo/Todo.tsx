import React, { FC } from "react";
import PageWrapper from "../../components/PageWrapper";
import Title from "../../components/Title";

interface TodoProps {
  textColor: string;
}

const Todo: FC<TodoProps> = ({ textColor }) => {
  return (
    <PageWrapper>
      <Title text="To do" color={textColor} />
    </PageWrapper>
  );
};

export default Todo;
