import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SimpleDropDown } from '../../../DropDown';
import { Unit } from '../../../Calendar/v2/MonthCalendar';
import {
  Container, InputShell, DateInput, TimeInput,
  InputSeparator, Icon, Close, Label, Row,
  Range, Hint, Error,
} from './DateTimeRangePicker.styles';
import { ClickOutside } from '../../../Util';
import DateTime from './DateTime';


const breakValue = (value) => {
  const [start = '', end = ''] = value.split(' a ');
  const [startDate = '', startTime = ''] = start.split(' ');
  const [endDate = '', endTime = ''] = end.split(' ');
  return {
    startDate,
    endDate,
    startTime,
    endTime,
  };
};

class DateTimeRangePicker extends Component {
  constructor(props) {
    super(props);
    this.clean = {
      clear: false,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
    };
    const start = props.value ? breakValue(props.value) : this.clean;
    this.state = {
      ...start,
      open: false,
      focused: false,

      month: moment().startOf('month'),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value) {
      return {
        ...breakValue(props.value),
      };
    }
    return state;
  }

  componentDidMount() {
    new ResizeObserver(this.resizeRow).observe(this.calendarStart);
    new ResizeObserver(this.resizeRow).observe(this.calendarEnd);
  }

  resizeRow = () => {
    this.size = Math.max(this.calendarStart.offsetHeight, this.calendarEnd.offsetHeight);
    this.forceUpdate();
  }

  mountCallbackValue = (startDate, endDate, startTime, endTime) => {
    const start = `${startDate} ${startTime}`.trim();
    const end = `${endDate} ${endTime}`.trim();
    if (end !== '') {
      return `${start} a ${end}`;
    }
    return start;
  }

  handleCallback = () => {
    const {
      startDate,
      endDate,
      startTime,
      endTime,
    } = this.state;
    const { onChange } = this.props;

    const value = this.mountCallbackValue(startDate, endDate, startTime, endTime);
    onChange(value, startDate, startTime, endDate, endTime);
  }

  handleChange = current => (event) => {
    const { value } = event.target;
    this.setState({
      [current]: value,
    }, this.handleCallback);
  }

  handleClockClick = (current, date) => (hour, min, sec, time) => {
    if (date.length === 10) {
      this.setState({
        [current]: time,
      }, this.handleCallback);
    }
  }

  setDate = date => (state) => {
    const { startDate, endDate } = state;
    const mStartDate = moment(startDate, 'DD/MM/YYYY').startOf('day');
    const mEndDate = moment(endDate, 'DD/MM/YYYY').startOf('day');
    if (date.startOf('day').isSame(mStartDate)) {
      return this.clean;
    }
    if (date.isBefore(mStartDate)) {
      return {
        startDate: date.format('DD/MM/YYYY'),
        endDate: startDate,
      };
    }
    if (date.isSame(mEndDate)) {
      return {
        endDate: '',
        endTime: '',
      };
    }
    if (startDate.length === 10) {
      return {
        endDate: date.format('DD/MM/YYYY'),
      };
    }
    return {
      startDate: date.format('DD/MM/YYYY'),
    };
  }

  handleCalendarClick = (date) => {
    this.setState(this.setDate(date), this.handleCallback);
  }

  handleInputFocusChange = (event) => {
    const { target, key } = event;
    const maxLength = parseInt(target.dataset.maxlength, 10);
    const myLength = target.value.length;

    if (myLength >= maxLength && target.selectionStart === maxLength) {
      let next = target.nextElementSibling;

      while (next !== null) {
        if (next.tagName.toLowerCase() === 'input') {
          next.focus();
          break;
        }
        next = next.nextElementSibling;
      }
    }
    if ((key === 'Backspace' && myLength === 0) || (key === 'ArrowLeft' && target.selectionStart === 0)) {
      let prev = target.previousElementSibling;

      while (prev !== null) {
        if (prev.tagName.toLowerCase() === 'input') {
          prev.focus();
          break;
        }
        prev = prev.previousElementSibling;
      }
    }
  }

