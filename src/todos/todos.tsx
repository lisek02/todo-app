import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { TodoList, TodoModel } from './models/todo.model';
import { TodoListComponent } from './components/todoList';
import { TodoFormComponent } from './components/todoForm';
import {
  addItem,
  removeItem,
  toggleEdit,
  editItem,
  EditItemPayload,
  ToggleCompletedPayload,
  toggleCompleted
} from './store/todoListActions';
import { RemoveItemPayload } from './store/todoListActions';
import { getTodos } from './store/todoList.selector';
import { SearchComponent } from '../shared/components/search';
import { FilterComponent } from '../shared/components/filter';
import { Card } from '@material-ui/core';

interface StateProps {
  todoList: TodoList
}

interface DispatchProps {
  addItem: (payload: TodoModel) => void;
  removeItem: (payload: RemoveItemPayload) => void;
  toggleEdit: () => void;
  editItem: (payload: EditItemPayload) => void;
  toggleCompleted: (payload: ToggleCompletedPayload) => void;
}

const TodoListStyle = { maxWidth: 800, margin: '15px auto', padding: 20 };
const filtersContainerStyle = { display: 'flex', marginBottom: 40, alignItems: 'baseline' };
const cardStyle = { padding: '10px 20px 20px 10px', backgroundColor: '#fafafa' };

class Component extends React.Component<StateProps & DispatchProps, any>{
  render(){
    return(
      <div className="TodoList" style={ TodoListStyle }>
        <Card style={ cardStyle }>
          <div style={ filtersContainerStyle }>
            <SearchComponent />
            <FilterComponent />
          </div>
          <TodoFormComponent
            onSubmit={this.props.addItem}
          />
        </Card>
        <TodoListComponent
          todos={ this.props.todoList }
          onRemoveItem={this.props.removeItem}
          onToggleEdit={this.props.toggleEdit}
          onEditItem={this.props.editItem}
          onToggleCompleted={this.props.toggleCompleted}
        />
      </div>
    );
  }
}

const mapStateToProps = R.applySpec<StateProps>({
  todoList: getTodos
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addItem,
    removeItem,
    toggleEdit,
    editItem,
    toggleCompleted,
  },
  dispatch
);

export const TodosComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Component);
