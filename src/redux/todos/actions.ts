import { TaskWithState } from "models/task";

export interface UpdateTasksAction {
  type: "UPDATE_TASKS";
  payload: TaskWithState[];
}

export const updateTasks = (tasks: TaskWithState[]): UpdateTasksAction => {
  return {
    type: "UPDATE_TASKS",
    payload: tasks,
  };
};