  handleFocus = (event) => {
    const { target } = event;
    if (target.value === '') {
      let prev = target.previousElementSibling;
      if (prev !== null && prev.tagName.toLowerCase() !== 'input') {
        prev = prev.previousElementSibling;
      }
      if (prev !== null) {
        const max = parseInt(prev.dataset.maxlength, 10);
        if (prev.value.length < max) {
          prev.focus();
        }
      }
    }
    this.setState({ open: true, focused: true });
  }

  handleShellClick = () => {
    this.endTime.focus();
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleOutsideClick = () => {
    this.setState({ open: false });
  }

  handleOnMouseEnter = () => {
    const {
      startDate, startTime, endDate, endTime,
    } = this.state;
    const valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
    if (valid) {
      this.setState({ clear: true });
    }
  }

  handleOnMouseLeave = () => {
    const {
      startDate, startTime, endDate, endTime,
    } = this.state;
    const valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
    if (valid) {
      this.setState({ clear: false });
    }
  }

  handleNavigation = pos => (date) => {
    const opt = {
      start: moment(date).startOf('month'),
      end: moment(date).subtract(1, 'month').startOf('month'),
    };
    this.setState({
      month: opt[pos],
    });
  }

  clearInput = () => {
    this.start.changeToCalendar();
    this.end.changeToCalendar();
    this.setState(this.clean, this.handleCallback);
  }

  addRef = key => (element) => {
    this[key] = element;
  }

  getNavigations = month => ({
    start: moment(month),
    end: moment(month).add(1, 'month'),
  })

  getUnitType = (start, end, day, witch) => {
    const {
      month,
    } = this.state;
    const current = witch === 'start' ? month : moment(month).add(1, 'month');
    if ((
      witch === 'end'
        && day.isSame(end, 'week')
        && day.isBefore(end)
        && !day.isSame(current, 'month')
        && end.isSame(current, 'month')
    )
       || (
         witch === 'start'
          && day.isSame(end, 'week')
          && day.isAfter(end)
          && !day.isSame(current, 'month')
       )
    ) {
      return {
        type: 'past-range',
        start: false,
      };
    }
    if (day.isSame(start) || day.isSame(end)) {
      const isEmpty = day.isSame(current, 'month') || end.isValid() ? 'past-range' : 'past';
      return {
        type: day.isSame(current, 'month') ? 'checked' : isEmpty,
        start: day.isSame(start) && end.isValid(),
      };
    } if (day.isBetween(start, end)) {
      if (start.isSame(end, 'month') && !current.isSame(end, 'month')) {
        return { type: undefined, start: false };
      }
      return {
        type: day.isSame(current, 'month') ? 'range' : 'past-range',
        start: false,
      };
    }
    return { type: undefined, start: false };
  }

  renderDay = witch => (day) => {
    const { startDate, endDate } = this.state;
    const mStartDate = moment(startDate, 'DD/MM/YYYY').startOf('day');
    const mEndDate = moment(endDate, 'DD/MM/YYYY').startOf('day');
    const { type, start } = this.getUnitType(mStartDate, mEndDate, day.startOf('day'), witch);
    if (type) {
      return (
        <Range
          start={start}
          checked={type === 'checked'}
          empty={type === 'past'}
        >
          <Unit type={type}>
            {day.date()}
          </Unit>
        </Range>
      );
    }
    return (
      <Unit type={type}>{day.date()}</Unit>
    );
  }

  renderInputs = () => {
    const {
      startDate, startTime, endDate, endTime, focused,
    } = this.state;
    const { errorMessage, disabled } = this.props;
    const error = errorMessage !== '';
    const valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
    return (
      <InputShell
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        onClick={this.handleShellClick}
        error={error}
        disabled={disabled}
      >
        <DateInput
          value={startDate}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange('startDate')}
          onKeyUp={this.handleInputFocusChange}
          data-maxlength="10"
          inputRef={this.addRef('startDate')}
          disabled={disabled}
        />
        <TimeInput
          value={startTime}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange('startTime')}
          onKeyUp={this.handleInputFocusChange}
          data-maxlength="8"
          inputRef={this.addRef('startTime')}
          disabled={disabled}
          placeholder={(valid || focused) && startDate.length === 10 ? '00:00:00' : undefined}
        />
        <InputSeparator show={startDate.length === 10 && startTime.length === 8}>a</InputSeparator>
        <DateInput
          value={endDate}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange('endDate')}
          onKeyUp={this.handleInputFocusChange}
          data-maxlength="10"
          inputRef={this.addRef('endDate')}
          disabled={disabled}
        />
        <TimeInput
          value={endTime}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange('endTime')}
          onKeyUp={this.handleInputFocusChange}
          data-maxlength="8"
          inputRef={this.addRef('endTime')}
          disabled={disabled}
          placeholder={(valid || focused) && endDate === 10 ? '00:00:00' : undefined}
        />
      </InputShell>
    );
  }

  render() {
    const {
      open, clear, focused,
      startDate, startTime, endDate, endTime,
      month,
    } = this.state;
    const {
      label,
      hintText,
      placeholder,
      errorMessage,
      disabled,
      minDate,
      firstDayOfWeek,
      weekLabels,
      monthsLabels,
      openLabel,
    } = this.props;
    const DateTimeProps = {
      minDate,
      firstDayOfWeek,
      weekLabels,
      monthsLabels,
    };
    const {
      start,
      end,
    } = this.getNavigations(month);
    const valid = startDate !== '' || startTime !== '' || endDate !== '' || endTime !== '';
    const error = errorMessage !== '';
    return (
      <ClickOutside onOutsideClick={this.handleOutsideClick}>
        <Container>
          {
            label !== '' && (
              <Label
                focused={openLabel || focused}
                valid={valid}
                error={error}
                disabled={disabled}
              >
                {label}
              </Label>
            )
          }
          <Hint visible={(focused || !label) && !valid}>{placeholder || hintText}</Hint>
          { error && <Error visible={error}>{errorMessage}</Error> }
          <SimpleDropDown
            open={open}
            position="bottom-left"
            customButton={this.renderInputs()}
          >
            <Row size={this.size}>
              <DateTime
                ref={this.addRef('start')}
                calendarRef={this.addRef('calendarStart')}
                navigation={['prev']}
                month={start}
                time={startTime}
                onNavigate={this.handleNavigation('start')}
                onCalendarClick={this.handleCalendarClick}
                onClockClick={this.handleClockClick('startTime', startDate)}
                dayRenderer={this.renderDay('start')}
                {...DateTimeProps}
              />
              <DateTime
                ref={this.addRef('end')}
                calendarRef={this.addRef('calendarEnd')}
                navigation={['next']}
                month={end}
                time={endTime}
                onNavigate={this.handleNavigation('end')}
                onCalendarClick={this.handleCalendarClick}
                onClockClick={this.handleClockClick('endTime', endDate)}
                dayRenderer={this.renderDay('end')}
                {...DateTimeProps}
              />
            </Row>
          </SimpleDropDown>
          <Icon hide={clear} error={error} />
          <Close
            show={clear}
            onMouseEnter={this.handleOnMouseEnter}
            onClick={this.clearInput}
          />
        </Container>
      </ClickOutside>
    );
  }
}

DateTimeRangePicker.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  openLabel: PropTypes.bool,
  hintText: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  firstDayOfWeek: PropTypes.oneOf([0, 1]),
  weekLabels: PropTypes.arrayOf(PropTypes.string),
  monthsLabels: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

DateTimeRangePicker.defaultProps = {
  value: null,
  label: '',
  openLabel: false,
  hintText: null,
  placeholder: null,
  errorMessage: '',
  disabled: false,
  minDate: null,
  firstDayOfWeek: 0,
  weekLabels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthsLabels: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ],
  onChange: () => {},

};

export default DateTimeRangePicker;
