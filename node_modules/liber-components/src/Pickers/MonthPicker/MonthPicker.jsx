import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import {
  Month, MonthContainer, YearLabel, YearContainer, Cell,
} from './styles';

const moment = extendMoment(Moment);

class MonthPicker extends Component {
  state = {
    year: null,
    month: null,
  }

  static getDerivatedStateFromProps(props) {
    return {
      year: props.year,
      month: props.month,
    };
  }

  isDisabled = (year, month) => {
    const { startDate } = this.props;
    const start = moment(startDate);
    const today = moment().startOf('day');
    if (
      (today.year() === year && today.month() < month)
      || (start.year() === year && start.month() > month)
    ) {
      return true;
    }
    return false;
  }

  handleMonthClick = (year, month) => {
    const { onSelect, months } = this.props;
    const date = { year, month };
    this.setState((state) => {
      if (month === state.month && year === state.year) {
        return { year: null, month: null };
      }
      return date;
    }, onSelect(date, months[month], moment(date)));
  }

  renderMonths = (year) => {
    const { months } = this.props;
    const { year: sYear, month: sMonth } = this.state;
    return months.map((month, index) => {
      const disabled = this.isDisabled(year, index);
      return (
        <Cell key={`${year}_${month}`}>
          <Month
            onClick={
            disabled
              ? null
              : () => this.handleMonthClick(year, index)
            }
            selected={year === sYear && index === sMonth}
            disabled={disabled}
          >
            {month}
          </Month>
        </Cell>
      );
    });
  }

  renderYears = (number, startDate, endDate) => {
    const end = moment(endDate).startOf('year');
    const start = startDate ? moment(startDate).startOf('year') : moment(end).subtract(number - 1, 'years');
    const yearRange = moment.range(
      start, end,
    );
    const years = Array.from(yearRange.by('years'));
    return years.reverse().slice(0, number).map(year => (
      <YearContainer key={year.year()}>
        <YearLabel>
          <Cell>{year.year()}</Cell>
          <span />
        </YearLabel>
        <MonthContainer>
          {this.renderMonths(year.year())}
        </MonthContainer>
      </YearContainer>
    ));
  }

  render() {
    const {
      numberOfyears, startDate, endDate,
    } = this.props;
    return (
      <Fragment>
        {this.renderYears(numberOfyears, startDate, endDate || moment().startOf('day').format('YYYY-MM-DD'))}
      </Fragment>
    );
  }
}

MonthPicker.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  numberOfyears: PropTypes.number,
  months: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
};

MonthPicker.defaultProps = {
  startDate: null,
  endDate: null,
  numberOfyears: 2,
  months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  onSelect: () => {},
  month: null,
  year: null,
};


export default MonthPicker;
