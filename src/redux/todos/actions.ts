import { Task } from "models/task";

export interface UpdateTasksAction {
  type: "UPDATE_TASKS";
  payload: Task[];
}

export const updateTasks = (tasks: Task[]): UpdateTasksAction => {
  return {
    type: "UPDATE_TASKS",
    payload: tasks,
  };
};
