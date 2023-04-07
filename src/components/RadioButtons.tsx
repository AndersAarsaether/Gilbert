import React, { FC } from "react";
import styled from "styled-components";

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

const Option = styled.button<{ backgroundColor: string }>`
  height: 100%;
  width: 30%;
  border-width: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.backgroundColor};
`;

const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: medium;
`;

interface RadioButtonsProps {
  options: string[];
  selected: string | undefined;
  setSelected: (option: string) => void;
  selectedColor: string;
  unselectedColor: string;
  fontUnselectedColor: string;
  fontSelectedColor: string;
}

const RadioButtons: FC<RadioButtonsProps> = ({
  options,
  selected,
  setSelected,
  selectedColor,
  unselectedColor,
  fontUnselectedColor,
  fontSelectedColor,
}) => (
  <OptionWrapper>
    {options.map((option) => {
      const background = selected === option ? selectedColor : unselectedColor;
      const fontColor =
        selected == option ? fontSelectedColor : fontUnselectedColor;
      return (
        <Option
          key={option}
          backgroundColor={background}
          onClick={() => setSelected(option)}
        >
          <Text color={fontColor}>{option}</Text>
        </Option>
      );
    })}
  </OptionWrapper>
);

export default RadioButtons;
