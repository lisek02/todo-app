import { TodoListActions } from './todoListActions';
import { TodoList } from '../models/todo.model'
import { Actions } from './todoListActions'
import * as R from 'ramda';

const initialState: TodoList = [];

const evolveItem = (id: number, transformator: R.Evolver) => R.map(
  R.when(
    R.propEq('id', id),
    R.evolve(transformator)
  )
);

const addItemReducer = (action: Actions) => R.append({ ...action.payload, id: Date.now(), completed: false, editing: false });
const removeItemReducer = (action: Actions) => R.reject(R.propEq('id', action.payload.id));
const toggleEditReducer = (action: Actions) => R.map(
  R.ifElse(
    R.propEq('id', action.payload.id),
    R.evolve({ editing: R.not }),
    R.evolve({ editing: R.F })
  )
);
const editItemReducer = (action: Actions) =>
  evolveItem(action.payload.id, { title: R.always(R.path(['payload', 'title'], action))});
const toggleCompletedReducer = (action: Actions) => evolveItem(action.payload.id, { completed: R.not });

const reducers = {
  [TodoListActions.ADD_ITEM]: addItemReducer,
  [TodoListActions.REMOVE_ITEM]: removeItemReducer,
  [TodoListActions.TOGGLE_EDIT]: toggleEditReducer,
  [TodoListActions.EDIT_ITEM]: editItemReducer,
  [TodoListActions.TOGGLE_COMPLETED]: toggleCompletedReducer,
}

const selectReducer = (type: TodoListActions) => reducers[type] || R.always(R.identity);

export const todoListReducer = (state = initialState, action: Actions) => selectReducer(action.type)(action)(state);
