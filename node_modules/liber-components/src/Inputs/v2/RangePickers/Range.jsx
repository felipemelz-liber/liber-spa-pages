import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import useResizeObserver from 'use-resize-observer';
import Selection from './DateTimeSelection';
import { Unit } from '../../../Calendar/v2/MonthCalendar';
import { Container, Range as RangeUnit } from './Range.styles';

const getDisplayDates = displayDate => {
  const startDisplayDate = moment(displayDate).startOf('month');
  const endDisplayDate = moment(startDisplayDate).add(1, 'month');
  return {
    startDisplayDate,
    endDisplayDate,
  };
};

const handleNavigationStart = callback => date => {
  callback(date);
};

const handleStartTimeSelection = (callback, endTime) => (hour, min, sec) => {
  callback({ hour, min, sec }, endTime);
};

const handleEndTimeSelection = (callback, startTime) => (hour, min, sec) => {
  callback(startTime, { hour, min, sec });
};

const handleDateSelection = (callback, navigationCallback, start, end, displayDate) => date => {
  if (!start || !start.isValid()) {
    if (!date.isSame(displayDate, 'month')) {
      navigationCallback(moment(date).startOf('month'));
    }
    callback(date, null);
  } else if (date.isSame(start, 'day') && (!end || !end.isValid())) {
    callback(null, null);
  } else if ((!end || !end.isValid()) && date.isAfter(start)) {
    callback(start, date);
  } else if (date.isBefore(start)) {
    if (!date.isSame(displayDate, 'month')) {
      navigationCallback(moment(date).startOf('month'));
    }
    callback(date, end);
  } else if (date.isSame(end, 'day')) {
    callback(start, null);
  } else if (date.isAfter(start)) {
    callback(start, date);
  } else if (date.isSame(start, 'day')) {
    callback(null, null);
  }
};

const handleNavigationEnd = callback => enddate => {
  const date = moment(enddate).subtract(1, 'month');
  callback(date);
};

const getMax = () => {
  const [startRef, startWidth, startHeight] = useResizeObserver(); // eslint-disable-line
  const [endRef, endWidth, endHeight] = useResizeObserver(); // eslint-disable-line
  const height = Math.max(startHeight, endHeight);
  return [startRef, endRef, height];
};

const isStart = selector => selector === 'start';
const isEnd = selector => selector === 'end';

const isDayMonthNotSameFromStart = (day, start) => !day.isSame(start, 'month');
const isDayEnd = (day, end) => day.isSame(end);
const isDayNotEnd = (...args) => !isDayEnd(...args);
const isDayInRange = (day, start, end) => day.isBetween(start, end);

const isDayMonthSameAsDisplay = (day, displayDate) => day.isSame(displayDate, 'month');
const isDayMonthNotSameAsDisplay = (...args) => !isDayMonthSameAsDisplay(...args);
const isDayMonthSameAsDisplayNext = (day, displayDate) => {
  const displayNext = moment(displayDate).add(1, 'month');
  return day.isSame(displayNext, 'month');
};

const isDayMonthSameAsStart = (day, start) => day.isSame(start, 'month');
const isDayMonthSameAsEnd = (day, end) => day.isSame(end, 'month');
const isDayStart = (day, start) => day.isSame(start, 'day');
const isDayWeekSameAsStart = (day, start) => day.isSame(start, 'week');

const isStartMonthSameAsDisplay = (start, displayDate) => start.isSame(displayDate, 'month');

const isStartMonthNotSameAsDisplay = (...args) => !isStartMonthSameAsDisplay(...args);

const isStartMonthSameAsEnd = (start, end) => start.isSame(end, 'month');

const isDayWeekSameAsEnd = (day, end) => day.isSame(end, 'week');

const isEndMonthAfterDisplay = (end, displayDate) => end.isAfter(displayDate, 'month');
const isEndMonthSameAsDisplay = (end, displayDate) => end.isSame(displayDate, 'month');

const checked = start => ({ type: 'checked', start });
const range = { type: 'range', start: false };
const pastRange = { type: 'past-range', start: false };
const empty = { type: undefined, start: false };

