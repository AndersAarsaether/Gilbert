export interface Task {
  description: string;
  appointee: User;
}

export enum User {
  Vilde,
  Anders,
  Both,
}
