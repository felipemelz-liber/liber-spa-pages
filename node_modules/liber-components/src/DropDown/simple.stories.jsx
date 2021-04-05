import React from 'react';
import styled from 'styled-components';
import SimpleDropDown from './components/SimpleDropDown';
import { Button } from '../Buttons';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
  & > div {
    position: relative;
    background-color: #fff;
    padding: 4px 12px;
    border-radius: 4px;
  }
`;

export default {
  title: 'Components 2.0|SimpleDropDown',
  parameters: {
    jest: ['SimpleDropDown'],
  },
};

export const defaultStory = () => (
  <Center>
    <div>
      <SimpleDropDown label="label">content</SimpleDropDown>
    </div>
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const changingPosition = () => (
  <Center>
    <div>
      <SimpleDropDown label="label" position="bottom-center-left">
        content
      </SimpleDropDown>
    </div>
  </Center>
);

changingPosition.story = {
  name: 'changing position',
};

export const customButton = () => (
  <Center>
    <div>
      <SimpleDropDown customButton={<Button>o/</Button>}>content</SimpleDropDown>
    </div>
  </Center>
);

customButton.story = {
  name: 'custom button',
};

export const autoPosition = () => (
  <Center>
    <div>
      <SimpleDropDown autoPosition>content</SimpleDropDown>
    </div>
  </Center>
);
