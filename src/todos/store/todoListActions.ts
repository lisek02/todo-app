import { Action } from 'redux';
import { TodoModel } from '../models/todo.model'

export enum TodoListActions {
  ADD_ITEM = '[TodoList] Add item',
  REMOVE_ITEM = '[TodoList] Remove item',
  EDIT_ITEM = '[TodoList] Edit item',
  TOGGLE_COMPLETED = '[TodoList] Toggle completed',
}

export interface RemoveItemPayload { id: number };

interface AddItem extends Action { payload: TodoModel };
interface RemoveItem extends Action { payload: RemoveItemPayload };

export type Actions = AddItem & RemoveItem;

export const addItem = (payload: TodoModel): AddItem => ({ type: TodoListActions.ADD_ITEM, payload });
export const removeItem = (payload: RemoveItemPayload): RemoveItem => ({ type: TodoListActions.REMOVE_ITEM, payload });
