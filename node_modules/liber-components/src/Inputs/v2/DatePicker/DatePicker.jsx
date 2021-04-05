import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Container, Field, Icon, CalendarContainer, Close,
} from './DatePicker.styles';

import { SimpleDropDown } from '../../../DropDown';
import MonthlyCalendar, { Unit } from '../../../Calendar/v2/MonthCalendar';
import { ClickOutside } from '../../../Util';

class DatePicker extends Component {
  state = {
    open: false,
    clear: false,
    date: '',
    calendarDate: null,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.date) {
      return {
        date: moment(props.date, 'DD/MM/YYYY').format('DD/MM/YYYY'),
      };
    }
    return state;
  }

  handleFocus = () => {
    this.setState({ open: true });
  }

  handleOutsideClick = () => {
    this.setState({ open: false });
  }

  onChangeCallback = () => {
    const { onChange } = this.props;
    const { date } = this.state;
    const mDate = moment(date, 'DD/MM/YYYY');
    onChange(date, mDate.isValid() ? mDate : null);
  }

  handleChange = (date) => {
    const calendarDate = this.calendarDate(date);
    this.setState({
      date,
      calendarDate,
    }, this.onChangeCallback);
  }

  handleClick = (calendarDate) => {
    const { closeOnSelect } = this.props;
    const date = calendarDate.format('DD/MM/YYYY');
    this.setState(
      state => ({
        date,
        calendarDate,
        open: closeOnSelect ? false : state.open,
      }),
      this.onChangeCallback,
    );
  }

  handleNavigate = (calendarDate) => {
    this.setState({ calendarDate });
  }

  calendarDate = (date) => {
    const mDate = moment(date, 'DD/MM/YYYY').startOf('day');
    if (mDate.isValid()) {
      return mDate;
    }
    return undefined;
  }

  renderDay = (day) => {
    const { date } = this.state;
    const mDate = moment(date, 'DD/MM/YYYY').startOf('day');
    const type = day.startOf('day').isSame(mDate) && 'checked';
    return (
      <Unit type={type}>{day.date()}</Unit>
    );
  }

  handleOnMouseEnter = () => {
    const { date } = this.state;
    if (date.trim() !== '') { this.setState({ clear: true }); }
  }

  handleOnMouseLeave = () => {
    const { date } = this.state;
    if (date.trim() !== '') this.setState({ clear: false });
  }

  clearInput = () => {
    this.setState({
      date: '',
      calendarDate: null,
      clear: false,
    });
  }

  render() {
    const {
      date, calendarDate, open, clear,
    } = this.state;
    const {
      onChange, closeOnSelect, date: propsDate,
      weekLabels, monthsLabels, firstDayOfWeek,
      minDate, ...props
    } = this.props;
    return (
      <ClickOutside onOutsideClick={this.handleOutsideClick}>
        <Container>
          <SimpleDropDown
            open={open}
            customButton={(
              <Field
                width="340px"
                {...props}
                value={date}
                version="2"
                onChange={this.handleChange}
                mask="99/99/9999"
                maskChar={null}
                onFocus={this.handleFocus}
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseLeave}
              />
          )}
          >
            <CalendarContainer>
              <MonthlyCalendar
                version="2"
                date={calendarDate}
                dayRenderer={this.renderDay}
                onClick={this.handleClick}
                onNavigate={this.handleNavigate}
                weekLabels={weekLabels}
                monthsLabels={monthsLabels}
                firstDayOfWeek={firstDayOfWeek}
                minDate={minDate}
              />
            </CalendarContainer>
          </SimpleDropDown>
          <Icon hide={clear} />
          <Close // eslint-disable-line
            show={clear}
            onMouseEnter={this.handleOnMouseEnter}
            onClick={this.clearInput}
          />
        </Container>
      </ClickOutside>
    );
  }
}


DatePicker.propTypes = {
  label: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  weekLabels: PropTypes.arrayOf(PropTypes.string),
  monthsLabels: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.oneOf([0, 1]),
  // eslint-disable-next-line
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  label: '',
  closeOnSelect: false,
  date: null,
  firstDayOfWeek: undefined,
  weekLabels: undefined,
  monthsLabels: undefined,
  minDate: null,
  onChange: () => {},
};

export default DatePicker;
