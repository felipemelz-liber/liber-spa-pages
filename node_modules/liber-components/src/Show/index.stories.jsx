import React from 'react';
import styled from 'styled-components';
import Show from './Show';

const ContentCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 1.0|Show',

  parameters: {
    jest: ['Show'],
  },
};

export const defaultStory = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setState(!state)}>
        action
      </button>
      <Show in={state} timeout={500}>
        <ContentCenter>Conteudo</ContentCenter>
      </Show>
    </>
  );
};

defaultStory.story = {
  name: 'default',
};
