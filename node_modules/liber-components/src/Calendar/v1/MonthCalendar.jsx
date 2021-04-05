import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import _ from 'lodash';
import { extendMoment } from 'moment-range';
import { pad } from '../../Util';

import {
  Row,
  Cell,
  WeekDay,
  CalendarBody,
  Day,
  DayLink,
  Month,
  Left,
  Right,
  NavButton,
  Tooltip,
  Dot,
  FloatingDots,
} from './styles';

const moment = extendMoment(Moment);

const defaultFormatTooltip = (values, labels, day, dots) => {
  let hideTooltip = true;
  const content = {
    content: (
      <Fragment>
        <h6>{day.locale('pt-br').format('DD MMMM, YYYY ')}</h6>
        {Object.keys(values).map(key => {
          const value = values[key];
          if (value.show || value.show === undefined) {
            hideTooltip = false;
            let dot;

            if (!dots || typeof dots === 'string') {
              dot = <Dot color={dots} />;
            } else {
              dot = <Dot color={dots[key]} />;
            }
            return (
              <div key={labels ? labels[key] : key}>
                {dot}
                {value.value} {labels ? labels[key] : key}
              </div>
            );
          }
          return null;
        })}
      </Fragment>
    ),
    hide: hideTooltip,
  };
  return content;
};

