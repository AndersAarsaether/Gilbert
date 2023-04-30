import { UpdateThemeAction } from "redux/theme/actions";
import { DarkMode, Theme } from "models/theme";

const initialState: Theme = DarkMode;

const themeReducer = (
  state = initialState,
  action: UpdateThemeAction
): Theme => {
  switch (action.type) {
    case "UPDATE_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
