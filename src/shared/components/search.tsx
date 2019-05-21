import * as React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { TextField, InputLabel } from '@material-ui/core';

const fieldStyle = { minWidth: 50, margin: '0 17px' };

const renderTextField = ({ input, ...custom }) =>
  <TextField
    {...input}
    {...custom}
    style={ fieldStyle }
    label='Search'
  />;

const Component: React.FunctionComponent<{} & InjectedFormProps<{}, {}>> = () => {
  return(
    <Field
      component={renderTextField}
      name='search'
      type='text'
    />
  )
}

export const SearchComponent = reduxForm<{}, {}>(
  { form: 'filters' }
)(Component);
