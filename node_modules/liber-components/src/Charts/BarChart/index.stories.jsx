import React from 'react';
import moment from 'moment';
import BarChart from './BarChart';

export default {
  title: 'Components 1.0|Charts/Bar Chart',
  parameters: {
    jest: ['BarChart'],
  },
};

export const defaultStory = () => (
  <div style={{ float: 'right' }}>
    <BarChart
      data={[
        {
          x: moment('2018-10-02'),
          y: 30,
          tooltipContent: 'content 27',
          mount: 'top',
          dynamicMount: true,
        },
        {
          x: moment('2018-10-04'),
          y: 10,
          tooltipContent: 'content 27',
          mount: 'top',
          dynamicMount: true,
        },
        {
          x: moment('2018-10-18'),
          y: 26,
          tooltipContent: 'content 27',
          mount: 'top',
          dynamicMount: true,
        },
        {
          x: moment('2018-10-20'),
          y: 20,
          tooltipContent: 'content 27',
          mount: 'top',
          dynamicMount: true,
        },
        {
          x: moment('2018-10-27'),
          y: 20,
          tooltipContent: 'content 27',
          mount: 'top',
          dynamicMount: false,
        },
      ]}
    />
  </div>
);

defaultStory.story = {
  name: 'default',
};
