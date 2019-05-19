import * as React from 'react';
import { TodoList, TodoModel } from '../models/todo.model';

interface Props {
  todos: TodoList
}

export const TodoListComponent = (props: Props) => {
  const { todos } = props;

  return (
    <ul>
      { todos.map((todo: TodoModel) => {
        return <li key={todo.id}>{ `${todo.title}` }</li>
      })}
    </ul>
  )
}
