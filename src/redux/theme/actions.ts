import { Theme } from "models/theme";

export interface UpdateThemeAction {
  type: "UPDATE_THEME";
  payload: Theme;
}

export const updateTheme = (theme: Theme): UpdateThemeAction => {
  return {
    type: "UPDATE_THEME",
    payload: theme,
  };
};
