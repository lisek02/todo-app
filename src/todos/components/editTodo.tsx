import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { ToggleEditPayload, EditItemPayload } from '../store/todoListActions';
import { TodoFormComponent } from './todoForm';

interface Props {
  todo: TodoModel;
  editItem: (payload: EditItemPayload) => void;
  toggleEdit: (payload: ToggleEditPayload) => void;
}

export const EditTodoComponent = (props: Props) => {
  const { todo, editItem, toggleEdit } = props;

  return (
    <div>
      <TodoFormComponent
        onSubmit={
          (formValue: any) => {
            editItem({ id: todo.id, title: formValue.editedTitle || todo.title });
            toggleEdit({ id: todo.id});
          }
        }
        todoItem={ todo }
        initialValues={{ editedTitle: todo.title }}
      />
      <button onClick={() => toggleEdit({ id: todo.id })}>Cancel</button>
    </div>
  )
}