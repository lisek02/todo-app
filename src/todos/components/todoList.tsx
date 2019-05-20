import * as React from 'react';
import { TodoList, TodoModel } from '../models/todo.model';
import { RemoveItemPayload, ToggleEditPayload, EditItemPayload } from '../store/todoListActions';
import { DisplayTodoComponent } from './displayTodo';
import { EditTodoComponent } from './editTodo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface Props {
  todos: TodoList,
  onRemoveItem: (payload: RemoveItemPayload) => void;
  onToggleEdit: (payload: ToggleEditPayload) => void;
  onEditItem: (payload: EditItemPayload) => void;
}

const listItemStyle = { padding: '5px 0' };

export const TodoListComponent = (props: Props) => {
  const { todos, onRemoveItem, onToggleEdit, onEditItem } = props;

  return (
    <List>
      { todos.map((todo: TodoModel) => {
        return(
          <ListItem key={todo.id} style={ listItemStyle }>
            {todo.editing ?
              <EditTodoComponent todo={todo} editItem={onEditItem} toggleEdit={onToggleEdit} /> :
              <DisplayTodoComponent todo={todo} removeItem={onRemoveItem} toggleEdit={onToggleEdit} />
            }
          </ListItem>
        )
      })}
    </List>
  )
}
