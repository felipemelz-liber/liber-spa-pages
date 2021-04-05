import React from 'react';
import PropTypes from 'prop-types';
import { wrapper } from '../Util/VersionWrapper';

import V1MonthlyCalendar from './v1/MonthCalendar';

import V1WeeklyCalendar from './v1/WeekCalendar';

import V1CalendarFilter from './v1/Filter';

import V2MonthCalendar from './v2/MonthCalendar';

export const MonthlyCalendar = wrapper([V1MonthlyCalendar, V2MonthCalendar]);
export const WeeklyCalendar = wrapper([V1WeeklyCalendar]);
export const CalendarFilter = wrapper([V1CalendarFilter]);

const Calendar = ({ view, ...props }) => {
  switch (view) {
    case 'month':
      return <MonthlyCalendar {...props} />;
    case 'week':
      return <WeeklyCalendar {...props} />;
    default:
      return 'Not Implemented Yet';
  }
};

Calendar.propTypes = {
  view: PropTypes.string,
};

Calendar.defaultProps = {
  view: 'month',
};

export default Calendar;