class MonthCalendar extends Component {
  constructor(props) {
    super();
    const m = props.defaultDate ? moment(props.defaultDate) : moment();
    this.state = {
      year: m.year(),
      month: m.month(),
      currMoment: m,
      previousDate: props.date,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { date } = props;
    const { previousDate } = state;

    if (date && date !== previousDate) {
      const reference = moment(date);
      return {
        year: reference.year(),
        month: reference.month(),
        currMoment: reference,
        previousDate: date,
      };
    }
    return null;
  }

  getMonthCalendar = (year, month, firstDayOfWeek) => {
    const startDate = moment([year, month]);
    const firstDay = moment(startDate).startOf('month');
    const endDay = moment(startDate).endOf('month');

    const monthRange = moment.range(firstDay, endDay);

    const weeks = [];
    const years = [];

    Array.from(monthRange.by('days')).forEach(m => {
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
      const firstWeekDay = moment()
        .year(years[index])
        .week(week)
        .day(firstDayOfWeek);
      const lastWeekDay = moment()
        .year(years[index])
        .week(week)
        .day(firstDayOfWeek + 6);
      const weekRange = moment.range(firstWeekDay, lastWeekDay);
      calendar.push(Array.from(weekRange.by('days')));
    });
    return calendar;
  };

  getFormatedData = (...args) => {
    const { formatTooltip } = this.props;
    const content = formatTooltip(...args);
    if (React.isValidElement(content)) {
      return {
        content,
        hide: false,
      };
    }
    if (content.content !== undefined && content.hide !== undefined) {
      return content;
    }
    return { hide: true };
  };

  handleAddMonth = () => {
    const { currMoment } = this.state;
    const { onMonthChange } = this.props;
    const newMoment = currMoment.add(1, 'M');
    this.setState(
      {
        month: newMoment.month(),
        year: newMoment.year(),
        currMoment: newMoment,
      },
      () => {
        onMonthChange(newMoment.format('YYYY-MM-DD'), newMoment);
      },
    );
  };

  handleSubMonth = () => {
    const { currMoment } = this.state;
    const newMoment = currMoment.subtract(1, 'M');
    const { onMonthChange } = this.props;
    this.setState(
      {
        month: newMoment.month(),
        year: newMoment.year(),
        currMoment: newMoment,
      },
      () => {
        onMonthChange(newMoment.format('YYYY-MM-DD'), newMoment);
      },
    );
  };

  renderMonthNavigation = months => {
    if (months.length !== 12) {
      console.error(`A year have 12 month, your year has ${months.length}`);
    }
    const { month, year } = this.state;
    return (
      <Row>
        <Cell>
          <NavButton onClick={this.handleSubMonth}>
            <Left />
          </NavButton>
          <Month>
            {months[month]}, {year}
          </Month>
          <NavButton onClick={this.handleAddMonth}>
            <Right />
          </NavButton>
        </Cell>
      </Row>
    );
  };

  renderTooltip = (data, day) => {
    const { notificationColor } = this.props;
    if (data && data.content) {
      const values = data.content[day.format('YYYY-MM-DD')];
      if (!_.isEmpty(values) && !_.isEmpty(values.options)) {
        let position = 'middle';
        switch (day.day()) {
          case 0:
          case 1:
            position = 'right';
            break;
          case 5:
          case 6:
            position = 'left';
            break;
          case 2:
          case 3:
          case 4:
          default:
            position = 'middle';
            break;
        }
        const { content, hide } = this.getFormatedData(
          values.options,
          data.labels,
          day,
          notificationColor,
        );
        return (
          <Tooltip hide={hide} position={position}>
            {content}
          </Tooltip>
        );
      }
    }

    return null;
  };

  renderDots = (data, day) => {
    const { notificationColor } = this.props;
    if (data && data.content) {
      const values = data.content[day.format('YYYY-MM-DD')];
      if (!_.isEmpty(values) && !_.isEmpty(values.options)) {
        let dots;
        if (notificationColor) {
          if (typeof notificationColor === 'string') {
            const show = Object.keys(values.options).some(key => {
              const value = values.options[key];
              return value.show || value.show === undefined;
            });
            dots = show ? (
              <Dot
                key={`dot_${notificationColor}_${day.date()}`}
                color={notificationColor}
              />
            ) : null;
          } else {
            dots = Object.keys(values.options).map(key => {
              const value = values.options[key];
              if (value.show || value.show === undefined) {
                return (
                  <Dot
                    key={`dot_${notificationColor[key]}_${day.date()}`}
                    color={notificationColor[key]}
                  />
                );
              }
              return null;
            });
          }
        } else {
          const show = Object.keys(values.options).some(key => {
            const value = values.options[key];
            return value.show || value.show === undefined;
          });
          dots = show ? <Dot key={`dot_${day.date()}`} /> : null;
        }

        const allDots = (
          <FloatingDots today={day.isSame(moment(), 'date')}>
            {dots}
          </FloatingDots>
        );

        return allDots;
      }
    }
    return null;
  };

  renderWeekDays = weekDays => {
    if (weekDays.length !== 7) {
      console.error(`A week have 7 days, your week has ${weekDays.length}`);
    }
    const days = weekDays.map(day => (
      <Cell key={day}>
        <WeekDay>{pad(day)}</WeekDay>
      </Cell>
    ));
    return <Row>{days}</Row>;
  };

  renderWeek = (weekRange, key) => {
    const { month, year } = this.state;
    const { data } = this.props;
    const days = weekRange.map(day => {
      const renderedTooltip = this.renderTooltip(data, day);
      const renderedDots = this.renderDots(data, day);
      const middleWeek = [0, 1];
      const dayData =
        data && data.content ? data.content[day.format('YYYY-MM-DD')] : null;
      const dayProps = {
        today: day.isSame(moment(), 'date'),
        disabled: !day.isSame(moment([year, month]), 'month'),
        showDot: !middleWeek.includes(day.day()),
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
          <Cell key={day.format('YYYY-MM-DD')}>
            <DayLink {...dayProps}>
              {pad(day.date())}
              {renderedTooltip}
              {renderedDots}
            </DayLink>
          </Cell>
        );
      }
      return (
        <Cell key={day.format('YYYY-MM-DD')}>
          <Day {...dayProps}>
            {pad(day.date())}
            {renderedTooltip}
            {renderedDots}
          </Day>
        </Cell>
      );
    });
    return <Row key={key}>{days}</Row>;
  };

  renderMonth = (...args) => {
    const { month } = this.state;
    const calendar = this.getMonthCalendar(...args);
    return calendar.map((week, index) =>
      this.renderWeek(week, `${index}_${month}`),
    );
  };

  render() {
    const { month, year } = this.state;
    const { weekDays, firstDayOfWeek, months } = this.props;
    return (
      <CalendarBody>
        {this.renderMonthNavigation(months)}
        {this.renderWeekDays(weekDays)}
        {this.renderMonth(year, month, firstDayOfWeek)}
      </CalendarBody>
    );
  }
}

MonthCalendar.propTypes = {
  weekDays: PropTypes.arrayOf(PropTypes.string),
  months: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.number,
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
  data: PropTypes.shape({
    labels: PropTypes.objectOf(PropTypes.string),
    content: PropTypes.objectOf(PropTypes.any),
  }),
  formatTooltip: PropTypes.func,
  onMonthChange: PropTypes.func,
};

MonthCalendar.defaultProps = {
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
  date: null,
  notificationColor: null,
  data: null,
  formatTooltip: defaultFormatTooltip,
  onMonthChange: () => {},
};

export default MonthCalendar;
