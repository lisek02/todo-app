import * as React from 'react';
import { TodoList, TodoModel } from '../models/todo.model';
import { RemoveItemPayload } from '../store/todoListActions';

interface Props {
  todos: TodoList,
  onRemoveItem: (payload: RemoveItemPayload) => void;
}

export const TodoListComponent = (props: Props) => {
  const { todos, onRemoveItem } = props;

  return (
    <ul>
      { todos.map((todo: TodoModel) => {
        return(
          <li key={todo.id}>
            <span>{ `${todo.title}` }</span>
            <button onClick={() => onRemoveItem({ id: todo.id })}>x</button>
            <div>edit</div>
          </li>
        )
      })}
    </ul>
  )
}
