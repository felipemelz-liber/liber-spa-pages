import React from 'react';
import { SelectField } from '../Inputs';

export default {
  title: 'Components 1.0|Input/SelectField',
  parameters: {
    jest: ['SelectField'],
  },
};

export const defaultStory = () => (
  <SelectField>
    <option value="pf">Pessoa Física</option>
    <option value="factoring">Factoring</option>
    <option value="fidc">FIDC</option>
    <option value="securitizadora">Securitizadora</option>
    <option value="banco">Banco</option>
  </SelectField>
);

defaultStory.story = {
  name: 'default',
};

export const searchable = () => (
  <SelectField searchable>
    <option value="pf">Pessoa Física</option>
    <option value="factoring">Factoring</option>
    <option value="fidc">FIDC</option>
    <option value="securitizadora">Securitizadora</option>
    <option value="banco">Banco</option>
  </SelectField>
);

export const withErrorMessage = () => (
  <SelectField errorMessage="Campo obrigatório">
    <option value="pf">Pessoa Física</option>
    <option value="factoring">Factoring</option>
    <option value="fidc">FIDC</option>
    <option value="securitizadora">Securitizadora</option>
    <option value="banco">Banco</option>
  </SelectField>
);

export const withFullWidth = () => (
  <SelectField fullWidth>
    <option value="pf">Pessoa Física</option>
    <option value="factoring">Factoring</option>
    <option value="fidc">FIDC</option>
    <option value="securitizadora">Securitizadora</option>
    <option value="banco">Banco</option>
  </SelectField>
);
