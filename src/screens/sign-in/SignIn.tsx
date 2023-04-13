import PageWrapper from "components/page-wrapper";
import React, { FC, useRef } from "react";
import { Input, InputContainer, Label, SubmitWrapper } from "./styles";
import Title from "components/title";
import PrimaryButton from "components/primary-button";

interface SignInProps {
    inputColor: string;
    fontColor: string;
    controlColor: string;
    buttonFontColor: string;
    validate: (user: string, pass: string) => void;
    wrong: boolean;
}

const SignIn: FC<SignInProps> = ({validate, wrong, inputColor, fontColor, controlColor, buttonFontColor}) => {

    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    
    const handleSignIn = () => {
      const user = userRef.current?.value || "";
      const pass = passRef.current?.value || "";
      validate(user, pass);
    };

    return (
      <PageWrapper>
        <Title text={wrong ? "Feil input" : "Logg inn"} color={wrong ? "#FF0000" : fontColor} />
        <InputContainer>
          <Label fontColor={fontColor}>Bruker:</Label>
          <Input background={inputColor} fontColor={fontColor} placeholder="Brukernavn" ref={userRef}/>
        </InputContainer>
        <InputContainer>
          <Label fontColor={fontColor}>Passord:</Label>
          <Input background={inputColor} fontColor={fontColor} placeholder="Passord" ref={passRef} type="password"/>
        </InputContainer>
        <SubmitWrapper>
          <PrimaryButton fontColor={buttonFontColor} color={controlColor} onClick={handleSignIn} label="Logg inn"/>
        </SubmitWrapper>
      </PageWrapper>
    )
}

export default SignIn;