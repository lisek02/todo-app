import * as R from 'ramda';
import { createSelector } from 'reselect';
import { TodoList } from '../models/todo.model'

const getFilter = R.path(['form', 'filters', 'values', 'filter']);
const getSearch = R.path(['form', 'filters', 'values', 'search']);
const getTodoList = R.prop('todoList');

interface Selectors {
  [key: string]: (s: TodoList) => TodoList;
}

const selectors: Selectors = {
  complete: R.filter(R.propEq('completed', true)),
  incomplete: R.filter(R.propEq('completed', false)),
}

const getSelector = (type = '') => selectors[type] || R.identity;

const filterSelector = createSelector(
  [ getFilter, getTodoList ],
  (filter: string, todoList: TodoList) => getSelector(filter)(todoList)
)

export const getTodos = createSelector(
  [ filterSelector, getSearch ],
  (todoList: TodoList, search: string) => search ? R.filter(todo => R.includes(search, todo.title), todoList) : todoList
)
