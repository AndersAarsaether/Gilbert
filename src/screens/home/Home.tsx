import React, { FC } from "react";
import LinkButton from "../../components/LinkButton";
import PageWrapper from "../../components/PageWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import HeartIcon from "../../icons/HeartIcon";
import MoneyIcon from "../../icons/MoneyIcon";
import ShoppingcartIcon from "../../icons/ShoppingcartIcon";
import TodoIcon from "../../icons/TodoIcon";
import { LinkButtonsWrapper } from "./styles";

interface HomeProps {
  fontColor: string;
  firstButtonColor: string;
  secondButtonColor: string;
  thirdButtonColor: string;
  fourthButtonColor: string;
  primaryButtonColor: string;
  primaryButtonTextColor: string;
}

const Home: FC<HomeProps> = ({
  fontColor,
  firstButtonColor,
  secondButtonColor,
  thirdButtonColor,
  fourthButtonColor,
  primaryButtonColor,
  primaryButtonTextColor,
}) => {
  return (
    <PageWrapper>
      <Title color={fontColor} text="Hold deg oppdatert!" />
      <LinkButtonsWrapper>
        <LinkButton
          background={firstButtonColor}
          textcolor={fontColor}
          icon={<TodoIcon />}
          onClick={() => console.log("Pressed todo")}
          label="Todo"
        />
        <LinkButton
          background={secondButtonColor}
          textcolor={fontColor}
          icon={<ShoppingcartIcon />}
          onClick={() => console.log("Pressed Handleliste")}
          label="Handleliste"
        />
      </LinkButtonsWrapper>
      <LinkButtonsWrapper>
        <LinkButton
          background={thirdButtonColor}
          textcolor={fontColor}
          icon={<HeartIcon />}
          onClick={() => console.log("Pressed Date nights")}
          label="Date nights"
        />
        <LinkButton
          background={fourthButtonColor}
          textcolor={fontColor}
          icon={<MoneyIcon />}
          onClick={() => console.log("Pressed Økonomi")}
          label="Økonomi"
        />
      </LinkButtonsWrapper>
      <PrimaryButton
        color={primaryButtonColor}
        fontColor={primaryButtonTextColor}
        label={"Logg ut"}
        onClick={() => console.log("Logg ut")}
      />
    </PageWrapper>
  );
};

export default Home;
