import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import MonthSelect from './MonthSelect/MonthSelect';

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
  title: 'Components 2.0|Input/MonthSelect',
  parameters: {
    jest: ['MonthSelect'],
  },
};

export const standard = () => {
  const [value, setValue] = useState(null);
  return (
    <Center>
      <MonthSelect
        value={value}
        label="Mês"
        onChange={({ moment: momentObj }) => {
          setValue(momentObj);
        }}
      />
    </Center>
  );
};

export const openLabel = () => {
  const [value, setValue] = useState(null);
  return (
    <Center>
      <MonthSelect
        openLabel
        value={value}
        label="Mês"
        onChange={({ moment: momentObj }) => {
          setValue(momentObj);
        }}
      />
    </Center>
  );
};

export const error = () => {
  const [value, setValue] = useState(moment());
  return (
    <Center>
      <MonthSelect
        errorMessage="error"
        value={value}
        label="Mês"
        onChange={({ moment: momentObj }) => {
          setValue(momentObj);
        }}
      />
    </Center>
  );
};
