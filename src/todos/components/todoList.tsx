import * as React from 'react';
import { TodoList, TodoModel } from '../models/todo.model';
import { RemoveItemPayload, ToggleEditPayload, EditItemPayload } from '../store/todoListActions';
import { DisplayTodoComponent } from './displayTodo';
import { EditTodoComponent } from './editTodo';

interface Props {
  todos: TodoList,
  onRemoveItem: (payload: RemoveItemPayload) => void;
  onToggleEdit: (payload: ToggleEditPayload) => void;
  onEditItem: (payload: EditItemPayload) => void;
}

export const TodoListComponent = (props: Props) => {
  const { todos, onRemoveItem, onToggleEdit, onEditItem } = props;

  return (
    <ul>
      { todos.map((todo: TodoModel) => {
        return(
          <li key={todo.id}>
            {todo.editing ?
              <EditTodoComponent todo={todo} editItem={onEditItem} toggleEdit={onToggleEdit} /> :
              <DisplayTodoComponent todo={todo} removeItem={onRemoveItem} toggleEdit={onToggleEdit} />
            }
          </li>
        )
      })}
    </ul>
  )
}
