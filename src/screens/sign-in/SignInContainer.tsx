import React, { FC, useState } from "react";
import SignIn from "./SignIn";
import AppState from "redux/state";
import { useSelector } from "react-redux";

const SignInConainer: FC = () => {
    const {
        fontColor,
        fontContrastColor,
        foregroundColor,
        controlColor,
      } = useSelector((state: AppState) => state.theme);

    const [wrong, setWrong] = useState<boolean>(false)

    const validate = (user: string, pass: string) => {
        setWrong(!((user === "Anders" && pass === "Pato") || (user === "Vilde" && pass === "Gilb")));
    }

    return <SignIn validate={validate} wrong={wrong} fontColor={fontColor} inputColor={foregroundColor} controlColor={controlColor} buttonFontColor={fontContrastColor}/>
}

export default SignInConainer;