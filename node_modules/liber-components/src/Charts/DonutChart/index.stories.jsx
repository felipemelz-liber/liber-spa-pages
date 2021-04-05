import React from 'react';
import DonutChart from './DonutChart';

export default {
  title: 'Components 1.0|Charts/Donut Chart',
  parameters: {
    jest: ['DonutChart'],
  },
};

export const defaultStory = () => <DonutChart />;

defaultStory.story = {
  name: 'default',
};
