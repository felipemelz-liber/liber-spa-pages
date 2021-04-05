import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SimpleLogo from './SimpleLogo';

const Container = styled.div`
  width: 180px;
  height: 180px;
`;

export default {
  title: 'UI|Logo',

  parameters: {
    jest: ['Logo'],
  },
};

export const defaultStory = () => (
  <Container>
    <Logo />
  </Container>
);

defaultStory.story = {
  name: 'default',
};

export const simpleLogo = () => (
  <Container>
    <SimpleLogo />
  </Container>
);

simpleLogo.story = {
  name: 'simple logo',
};
