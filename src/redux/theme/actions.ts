import { Theme } from "./types";

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
