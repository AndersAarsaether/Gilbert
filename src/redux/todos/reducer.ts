import { TaskWithState } from "models/task";
import { UpdateTasksAction } from "redux/todos/actions";

const initialState: TaskWithState[] = [];

const todoReducer = (
  state = initialState,
  action: UpdateTasksAction
): TaskWithState[] => {
  switch (action.type) {
    case "UPDATE_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
