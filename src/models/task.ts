export interface Task {
  description: string;
  appointee: string;
}

export interface TaskWeb {
  description: string;
  appointee: string;
  finished: boolean;
}

export const mapTasksToWeb = (tasks: Task[]): TaskWeb[] =>
  tasks.map((task: Task) => ({
    description: task.description,
    appointee: task.appointee,
    finished: false,
  }));

export const mockTodos = [
  { description: "Støvsuge soverommet", appointee: "Anders" },
  { description: "Se formel 1", appointee: "Begge" },
  { description: "Kode", appointee: "Vilde" },
  { description: "Trene", appointee: "Begge" },
  { description: "Spille Harry Potter", appointee: "Vilde" },
  { description: "Vanne planter", appointee: "Anders" },
  { description: "Gjøre skole", appointee: "Anders" },
  { description: "Lage middag", appointee: "Begge" },
] as Task[];
