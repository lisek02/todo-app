import { TodoListActions } from './todoListActions';
import { TodoList } from '../models/todo.model'
import { Actions } from './todoListActions'
import * as R from 'ramda';

const initialState: TodoList = [
  { title: 'Test', description: 'Desc', completed: false }
];

const addItemReducer = (action: Actions) => R.append(action.payload);

const reducers = {
  [TodoListActions.ADD_ITEM]: addItemReducer
}

const selectReducer = (type: TodoListActions) => reducers[type] || R.always(R.identity);

export const todoListReducer = (state = initialState, action: Actions) => selectReducer(action.type)(action)(state);
