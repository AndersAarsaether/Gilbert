import React, { FC, useState } from "react";
import { Button, Input, InputWrapper } from "./InputWithButtonStyles";

interface InputWithButtonProps {
  inputColor: string;
  fontColor: string;
  buttonColor: string;
  buttonFontColor: string;
  onSubmit: (input: string | undefined) => void;
}

const InputWithButton: FC<InputWithButtonProps> = ({
  inputColor,
  fontColor,
  buttonColor,
  buttonFontColor,
  onSubmit,
}) => {
  const [text, setText] = useState<string>("");

  const handleButtonClick = () => {
    onSubmit(text);
    setText("");
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        background={inputColor}
        fontColor={fontColor}
        placeholder="Skriv inn ny oppgave"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        color={buttonColor}
        fontColor={buttonFontColor}
        onClick={handleButtonClick}
      >
        Bekreft
      </Button>
    </InputWrapper>
  );
};

export default InputWithButton;
