import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import MonthlyCalendar from '../../../Calendar/v2/MonthCalendar';
import { Clock } from '../TimePicker';
import {
  PickerBody,
  PickerSlider,
  CalendarContainer,
  ClockContainer,
  ActionFooter,
} from './DateTimeRangePicker.styles';

import { Button } from '../../../Buttons';

momentTimezone.tz.setDefault('UTC');

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 'calendar',
    };
  }

  changeToClock = () => {
    this.setState({ showing: 'clock' });
  };

  changeToCalendar = () => {
    this.setState({ showing: 'calendar' });
  };

  breakTime = time => {
    if (time) {
      return time.split(':');
    }
    return ['', '', ''];
  };

  render() {
    const { showing } = this.state;
    const {
      navigation,
      month = moment(),
      time,
      onCalendarClick,
      onClockClick,
      onNavigate,
      calendarRef,
      dayRenderer,
      weekLabels,
      monthsLabels,
      firstDayOfWeek,
      minDate,
    } = this.props;
    const actionProps = {
      calendar: {
        children: 'SELECIONAR HORÁRIO',
        onClick: this.changeToClock,
      },
      clock: {
        children: 'SELECIONAR DATA',
        onClick: this.changeToCalendar,
      },
    };
    const [hour, min, sec] = this.breakTime(time);
    return (
      <PickerBody>
        <PickerSlider show={showing}>
          <CalendarContainer ref={calendarRef}>
            <MonthlyCalendar
              version="2"
              navigation={navigation}
              date={month.startOf('month')}
              dayRenderer={dayRenderer}
              onClick={onCalendarClick}
              onNavigate={onNavigate}
              weekLabels={weekLabels}
              monthsLabels={monthsLabels}
              firstDayOfWeek={firstDayOfWeek}
              minDate={minDate}
            />
          </CalendarContainer>
          <ClockContainer>
            <Clock hour={hour} min={min} sec={sec} onClick={onClockClick} />
          </ClockContainer>
        </PickerSlider>
        <ActionFooter>
          <Button version={2} {...actionProps[showing]} disabled={!onClockClick} />
        </ActionFooter>
      </PickerBody>
    );
  }
}

DateTime.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.string),
  month: PropTypes.instanceOf(moment),
  time: PropTypes.string,
  onNavigate: PropTypes.func,
  onCalendarClick: PropTypes.func,
  onClockClick: PropTypes.func,
  calendarRef: PropTypes.func,
  dayRenderer: PropTypes.func,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
  firstDayOfWeek: PropTypes.oneOf([0, 1]),
  weekLabels: PropTypes.arrayOf(PropTypes.string),
  monthsLabels: PropTypes.arrayOf(PropTypes.string),
};
DateTime.defaultProps = {
  navigation: ['prev', 'next'],
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],

  month: undefined,
  time: null,
  onNavigate: () => {},
  onCalendarClick: () => {},
  onClockClick: null,
  calendarRef: () => {},
  dayRenderer: null,
};

export default DateTime;
