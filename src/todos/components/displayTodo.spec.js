import * as React from 'react';
import { DisplayTodoComponent } from './displayTodo';
import { createShallow } from '@material-ui/core/test-utils';

const mockedTodo = { title: 'Title', id: 1 };
const mockedToggleCompleted = jest.fn();
let shallow;

describe('DisplayTodoComponent', () => {
  beforeAll(() => {
    shallow = createShallow();
  });

  it('should render correctly with todo as props', () => {
    const component = shallow(<DisplayTodoComponent todo={mockedTodo}/ >);
    
    expect(component).toMatchSnapshot();
  });

  it('should call toggleCompleted with { id: 1 } after clicking Checkbox', () => {
    const component = shallow(<DisplayTodoComponent todo={mockedTodo} toggleCompleted={mockedToggleCompleted} />);

    component
      .childAt(0)
      .simulate('click');

    expect(mockedToggleCompleted).toHaveBeenCalledWith({ id: 1 });
  });
});