import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Calendar from '../Calendar';

const Container = styled.div`
  width: 500px;
  height: 500px;
`;

export default {
  title: 'Components 2.0|Calendar',
  parameters: {
    jest: ['Calendar'],
  },
};

export const monthCalendar = () => (
  <Container>
    <Calendar
      view="month"
      version="2"
      onClick={action('onClick')}
      onNavigate={action('onNavigate')}
      minDate="07/06/2019"
    />
  </Container>
);

monthCalendar.story = {
  name: 'month calendar',
};
