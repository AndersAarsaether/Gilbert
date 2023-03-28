import AppState from "./state";
import { UpdateThemeAction } from "./theme/actions";
import { DarkMode } from "./theme/types";

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
