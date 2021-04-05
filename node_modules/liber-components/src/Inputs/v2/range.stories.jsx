import React from 'react';
import styled from 'styled-components';

import { Range } from './RangePickers';

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
  title: 'Components 2.0|Calendar/RangePicker',
  parameters: {
    jest: ['DatePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <Range showTime={false} />
  </Center>
);

defaultStory.story = {
  name: 'default',
};
