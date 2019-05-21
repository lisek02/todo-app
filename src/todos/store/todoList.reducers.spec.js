import { todoListReducer } from './todoList.reducers';
import { TodoListActions } from './todoList.actions';

describe('todoList reducers', () => {
  const mockedTodoPayload = { title: 'Title' };
  const mockedTodo = { ... mockedTodoPayload, id: 12345, completed: false, editing: false };
  global.Date = {
    now: jest.fn(() => 12345)
  }
  
  describe('addItemReducer', () => {
    const action = { type: TodoListActions.ADD_ITEM, payload: mockedTodoPayload };
    const initialState = [];
    const expectedState = [ mockedTodo ];

    expect(todoListReducer(initialState, action)).toEqual(expectedState);
  });

  describe('removeItemReducer', () => {
    const action = { type: TodoListActions.REMOVE_ITEM, payload: { id: 12345 } };
    const initialState = [ mockedTodo ];
    const expectedState = []

    expect(todoListReducer(initialState, action)).toEqual(expectedState);
  });

  describe('toggleEditReducer', () => {
    const action = { type: TodoListActions.TOGGLE_EDIT, payload: { id: 12345 } };
    const initialState = [ mockedTodo ];
    const expectedState = [ { ...mockedTodo, editing: true }];

    expect(todoListReducer(initialState, action)).toEqual(expectedState);
  });

  describe('editItemReducer', () => {
    const editedTitle = 'EditedTitle';
    const action = { type: TodoListActions.EDIT_ITEM, payload: { id: 12345, title: editedTitle } };
    const initialState = [ mockedTodo ];
    const expectedState = [ { ...mockedTodo, title: editedTitle }];

    expect(todoListReducer(initialState, action)).toEqual(expectedState);
  });

  describe('toggleEditReducer', () => {
    const action = { type: TodoListActions.TOGGLE_COMPLETED, payload: { id: 12345 } };
    const initialState = [ mockedTodo ];
    const expectedState = [ { ...mockedTodo, completed: true }];

    expect(todoListReducer(initialState, action)).toEqual(expectedState);
  });
});