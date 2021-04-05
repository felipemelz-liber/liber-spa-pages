import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components 1.0|Onboarding',

  parameters: {
    jest: ['ProgressBar'],
  },
};

export const defaultStory = () => (
  <ProgressBar
    steps={{
      content1: 'Conteudo 1',
      content2: 'Conteudo 2',
      content3: 'Conteudo 3',
    }}
    current={1}
  />
);

defaultStory.story = {
  name: 'default',
};
