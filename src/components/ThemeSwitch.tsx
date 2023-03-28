import React, { FC, useEffect, useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import { DarkMode, LightMode } from "../types/Colors";

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 2rem 2rem 0;
`;

interface ThemeSwitchProps {
  setTheme: any;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ setTheme }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    setTheme(darkMode ? DarkMode : LightMode);
  }, [darkMode]);

  return (
    <SwitchWrapper>
      <Switch
        checked={darkMode}
        onChange={(darkMode: boolean) => setDarkMode(darkMode)}
        onColor={DarkMode.controls}
        onHandleColor={LightMode.background}
        offColor={LightMode.controls}
        offHandleColor={LightMode.background}
        checkedIcon={false}
        uncheckedIcon={false}
        activeBoxShadow={
          darkMode
            ? `0 0 8px 8px ${DarkMode.controls}`
            : `0 0 8px 8px ${LightMode.controls}`
        }
      />
    </SwitchWrapper>
  );
};

export default ThemeSwitch;
