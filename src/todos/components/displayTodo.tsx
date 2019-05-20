import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { RemoveItemPayload, ToggleEditPayload, ToggleCompletedPayload } from '../store/todoListActions';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

interface Props {
  todo: TodoModel;
  removeItem: (payload: RemoveItemPayload) => void;
  toggleEdit: (payload: ToggleEditPayload) => void;
  toggleCompleted: (payload: ToggleCompletedPayload) => void;
}

export const DisplayTodoComponent = (props: Props) => {
  const { todo, removeItem, toggleEdit, toggleCompleted } = props;

  return (
    <div>
      <Checkbox checked={todo.completed} onClick={() => toggleCompleted({ id: todo.id })} />
      <span>{ todo.title }</span>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeItem({ id: todo.id })}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={() => toggleEdit({ id: todo.id })}>
          <CreateIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </div>
  )
}
