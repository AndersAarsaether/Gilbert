import React, { FC } from "react";
import { useSelector } from "react-redux";
import LinkButton from "../components/LinkButton";
import PageWrapper from "../components/PageWrapper";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import HeartIcon from "../icons/HeartIcon";
import MoneyIcon from "../icons/MoneyIcon";
import ShoppingcartIcon from "../icons/ShoppingcartIcon";
import TodoIcon from "../icons/TodoIcon";
import AppState from "../redux/state";
import { LinkButtonsWrapper } from "./styles";

const Home: FC = () => {
  const theme = useSelector((state: AppState) => state.theme);

  return (
    <PageWrapper>
      <Title color={theme.text} text="Hold deg oppdatert!" />
      <LinkButtonsWrapper>
        <LinkButton
          background={theme.color1}
          textcolor={theme.text}
          icon={<TodoIcon />}
          onClick={() => console.log("Pressed todo")}
          label="Todo"
        />
        <LinkButton
          background={theme.color2}
          textcolor={theme.text}
          icon={<ShoppingcartIcon />}
          onClick={() => console.log("Pressed Handleliste")}
          label="Handleliste"
        />
      </LinkButtonsWrapper>
      <LinkButtonsWrapper>
        <LinkButton
          background={theme.color3}
          textcolor={theme.text}
          icon={<HeartIcon />}
          onClick={() => console.log("Pressed Date nights")}
          label="Date nights"
        />
        <LinkButton
          background={theme.color4}
          textcolor={theme.text}
          icon={<MoneyIcon />}
          onClick={() => console.log("Pressed Økonomi")}
          label="Økonomi"
        />
      </LinkButtonsWrapper>
      <PrimaryButton
        color={theme.controls}
        textColor={theme.controlText}
        label={"Logg ut"}
        onClick={() => console.log("Logg ut")}
      />
    </PageWrapper>
  );
};

export default Home;
