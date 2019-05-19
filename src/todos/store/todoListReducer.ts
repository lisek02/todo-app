import { TodoListActions } from './todoListActions';
import { TodoList } from '../models/todo.model'
import { Actions } from './todoListActions'
import * as R from 'ramda';

const initialState: TodoList = [
  { id: Date.now(), title: 'Test', completed: false }
];

const addItemReducer = (action: Actions) => R.append({ ...action.payload, id: Date.now(), completed: false });

const reducers = {
  [TodoListActions.ADD_ITEM]: addItemReducer
}

const selectReducer = (type: TodoListActions) => reducers[type] || R.always(R.identity);

export const todoListReducer = (state = initialState, action: Actions) => selectReducer(action.type)(action)(state);
