import * as R from 'ramda';
import { createSelector } from 'reselect';
import { TodoList } from '../models/todo.model'

const getFilter = R.path(['form', 'filters', 'values', 'filter']);
const getTodoList = R.prop('todoList');

interface Selectors {
  [key: string]: (s: TodoList) => TodoList;
}

const selectors: Selectors = {
  complete: R.filter(R.propEq('completed', true)),
  incomplete: R.filter(R.propEq('completed', false))
}

const getSelector = (type = '') => selectors[type] || R.identity;

export const getTodos = createSelector(
  [ getFilter, getTodoList ],
  (filter: string, todoList: TodoList) => getSelector(filter)(todoList)
)
