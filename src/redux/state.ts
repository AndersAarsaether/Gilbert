import { TaskWithState } from "models/task";
import { Theme } from "models/theme";

type AppState = {
  theme: Theme;
  todos: TaskWithState[];
};

export default AppState;
