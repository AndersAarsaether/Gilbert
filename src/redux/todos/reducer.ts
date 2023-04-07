import { Task } from "models/task";
import { UpdateTasksAction } from "redux/todos/actions";

const initialState: Task[] = []

const todoReducer = (
  state = initialState,
  action: UpdateTasksAction
): Task[] => {
  switch (action.type) {
    case "UPDATE_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
