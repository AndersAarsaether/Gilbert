import React, { FC } from "react";
import PageWrapper from "components/PageWrapper";
import Title from "components/Title";

interface NotFoundProps {
  fontColor: string;
}

const NotFound: FC<NotFoundProps> = ({ fontColor }) => {
  return (
    <PageWrapper>
      <Title text="Ugyldig URL (404)" color={fontColor} />
    </PageWrapper>
  );
};

export default NotFound;
