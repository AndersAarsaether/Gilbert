import AppState from "redux/state";
import { UpdateThemeAction } from "redux/theme/actions";
import { DarkMode } from "models/theme";

const initialState: AppState = {
  theme: DarkMode,
};

const appReducer = (
  state = initialState,
  action: UpdateThemeAction
): AppState => {
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

export default appReducer;
