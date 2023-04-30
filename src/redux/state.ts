import { Task } from "firebase/models";
import { Theme } from "theme/theme";

type AppState = {
  theme: Theme;
  todos: Task[];
};

export default AppState;
