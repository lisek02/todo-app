import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { reduxForm, InjectedFormProps, SubmitHandler, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToggleEditPayload } from '../store/todoListActions';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';

interface Props {
  handleSubmit: SubmitHandler<TodoModel>;
  todoItem?: TodoModel;
  onToggleEdit?: (payload: ToggleEditPayload) => void;
}

const formStyle = { display: 'flex', justifyContent: 'space-between' };
const fieldStyle = { width: '84%', margin: '0 12px 0 16px' };
const buttonsContainerStyle = { display: 'flex '};

const renderTextField = ({ input, ...custom }) => <TextField {...input} {...custom} />;

const Component: React.FunctionComponent<Props & InjectedFormProps<{}, Props>> = (props: Props) => {
  const { handleSubmit, todoItem, onToggleEdit } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="AddInput"
      style={ formStyle }
    >
      <Field
        component={renderTextField}
        name={ todoItem ? `${todoItem.id}` : 'title' }
        type="text"
        style={ fieldStyle }
      />
      { todoItem ? (
          <div style={ buttonsContainerStyle }>
            <IconButton aria-label="Cancel" onClick={() => onToggleEdit({ id: todoItem.id })}>
              <CancelIcon />
            </IconButton>
            <IconButton aria-label="Save" type="submit">
              <DoneIcon />
            </IconButton>
          </div>
        ) : (
          <Button size="small" variant="outlined" type="submit">Add</Button>
        )
      }
    </form>
  )
}

export const TodoFormComponent = reduxForm<{}, Props>(
  { form: 'todo' }
)(Component);
