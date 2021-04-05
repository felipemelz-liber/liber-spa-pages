import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import {
  Column, Row, Controls, Unit, Prev, Next, PrevUnit, NextUnit,
} from './MonthCalendar.styles';


const moment = extendMoment(Moment);

const defaultRenderer = day => <Unit>{day.date()}</Unit>;


const getMonthCalendar = (year, month, firstDayOfWeek) => {
  moment.updateLocale('en', { week: { dow: firstDayOfWeek, doy: 6 } });
  const startDate = moment([year, month]);
  const firstDay = moment(startDate).startOf('month');
  const endDay = moment(startDate).endOf('month');


  const monthRange = moment.range(firstDay, endDay);

  const weeks = [];
  const years = [];

  Array.from(monthRange.by('days')).forEach((m) => {
    if (!weeks.includes(m.week())) {
      weeks.push(m.week());
      if (m.week() === 1 && m.month() === 11) {
        years.push(m.year() + 1);
      } else if (m.week() === 52 && m.month() === 0) {
        years.push(m.year() - 1);
      }
      years.push(m.year());
    }
  });
  const calendar = [];
  weeks.forEach((week, index) => {
    const firstWeekDay = moment().year(years[index]).week(week).day(firstDayOfWeek);
    const lastWeekDay = moment().year(years[index]).week(week).day(firstDayOfWeek + 6);
    const weekRange = moment.range(firstWeekDay, lastWeekDay);
    calendar.push(Array.from(weekRange.by('days')));
  });
  return calendar;
};


class MonthCalendar extends Component {
  constructor(props) {
    super(props);
    const date = props.defaultDate ? moment(props.defaultDate, 'DD/MM/YYYY') : moment().startOf('month');
    this.state = {
      date,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.date) {
      return {
        date: moment(props.date, 'DD/MM/YYYY').startOf('month'),
      };
    }
    return state;
  }


  getDayType = (rawDay) => {
    const { onlyCurrent, minDate: propMinDate } = this.props;
    const { date } = this.state;
    const today = moment().startOf('day');
    const day = moment(rawDay).startOf('day');
    const minDate = moment(propMinDate, 'DD/MM/YYYY').startOf('day');

    if (minDate.isValid() && day.isBefore(minDate)) {
      return 'disabled';
    }
    if (day.isBefore(date, 'month') || day.isAfter(date, 'month')) {
      return onlyCurrent ? 'empty' : 'past';
    } if (day.isSame(today)) {
      return 'today';
    }
    return 'basic';
  };

  handleDayClick = (day) => {
    const { onClick } = this.props;
    if (onClick) {
      return (...args) => {
        onClick(day, ...args);
      };
    }
    return undefined;
  }

  renderDay = renderer => (day) => {
    const renderedComponent = renderer(day);

    const type = renderedComponent.props.type || this.getDayType(day);
    return cloneElement(renderedComponent, {
      type,
      key: `${day.week()}${day.date()}`,
      onClick: this.handleDayClick(day),
    });
  };

  mapWeek = renderer => week => (
    <Row key={week[0].week()}>
      {week.map(this.renderDay(renderer))}
    </Row>
  );

  mapWeekLabels = (day, index) => (
    <Unit key={day + index} type="label">{day}</Unit>
  );

  changeCallback = date => this.props.onNavigate(date);

  handleNext = () => {
    this.setState((state) => {
      const date = moment(state.date).add(1, 'month');
      this.changeCallback(date);
      return {
        date,
      };
    });
  }

  handlePrev = () => {
    this.setState((state) => {
      const date = moment(state.date).subtract(1, 'month');
      if (date.year() < 0) return state;
      this.changeCallback(date);
      return {
        date,
      };
    });
  }

  getFormatedWeekLabels = (week, first) => {
    const all = [...week];
    const last = all.splice(0, first);

    return [...all, ...last];
  }

  render() {
    const {
      dayRenderer: renderer,
      weekLabels: weekLabelsList,
      monthsLabels,
      firstDayOfWeek,
      navigation,
      innerRef,
    } = this.props;
    const { date } = this.state;
    const year = date.year();
    const month = date.month();
    const calendar = getMonthCalendar(year, month, firstDayOfWeek);
    const weekLabels = this.getFormatedWeekLabels(weekLabelsList, firstDayOfWeek);
    return (
      <Column ref={innerRef}>
        <Controls>
          {navigation.includes('prev') ? <Prev onClick={this.handlePrev} /> : <PrevUnit type="empty" />}
          {monthsLabels[month]} de {year}
          {navigation.includes('next') ? <Next onClick={this.handleNext} /> : <NextUnit type="empty" />}
        </Controls>
        <Column>
          <Row>
            {weekLabels.map(this.mapWeekLabels)}
          </Row>
          {calendar.map(this.mapWeek(renderer))}
        </Column>
      </Column>
    );
  }
}

MonthCalendar.propTypes = {
  onlyCurrent: PropTypes.bool,
  weekLabels: PropTypes.arrayOf(PropTypes.string),
  monthsLabels: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.oneOf([0, 1]),
  innerRef: PropTypes.oneOfType([PropTypes.any]),
  defaultDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  // eslint-disable-next-line
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  navigation: PropTypes.arrayOf(PropTypes.string),
  onNavigate: PropTypes.func,
  dayRenderer: PropTypes.func,
  onClick: PropTypes.func,
};

MonthCalendar.defaultProps = {
  innerRef: null,
  onlyCurrent: false,
  defaultDate: null,
  date: null,
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ],
  navigation: ['prev', 'next'],
  dayRenderer: defaultRenderer,
  onNavigate: () => {},
  onClick: null,
};

export default MonthCalendar;
