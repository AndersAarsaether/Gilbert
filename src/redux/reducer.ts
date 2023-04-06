import { combineReducers } from "redux";
import todoReducer from "redux/todos/reducer";
import themeReducer from "redux/theme/reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todoReducer,
});

export default rootReducer;
