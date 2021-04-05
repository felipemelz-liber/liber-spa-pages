import React from 'react';
import styled from 'styled-components';
import LoadingBunny from './Bunny';

const Container = styled.div`
  width: 240px;
  height: 240px;
`;

export default {
  title: 'UI|Loading/Bunny',

  parameters: {
    jest: ['Bunny'],
  },
};

export const defaultStory = () => (
  <Container>
    <LoadingBunny />
  </Container>
);

defaultStory.story = {
  name: 'default',
};

export const withLoop = () => (
  <Container>
    <LoadingBunny loop />
  </Container>
);

withLoop.story = {
  name: 'with loop',
};
