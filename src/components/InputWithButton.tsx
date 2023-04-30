import React, { FC, useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
`;

const Input = styled.input<{ background: string; fontColor: string }>`
  display: flex;
  flex: 3;
  background: ${(props) => props.background};
  color: ${(props) => props.fontColor};
  font-size: medium;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-width: 0;
  padding-left: 1rem;
`;

const Button = styled.button<{ color: string; fontColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  border-radius: 0.5rem;
  border-width: 0;
  font-size: medium;
`;

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
