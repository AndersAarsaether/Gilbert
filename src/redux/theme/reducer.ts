import { UpdateThemeAction } from "redux/theme/actions";
import { DarkMode, Theme } from "models/theme";

type ThemeState = { theme: Theme };

const initialState: ThemeState = {
  theme: DarkMode,
};

const themeReducer = (
  state = initialState,
  action: UpdateThemeAction
): ThemeState => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
