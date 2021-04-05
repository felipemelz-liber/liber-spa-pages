import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { SelectField } from '../Inputs';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

const WithMargin = styled.div`
  margin-top: 16px;
`;

const Size = styled.div`
  width: 570px;
`;

export default {
  title: 'Components 2.0|Input/SelectField',
  parameters: {
    jest: ['SelectField'],
  },
};

export const defaultStory = () => (
  <Center>
    <SelectField version="2" label="Select" openLabel>
      <option value="pf">Pessoa Física</option>
      <option value="factoring">Factoring</option>
      <option value="fidc">FIDC</option>
      <option value="securitizadora">Securitizadora</option>
      <option value="banco">Banco</option>
      <option value="pf2">Pessoa Física2</option>
      <option value="factoring2">Factoring2</option>
      <option value="fidc2">FIDC2</option>
      <option value="securitizadora2">Securitizadora2</option>
      <option value="banco2">Banco2</option>
    </SelectField>
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const searchable = () => (
  <Center>
    <SelectField version="2" searchable label="label">
      <option value="pf">Pessoa Física</option>
      <option value="factoring">Factoring</option>
      <option value="fidc">FIDC</option>
      <option value="securitizadora">Securitizadora</option>
      <option value="banco">Banco</option>
      <option value="pf2">Pessoa Física2</option>
      <option value="factoring2">Factoring2</option>
      <option value="fidc2">FIDC2</option>
      <option value="securitizadora2">Securitizadora2</option>
      <option value="banco2">Banco2</option>
    </SelectField>
  </Center>
);

export const controlled = () => {
  const [value, setValue] = React.useState('pf');
  return (
    <Center>
      <SelectField version="2" openLabel label="Label" value={value} onChange={setValue}>
        <option value="pf">Pessoa Física</option>
        <option value="factoring">Factoring</option>
        <option value="fidc">FIDC</option>
        <option value="securitizadora">Securitizadora</option>
        <option value="banco">Banco</option>
        <option value="pf2">Pessoa Física2</option>
        <option value="factoring2">Factoring2</option>
        <option value="fidc2">FIDC2</option>
        <option value="securitizadora2">Securitizadora2</option>
        <option value="banco2">Banco2</option>
      </SelectField>
      <WithMargin>Input value: {value}</WithMargin>
      <WithMargin>
        <button type="button" onClick={() => setValue('fidc')}>
          Set as FIDC from outside
        </button>
      </WithMargin>
      <WithMargin>
        <button type="button" onClick={() => setValue('')}>
          Set empty from outside
        </button>
      </WithMargin>
    </Center>
  );
};

export const controlledAndSearchable = () => {
  const [value, setValue] = React.useState('pf');
  return (
    <Center>
      <SelectField version="2" openLabel searchable label="Label" value={value} onChange={setValue}>
        <option value="pf">Pessoa Física</option>
        <option value="factoring">Factoring</option>
        <option value="fidc">FIDC</option>
        <option value="securitizadora">Securitizadora</option>
        <option value="banco">Banco</option>
        <option value="pf2">Pessoa Física2</option>
        <option value="factoring2">Factoring2</option>
        <option value="fidc2">FIDC2</option>
        <option value="securitizadora2">Securitizadora2</option>
        <option value="banco2">Banco2</option>
      </SelectField>
      <WithMargin>Input value: {value}</WithMargin>
      <WithMargin>
        <button type="button" onClick={() => setValue('fidc')}>
          Set as FIDC from outside
        </button>
      </WithMargin>
      <WithMargin>
        <button type="button" onClick={() => setValue('')}>
          Set empty from outside
        </button>
      </WithMargin>
    </Center>
  );
};

export const multiple = () => (
  <Center>
    <Size>
      <SelectField version="2" multiple onChange={action('onChange')}>
        <option value="pf">Pessoa Física</option>
        <option value="factoring">Factoring</option>
        <option value="fidc">FIDC</option>
        <option value="securitizadora">Securitizadora</option>
        <option value="banco">Banco</option>
      </SelectField>
    </Size>
  </Center>
);

export const multipleSearchable = () => (
  <Center>
    <Size>
      <SelectField version="2" multiple searchable onChange={action('onChange')}>
        <option value="pf">Pessoa Física</option>
        <option value="factoring">Factoring</option>
        <option value="fidc">FIDC</option>
        <option value="securitizadora">Securitizadora</option>
        <option value="banco">Banco</option>
      </SelectField>
    </Size>
  </Center>
);

export const withErrorMessage = () => (
  <Center>
    <SelectField version="2" errorMessage="Campo obrigatório">
      <option value="pf">Pessoa Física</option>
      <option value="factoring">Factoring</option>
      <option value="fidc">FIDC</option>
      <option value="securitizadora">Securitizadora</option>
      <option value="banco">Banco</option>
    </SelectField>
  </Center>
);

export const withHintText = () => (
  <Center>
    <SelectField version="2" hintText="Hint Text">
      <option value="pf">Pessoa Física</option>
      <option value="factoring">Factoring</option>
      <option value="fidc">FIDC</option>
      <option value="securitizadora">Securitizadora</option>
      <option value="banco">Banco</option>
    </SelectField>
  </Center>
);
