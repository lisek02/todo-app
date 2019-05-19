import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { TodoList, TodoModel } from './models/todo.model';
import { TodoListComponent } from './components/todoList';
import { TodoFormComponent } from './components/todoForm';
import { addItem, removeItem, toggleEdit, editItem, EditItemPayload } from './store/todoListActions';
import { RemoveItemPayload } from './store/todoListActions';

interface StateProps {
  todoList: TodoList
}

interface DispatchProps {
  addItem: (payload: TodoModel) => void;
  removeItem: (payload: RemoveItemPayload) => void;
  toggleEdit: () => void;
  editItem: (payload: EditItemPayload) => void;
}

class Component extends React.Component<StateProps & DispatchProps, any>{
  render(){
    return(
      <div className="TodoList">
        <h1>Todo List component</h1>
        <TodoListComponent
          todos={ this.props.todoList }
          onRemoveItem={this.props.removeItem}
          onToggleEdit={this.props.toggleEdit}
          onEditItem={this.props.editItem}
        />
        <TodoFormComponent
          onSubmit={this.props.addItem}
        />
      </div>
    );
  }
}

const mapStateToProps = R.applySpec<StateProps>({
  todoList: R.prop('todoList')
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addItem,
    removeItem,
    toggleEdit,
    editItem,
  },
  dispatch
);

export const TodosComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Component);
