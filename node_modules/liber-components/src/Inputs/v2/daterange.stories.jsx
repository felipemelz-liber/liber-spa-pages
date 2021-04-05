import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from '../Inputs';

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

const Size = styled.div`
  width: 570px;
`;

const DateRangeFunction = () => {
  const [value, setValue] = React.useState('');
  return (
    <Size>
      <DateRangePicker
        label="Date Range"
        onChange={v => {
          setValue(v);
        }}
        value={value}
      />
    </Size>
  );
};

export default {
  title: 'Components 2.0|Input/DateRangePicker',
  parameters: {
    jest: ['DateRangePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <DateRangeFunction />
  </Center>
);

defaultStory.story = {
  name: 'default',
};
