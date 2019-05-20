import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { ToggleEditPayload, EditItemPayload } from '../store/todoListActions';
import { TodoFormComponent } from './todoForm';

interface Props {
  todo: TodoModel;
  editItem: (payload: EditItemPayload) => void;
  toggleEdit: (payload: ToggleEditPayload) => void;
}

const EditTodoStyle = { width: '100%', marginLeft: 36, marginRight: 4 };

export const EditTodoComponent = (props: Props) => {
  const { todo, editItem, toggleEdit } = props;

  return (
    <div style={ EditTodoStyle }>
      <TodoFormComponent
        onSubmit={
          (formValue: any) => {
            editItem({ id: todo.id, title: formValue.editedTitle || todo.title });
            toggleEdit({ id: todo.id });
          }
        }
        todoItem={ todo }
        onToggleEdit={ toggleEdit }
        initialValues={{ editedTitle: todo.title }}
      />
    </div>
  )
}