export interface TodoModel {
  title: string;
  description: string;
  completed: boolean;
}

export type TodoList = TodoModel[];