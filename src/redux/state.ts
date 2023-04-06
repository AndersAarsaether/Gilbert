import { Task } from "models/task";
import { Theme } from "models/theme";

type AppState = {
  theme: Theme;
  todos: Task[];
};

export default AppState;
