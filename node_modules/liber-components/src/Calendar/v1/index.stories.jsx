import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from '../Calendar';

const Container = styled.div`
  width: 500px;
  height: 500px;
`;

export default {
  title: 'Components 1.0|Calendar',
  parameters: {
    jest: ['Calendar'],
  },
};

export const weekCalendar = () => {
  const [date, setDate] = useState(null);

  return (
    <Container>
      <button type="button" onClick={() => setDate(moment().add(1, 'week'))}>
        Add week
      </button>
      <Calendar view="week" date={date} />
    </Container>
  );
};

export const monthCalendar = () => {
  const [date, setDate] = useState(null);

  return (
    <Container>
      <button type="button" onClick={() => setDate(moment().add(1, 'month'))}>
        Add month
      </button>
      <Calendar view="month" date={date} />
    </Container>
  );
};

monthCalendar.story = {
  name: 'month calendar',
};
