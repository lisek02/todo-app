import * as React from 'react';
import { TodosComponent } from './todos';
import { createShallow } from '@material-ui/core/test-utils';
import configureMockStore from 'redux-mock-store';

describe('TodosComponent', () => {
  let shallow;
  const mockStore = configureMockStore([]);
  const store = mockStore({
    todoList: [ { id: 1, title: 'First item'}, { id: 2, title: 'Second item'} ],
  })

  beforeEach(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    store.clearActions();
  });

  
  it('should render correctly with todo as props', () => {
    const component = shallow(<TodosComponent store={store}/>);
    
    expect(component).toMatchSnapshot();
  });
});