import React from 'react';
import styled from 'styled-components';
import Accordion from './components/Accordion';

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
  title: 'Components 1.0|Accordion',
  parameters: {
    jest: ['Accordion'],
  },
};

export const defaultStory = () => {
  const [state, setState] = React.useState(true);
  return (
    <Center>
      <button type="button" onClick={() => setState(!state)}>
        click
      </button>
      <Accordion open={state} label="Accordion">
        Accordion content
      </Accordion>{' '}
    </Center>
  );
};

defaultStory.story = {
  name: 'default',
};