const getUnitType = (displayDate, start, end, day, selector) => {
  if (isStart(selector)) {
    if (isDayMonthNotSameFromStart(day, start) || isDayNotEnd(day, end)) {
      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return range;
        }
        if (isStartMonthNotSameAsDisplay(start, displayDate) && isDayWeekSameAsStart(day, start)) {
          return empty;
        }
        return pastRange;
      }
    }
    if (isDayMonthSameAsStart(day, start)) {
      if (isDayStart(day, start)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return checked(true);
        }
        return empty;
      }
      if (isDayInRange(day, start, end)) {
        if (isStartMonthSameAsDisplay(start, displayDate)) {
          return range;
        }
        return pastRange;
      }
    }
    if (isStartMonthSameAsEnd(start, end)) {
      if (isDayEnd(day, end)) {
        return checked(false);
      }
    } else if (isDayMonthSameAsEnd(day, end)) {
      if (isDayEnd(day, end) && isDayMonthSameAsDisplay(day, displayDate)) {
        return checked(false);
      }
      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplay(day, displayDate)) {
          return range;
        }
        return pastRange;
      }
      if (isDayWeekSameAsEnd(day, end) && isDayMonthNotSameAsDisplay(day, displayDate)) {
        return pastRange;
      }
    }
  }
  if (isEnd(selector)) {
    if (isDayMonthNotSameFromStart(day, start) || isDayNotEnd(day, end)) {
      if (isDayInRange(day, start, end)) {
        if (isDayMonthSameAsDisplayNext(day, displayDate)) {
          return range;
        }
        if (isDayMonthSameAsEnd(day, end) && isEndMonthSameAsDisplay(end, displayDate)) {
          return empty;
        }
        return pastRange;
      }
    }

    if (isDayMonthSameAsStart(day, start)) {
      if (isDayStart(day, start)) {
        if (isStartMonthNotSameAsDisplay(start, displayDate)) {
          return checked(true);
        }
        if (end.isValid()) {
          return pastRange;
        }
      }
    }

    if (isDayMonthSameAsEnd(day, end) && isDayMonthNotSameAsDisplay(day, displayDate)) {
      if (isDayEnd(day, end)) {
        return checked(false);
      }
      if (isDayInRange(day, start, end)) {
        if (
          isStartMonthSameAsDisplay(start, displayDate) &&
          isEndMonthAfterDisplay(end, displayDate)
        ) {
          return range;
        }
        return pastRange;
      }
    } else if (isDayInRange(day, start, end)) {
      if (
        isStartMonthSameAsDisplay(start, displayDate) &&
        isEndMonthAfterDisplay(end, displayDate)
      ) {
        return pastRange;
      }
      return range;
    }
  }

  return empty;
};

const renderDay = (displayDate, startDate, endDate, selector) => day => {
  const { type, start } = getUnitType(
    displayDate,
    moment(startDate),
    moment(endDate),
    day.startOf('day'),
    selector,
  );
  if (type) {
    return (
      <RangeUnit start={start} checked={type === 'checked'} empty={type === 'past'}>
        <Unit type={type}>{day.date()}</Unit>
      </RangeUnit>
    );
  }
  return <Unit type={type}>{day.date()}</Unit>;
};

const setter = (setStart, setEnd) => (start, end) => {
  setStart(start);
  setEnd(end);
};

const Range = props => {
  const [stateDisplayDate, setDisplayDate] = React.useState(moment());
  const [stateStartDate, setStartDate] = React.useState(null);
  const [stateEndDate, setEndDate] = React.useState(null);
  const [stateStartTime, setStartTime] = React.useState({ hour: 0, min: 0, sec: 0 });
  const [stateEndTime, setEndTime] = React.useState({ hour: 0, min: 0, sec: 0 });

  const {
    showTime,

    displayDate = stateDisplayDate,
    startDate = stateStartDate,
    startTime = stateStartTime,
    endDate = stateEndDate,
    endTime = stateEndTime,

    onNavigate = setDisplayDate,
    onChangeDates = setter(setStartDate, setEndDate),
    onChangeTimes = setter(setStartTime, setEndTime),
  } = props;

  const { startDisplayDate, endDisplayDate } = getDisplayDates(displayDate);

  const [startRef, endRef, height] = getMax();

  return (
    <Container style={{ '--clock-container-size': `${height + 64}px` }}>
      <Selection
        ref={startRef}
        showTime={showTime}
        dateProps={{
          navigation: ['prev'],
          date: startDisplayDate,
          onNavigate: handleNavigationStart(onNavigate),
          dayRenderer: renderDay(displayDate, startDate, endDate, 'start'),
          onClick: handleDateSelection(onChangeDates, onNavigate, startDate, endDate, displayDate),
        }}
        timeProps={{
          ...startTime,
          onClick: handleStartTimeSelection(onChangeTimes, endTime),
        }}
      />
      <Selection
        ref={endRef}
        showTime={showTime}
        dateProps={{
          navigation: ['next'],
          date: endDisplayDate,
          onNavigate: handleNavigationEnd(onNavigate),
          dayRenderer: renderDay(displayDate, startDate, endDate, 'end'),
          onClick: handleDateSelection(onChangeDates, onNavigate, startDate, endDate, displayDate),
        }}
        timeProps={{
          ...endTime,
          onClick: handleEndTimeSelection(onChangeTimes, startTime),
        }}
      />
    </Container>
  );
};

Range.propTypes = {
  displayDate: PropTypes.instanceOf(moment),
  startDate: PropTypes.instanceOf(moment),
  startTime: PropTypes.shape({
    hour: PropTypes.number,
    min: PropTypes.number,
    sec: PropTypes.number,
  }),
  endTime: PropTypes.shape({
    hour: PropTypes.number,
    min: PropTypes.number,
    sec: PropTypes.number,
  }),
  endDate: PropTypes.instanceOf(moment),
  showTime: PropTypes.bool,
  onNavigate: PropTypes.func,
  onChangeDates: PropTypes.func,
  onChangeTimes: PropTypes.func,
};

Range.defaultProps = {
  displayDate: undefined,
  startDate: undefined,
  startTime: undefined,
  endDate: undefined,
  endTime: undefined,
  showTime: true,
  onNavigate: undefined,
  onChangeDates: undefined,
  onChangeTimes: undefined,
};

export default Range;
