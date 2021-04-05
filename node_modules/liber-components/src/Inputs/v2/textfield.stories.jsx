import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../Inputs';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 2.0|Input/TextField',
  parameters: {
    jest: ['TextField'],
  },
};

export const defaultStory = () => (
  <Center>
    <TextField version={2} label="CPF" />
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const disabled = () => (
  <Center>
    <TextField version={2} disabled label="CPF" />
  </Center>
);

export const hint = () => (
  <Center>
    <TextField version={2} hintText="999.999.999-99" />
  </Center>
);

export const withOpenLabel = () => (
  <Center>
    <TextField version={2} openLabel label="CPF" />
  </Center>
);

withOpenLabel.story = {
  name: 'with open label',
};

export const withValue = () => (
  <Center>
    <TextField version={2} label="CPF" value="226.718.960-77" />
  </Center>
);

withValue.story = {
  name: 'with value',
};

export const withPrefix = () => (
  <Center>
    <TextField version={2} label="Total" prefix="$" value="1000,00" />
  </Center>
);

withPrefix.story = {
  name: 'with prefix',
};

export const withErrorMessage = () => {
  const [value, setValue] = useState('226.718.96-0-77');
  return (
    <Center>
      <TextField
        version={2}
        label="CPF"
        value={value}
        onChange={setValue}
        errorMessage="CPF inválido"
      />
    </Center>
  );
};

withErrorMessage.story = {
  name: 'with error message',
};

export const withHelper = () => (
  <Center>
    <TextField version={2} helper="Insira um CPF válido" label="CPF" hintText="999.999.999-99" />
  </Center>
);

withHelper.story = {
  name: 'with helper',
};

export const withAutoComplete = () => (
  <Center>
    <TextField
      version={2}
      autoComplete
      autoCompleteList={[
        'Item encontrado 1',
        'Item encontrado 2',
        'Item encontrado 3',
        'Item encontrado 4',
        'Item sob efeito de hover',
      ]}
      hintText="Comece digitando algo"
    />
  </Center>
);

withAutoComplete.story = {
  name: 'with auto complete',
};

export const withPassword = () => (
  <Center>
    <TextField version={2} type="password" showPasswordToggle />
  </Center>
);

withPassword.story = {
  name: 'with password',
};
