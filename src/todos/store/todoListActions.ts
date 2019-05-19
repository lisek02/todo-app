import { Action } from 'redux';
import { TodoModel } from '../models/todo.model'

export enum TodoListActions {
  ADD_ITEM = '[TodoList] Add item',
  REMOVE_ITEM = '[TodoList] Remove item',
  EDIT_ITEM = '[TodoList] Edit item',
  TOGGLE_COMPLETED = '[TodoList] Toggle completed',
  TOGGLE_EDIT = '[TodoList] Toggle edit',
}
interface IdPayload { id: number };

export interface RemoveItemPayload extends IdPayload {};
export interface ToggleEditPayload extends IdPayload {};
export interface EditItemPayload extends IdPayload { title: string };

interface AddItem extends Action { payload: TodoModel };
interface RemoveItem extends Action { payload: RemoveItemPayload };
interface ToggleEdit extends Action { payload: ToggleEditPayload };
interface EditItem extends Action { payload: EditItemPayload };

export type Actions = AddItem & RemoveItem & ToggleEdit & EditItemPayload;

export const addItem = (payload: TodoModel): AddItem => ({ type: TodoListActions.ADD_ITEM, payload });
export const removeItem = (payload: RemoveItemPayload): RemoveItem => ({ type: TodoListActions.REMOVE_ITEM, payload });
export const toggleEdit = (payload: ToggleEditPayload): ToggleEdit => ({ type: TodoListActions.TOGGLE_EDIT, payload });
export const editItem = (payload: EditItemPayload): EditItem => ({ type: TodoListActions.EDIT_ITEM, payload });
