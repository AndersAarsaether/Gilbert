import { Task } from "models/task";
import { UpdateTasksAction } from "redux/todos/actions";

type TodoState = { todos: Task[] };

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (
  state = initialState,
  action: UpdateTasksAction
): TodoState => {
  switch (action.type) {
    case "UPDATE_TASKS":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
