import React, { FC } from "react";
import { OptionWrapper, Option, Text } from "./RadioButtonsStyles";

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
        selected === option ? fontSelectedColor : fontUnselectedColor;
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
