import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import {
  CalendarBody,
  Cell,
  WeekCell,
  WeekCellLink,
  WeekDayValue,
  WeekNav,
  NavButton,
  Week,
  Left,
  Right,
  WeekBody,
  BiggerDot,
  DataContainer,
} from './styles';
import { pad, sizes } from '../../Util';

const moment = extendMoment(Moment);

const defaultFormatData = (values, labels, day, colors) => (
  <Fragment>
    {Object.keys(values).map((key, index) => {
      const value = values[key];
      if (value.show || value.show === undefined) {
        let dot;
        if (!colors || typeof colors === 'string') {
          dot = <BiggerDot color={colors}>{value.value}</BiggerDot>;
        } else if (Array.isArray(colors)) {
          dot = <BiggerDot color={colors[index]}>{value.value}</BiggerDot>;
        } else {
          dot = <BiggerDot color={colors[key]}>{value.value}</BiggerDot>;
        }
        return (
          <DataContainer key={labels ? labels[key] : key}>
            {dot}
            <Cell>{labels ? labels[key] : key}</Cell>
          </DataContainer>
        );
      }
      return null;
    })}
  </Fragment>
);

class WeekCalendar extends Component {
  constructor(props) {
    super();
    const m = props.defaultDate ? moment(props.defaultDate) : moment();
    const screenSize = this.getScreenSize();
    this.state = {
      screenSize,
      year: m.year(),
      week: m.week(),
      currMoment: m,
      previousDate: props.date,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  static getDerivedStateFromProps(props, state) {
    const { date } = props;
    const { previousDate } = state;

    if (date && date !== previousDate) {
      const reference = moment(date);
      return {
        year: reference.year(),
        week: reference.week(),
        currMoment: reference,
        previousDate: date,
      };
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getScreenSize = () => {
    const { innerWidth } = window;
    const screenSize = Object.keys(sizes).reduce((prev, next) => {
      if (parseInt(sizes[next].slice(0, -2), 10) <= innerWidth) return next;
      return prev;
    }, 'small');
    return screenSize;
  };

  getWeekCalendar = (year, week, firstDayOfWeek) => {
    const firstWeekDay = moment()
      .year(year)
      .week(week)
      .day(firstDayOfWeek);
    const lastWeekDay = moment()
      .year(year)
      .week(week)
      .day(firstDayOfWeek + 6);
    const weekRange = moment.range(firstWeekDay, lastWeekDay);
    return Array.from(weekRange.by('days'));
  };

  updateDimensions = () => {
    const screenSize = this.getScreenSize();
    this.setState({ screenSize });
  };

  handleAddWeek = () => {
    const { currMoment } = this.state;
    const { onWeekChange } = this.props;
    const newMoment = currMoment.add(1, 'w');
    this.setState(
      {
        week: newMoment.week(),
        year: newMoment.year(),
        currMoment: newMoment,
      },
      () => {
        onWeekChange(newMoment.format('YYYY-MM-DD'), newMoment);
      },
    );
  };

  handleSubWeek = () => {
    const { currMoment } = this.state;
    const newMoment = currMoment.subtract(1, 'w');
    const { onWeekChange } = this.props;
    this.setState(
      {
        week: newMoment.week(),
        year: newMoment.year(),
        currMoment: newMoment,
      },
      () => {
        onWeekChange(newMoment.format('YYYY-MM-DD'), newMoment);
      },
    );
  };

  renderWeekNavigation = (weekRange, months) => {
    const { year, screenSize } = this.state;
    const firstDay = weekRange[
      screenSize === 'small' || screenSize === 'medium' ? 1 : 0
    ].date();
    const lastDay = weekRange[
      screenSize === 'small' || screenSize === 'medium' ? 5 : 6
    ].date();
    if (months.length !== 12) {
      console.error(`A year have 12 month, your year has ${months.length}`);
    }
    return (
      <Cell>
        <NavButton onClick={this.handleSubWeek}>
          <Left />
        </NavButton>
        <Week>
          {pad(firstDay)} - {pad(lastDay)} {months[weekRange[6].month()]},{' '}
          {year}
        </Week>
        <NavButton onClick={this.handleAddWeek}>
          <Right />
        </NavButton>
      </Cell>
    );
  };

  renderData = (data, day) => {
    const { formatData, notificationColor } = this.props;
    if (data && data.content) {
      const values = data.content[day.format('YYYY-MM-DD')];
      if (values && values.options) {
        return formatData(values.options, data.labels, day, notificationColor);
      }
    }
    return null;
  };

  renderWeek = (weekDays, weekRange) => {
    const { data } = this.props;
    const { screenSize } = this.state;
    return weekRange.map(day => {
      const renderedData = this.renderData(data, day);
      if (weekDays.length !== 7) {
        console.error(`A week have 7 days, your week has ${weekDays.length}`);
      }
      if (screenSize === 'small' || screenSize === 'medium') {
        if (day.day() === 0 || day.day() === 6) {
          return null;
        }
      }
      const dayData =
        data && data.content ? data.content[day.format('YYYY-MM-DD')] : null;
      const dayProps = {
        key: day.date(),
        pointer: false,
      };
      if (dayData) {
        const { href, events } = dayData;
        dayProps.pointer = true;
        dayProps.href = href;
        if (!href && events) {
          Object.keys(events).forEach(event => {
            dayProps[event] = () => {
              events[event](day.format('YYYY-MM-DD'), day);
            };
          });
        }
      }
      if (dayProps.href) {
        return (
          <WeekCellLink {...dayProps}>
            <WeekDayValue
              disabled={day.day() === 0 || day.day() === 6}
              today={day.isSame(moment(), 'date')}
            >
              <div>{pad(day.date())}</div>
              <div>{weekDays[day.day()]}</div>
            </WeekDayValue>
            {renderedData ? <div>{renderedData}</div> : null}
          </WeekCellLink>
        );
      }
      return (
        <WeekCell {...dayProps}>
          <WeekDayValue
            disabled={day.day() === 0 || day.day() === 6}
            today={day.isSame(moment(), 'date')}
          >
            <div>{pad(day.date())}</div>
            <div>{weekDays[day.day()]}</div>
          </WeekDayValue>
          {renderedData ? <div>{renderedData}</div> : null}
        </WeekCell>
      );
    });
  };

  render() {
    const { year, week } = this.state;
    const { weekDays, firstDayOfWeek, months } = this.props;
    const weekRange = this.getWeekCalendar(year, week, firstDayOfWeek);
    return (
      <CalendarBody week>
        <WeekNav>{this.renderWeekNavigation(weekRange, months)}</WeekNav>
        <WeekBody>{this.renderWeek(weekDays, weekRange)}</WeekBody>
      </CalendarBody>
    );
  }
}

WeekCalendar.propTypes = {
  weekDays: PropTypes.arrayOf(PropTypes.string),
  months: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.number,
  formatData: PropTypes.func,
  data: PropTypes.shape({
    labels: PropTypes.objectOf(PropTypes.string),
    content: PropTypes.objectOf(PropTypes.any),
  }),
  defaultDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
  notificationColor: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.string),
    PropTypes.string,
  ]),
  onWeekChange: PropTypes.func,
  onDayClick: PropTypes.func,
};

WeekCalendar.defaultProps = {
  weekDays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  months: [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  firstDayOfWeek: 0,
  defaultDate: null,
  data: null,
  date: null,
  notificationColor: null,
  formatData: defaultFormatData,
  onWeekChange: () => {},
  onDayClick: () => {},
};

export default WeekCalendar;
