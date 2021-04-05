import React from 'react';
import PieChart from './PieChart';

export default {
  title: 'Components 1.0|Charts/Pie Chart',
  parameters: {
    jest: ['PieChart'],
  },
};

export const defaultStory = () => <PieChart />;

defaultStory.story = {
  name: 'default',
};
