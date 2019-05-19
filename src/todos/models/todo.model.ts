export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoList = TodoModel[];
