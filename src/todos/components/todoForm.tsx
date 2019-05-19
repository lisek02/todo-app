import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { reduxForm, InjectedFormProps, SubmitHandler, Field } from 'redux-form';

interface Props {
  handleSubmit: SubmitHandler<TodoModel>,
  todoItem?: TodoModel,
}

const Component: React.FunctionComponent<Props & InjectedFormProps<{}, Props>> = (props: Props) => {
  const { handleSubmit, todoItem } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component="input"
          name={ todoItem ? 'editedTitle' : 'title' }
          type="text"
        />
        <button type="submit">{ todoItem ? 'Save' : 'Add' }</button>
      </div>
    </form>
  )
}

export const TodoFormComponent = reduxForm<{}, Props>(
  { form: 'todo' }
)(Component);
