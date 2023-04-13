import React, { FC } from "react";
import LinkButton from "components/link-button";
import PageWrapper from "components/page-wrapper";
import PrimaryButton from "components/primary-button";
import Title from "components/title";
import HeartIcon from "icons/HeartIcon";
import MoneyIcon from "icons/MoneyIcon";
import ShoppingcartIcon from "icons/ShoppingcartIcon";
import TodoIcon from "icons/TodoIcon";
import { LinkButtonsWrapper, LinksWrapper } from "screens/home/styles";

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
      <LinksWrapper>
      <LinkButtonsWrapper>
        <LinkButton
          background={firstButtonColor}
          textcolor={fontColor}
          icon={<TodoIcon />}
          to={"/todo"}
          label="Todo"
        />
        <LinkButton
          background={secondButtonColor}
          textcolor={fontColor}
          icon={<ShoppingcartIcon />}
          to={"/groceries"}
          label="Handleliste"
        />
      </LinkButtonsWrapper>
      <LinkButtonsWrapper>
        <LinkButton
          background={thirdButtonColor}
          textcolor={fontColor}
          icon={<HeartIcon />}
          to={"/dates"}
          label="Date nights"
        />
        <LinkButton
          background={fourthButtonColor}
          textcolor={fontColor}
          icon={<MoneyIcon />}
          to={"/economy"}
          label="Økonomi"
        />
      </LinkButtonsWrapper>
      </LinksWrapper>
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
