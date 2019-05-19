import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { RemoveItemPayload, ToggleEditPayload } from '../store/todoListActions';

interface Props {
  todo: TodoModel;
  removeItem: (payload: RemoveItemPayload) => void;
  toggleEdit: (payload: ToggleEditPayload) => void;
}

export const DisplayTodoComponent = (props: Props) => {
  const { todo, removeItem, toggleEdit } = props;

  return (
    <div>
      <span>{ todo.title }</span>
      <button onClick={() => removeItem({ id: todo.id })}>x</button>
      <button onClick={() => toggleEdit({ id: todo.id })}>Edit</button>
    </div>
  )
}
