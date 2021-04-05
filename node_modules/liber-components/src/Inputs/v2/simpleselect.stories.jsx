import React from 'react';
import styled from 'styled-components';
import { SimpleSelect } from '../Inputs';
import { Tag } from '../../Tags';

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
  title: 'Components 2.0|Input/SimpleSelect',
  parameters: {
    jest: ['SimpleSelect'],
  },
};

export const defaultStory = () => (
  <Center>
    <SimpleSelect>
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </SimpleSelect>
  </Center>
);

defaultStory.story = {
  name: 'default',
};
