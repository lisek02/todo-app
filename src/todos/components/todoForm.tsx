import * as React from 'react';
import { TodoModel } from '../models/todo.model';
import { reduxForm, InjectedFormProps, SubmitHandler, Field } from 'redux-form';

interface Props {
  handleSubmit: SubmitHandler<TodoModel>
}

const Component: React.FunctionComponent<Props & InjectedFormProps<{}, Props>> = (props: Props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component="input"
          name="title"
          type="text"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export const TodoFormComponent = reduxForm<{}, Props>(
  { form: 'todo' }
)(Component);
