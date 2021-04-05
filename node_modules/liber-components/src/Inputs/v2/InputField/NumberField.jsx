import React from 'react';
import InputField from './InputField';

const NumberField = props => (
  <InputField version={2} type="number" {...props} />
);

export default NumberField;
