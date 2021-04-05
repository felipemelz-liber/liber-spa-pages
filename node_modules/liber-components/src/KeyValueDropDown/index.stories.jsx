import React from 'react';
import styled from 'styled-components';
import KeyValueDropDown from './KeyValueDropDown';

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
  title: 'Components 2.0|KeyValueDropDown',
  parameters: {
    jest: ['KeyValueDropDown'],
  },
};

export const defaultStory = () => (
  <Center>
    <KeyValueDropDown keyLabel="key" label="label">
      Content
    </KeyValueDropDown>
  </Center>
);

defaultStory.story = {
  name: 'default',
};
