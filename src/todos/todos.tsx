import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { TodoList } from './models/todo.model';
import { TodoListComponent } from './components/todoList';

interface StateProps {
  todoList: TodoList
}

class Component extends React.Component<StateProps, any>{
  render(){
    return(
      <div className="TodoList">
        <h1>Todo List component</h1>
        <TodoListComponent todos={ this.props.todoList } />
      </div>
    );
  }
}

const mapStateToProps = R.applySpec({
  todoList: R.prop('todoList')
});

export const TodosComponent = connect(mapStateToProps)(Component);