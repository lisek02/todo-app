import { Action } from 'redux';
import { TodoModel } from '../models/todo.model'

export enum TodoListActions {
  ADD_ITEM = '[TodoList] Add item',
  REMOVE_ITEM = '[TodoList] Remove item',
  EDIT_ITEM = '[TodoList] Edit item',
  TOGGLE_COMPLETED = '[TodoList] Toggle completed',
}

interface AddItem extends Action { payload: TodoModel };

export type Actions = AddItem;

export const addItem = (payload: TodoModel): AddItem => ({ type: TodoListActions.ADD_ITEM, payload });
