import * as React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

const renderSelectField = ({ input }) => (
  <Select
    style={fieldStyle}
    {...input}
  >
    <MenuItem value={'all'}>All</MenuItem>
    <MenuItem value={'complete'}>Complete</MenuItem>
    <MenuItem value={'incomplete'}>Incomplete</MenuItem>
  </Select>
)

const inputLabelStyle = { marginLeft: 10 };
const fieldStyle = { minWidth: 150, margin: '0 10px' };

const Component: React.FunctionComponent<{} & InjectedFormProps<{}, {}>> = () => {
  return(
    <form autoComplete="off">
      <InputLabel htmlFor="filter" style={ inputLabelStyle }>Filter</InputLabel>
      <Field
        component={renderSelectField}
        name={'filter'}
      >
      </Field>
    </form>
  )
}

export const FilterComponent = reduxForm<{}, {}>(
  { form: 'filters' }
)(Component);
