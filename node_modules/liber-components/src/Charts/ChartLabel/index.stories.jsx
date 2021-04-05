import React from 'react';
import ChartLabel from './ChartLabel';

export default {
  title: 'Components 1.0|Charts/Chart Label',
  parameters: {
    jest: ['ChartLabel'],
  },
};

export const defaultStory = () => (
  <ChartLabel>
    <div>Valor</div>
  </ChartLabel>
);

defaultStory.story = {
  name: 'default',
};
