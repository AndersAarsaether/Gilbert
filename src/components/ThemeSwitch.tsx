import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Switch from "react-switch";
import { updateTheme } from "redux/theme/actions";
import { DarkMode, LightMode } from "models/theme";
import styled from "styled-components";

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 2rem 2rem 0;
`;

const ThemeSwitch: FC = () => {
  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    dispatch(updateTheme(darkMode ? DarkMode : LightMode));
  }, [darkMode]);

  return (
    <SwitchWrapper>
      <Switch
        checked={darkMode}
        onChange={(darkMode: boolean) => setDarkMode(darkMode)}
        onColor={DarkMode.controlColor}
        onHandleColor={LightMode.backgroundColor}
        offColor={LightMode.controlColor}
        offHandleColor={LightMode.backgroundColor}
        checkedIcon={false}
        uncheckedIcon={false}
        activeBoxShadow={
          darkMode
            ? `0 0 8px 8px ${DarkMode.controlColor}`
            : `0 0 8px 8px ${LightMode.controlColor}`
        }
      />
    </SwitchWrapper>
  );
};

export default ThemeSwitch;
