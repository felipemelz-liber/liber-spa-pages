import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Container, Field, Icon, CalendarContainer, PickerBody, ActionFooter, PickerSlider,
  ClockContainer, InputSeparator, Close,
} from './DateTimePicker.styles';
import { SimpleDropDown } from '../../../DropDown';
import MonthlyCalendar, { Unit } from '../../../Calendar/v2/MonthCalendar';
import { ClickOutside } from '../../../Util';
import { Button } from '../../../Buttons';
import { Clock } from '../TimePicker';

const parseValue = (value) => {
  if (value !== '') {
    const [date, time] = value.split(' ás ');

    return {
      input: `${date}          ${time}`,
      date: moment(date, 'DD/MM/YYYY'),
      time,
    };
  }
  return {
    input: '',
    date: null,
    time: '',
  };
};

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clear: false,
      showing: 'calendar',
      calendarDate: null,
      hour: '',
      min: '',
      sec: '',
      ...parseValue(props.value),
    };
    console.log(this.state.calendarDate);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.input) {
      return {
        ...parseValue(props.value),
      };
    }
    return state;
  }

  componentDidMount() {
    this.setClockHeight();
  }

  setClockHeight = () => {
    if (this.container) {
      this.clockSize = this.container.offsetHeight;
    }
  }

  onChangeCallback = () => {
    const { onChange } = this.props;
    const {
      date, time, hour, min, sec,
    } = this.state;
    const input = `${date.format('DD/MM/YYYY')} ás ${time}`;
    date.hour(hour).minutes(min).seconds(sec);
    onChange(input, date.format('DD/MM/YYYY'), time, date);
  }

  breakTime = (time) => {
    let [
      hour = '',
      min = '',
      sec = '',
    ] = time.split(':');
    hour = parseInt(hour, 10) > 23 ? '23' : hour;
    min = parseInt(min, 10) > 59 ? '59' : min;
    sec = parseInt(sec, 10) > 59 ? '59' : sec;

    return {
      time: time ? `${hour}:${min}:${sec}` : '', hour, min, sec,
    };
  };

  handleChange = (input) => {
    const [calendarDate = '', clockTime = ''] = input.split('          ');
    const date = moment(calendarDate, 'DD/MM/YYYY');
    const {
      time, hour, min, sec,
    } = this.breakTime(clockTime);
    this.setState({
      input: input.trim() === '' ? input.trim() : `${calendarDate}          ${time}`,
      date,
      time,
      calendarDate: date.isValid() ? moment(date).startOf('month') : undefined,
      hour: parseInt(hour, 10) > 23 ? '23' : hour,
      min: parseInt(min, 10) > 59 ? '59' : min,
      sec: parseInt(sec, 10) > 59 ? '59' : sec,
      showing: input.trim().length >= 10 ? 'clock' : 'calendar',
    }, this.onChangeCallback);
  }

  handleFocus = () => {
    this.setState({ open: true });
  }

  handleOutsideClick = () => {
    this.setState({ open: false });
  }

  changeClockSize = (force = true) => {
    this.setClockHeight();
    if (force) this.forceUpdate();
  }

  changeToClock = () => {
    this.changeClockSize(false);
    this.setState({ showing: 'clock' });
  }

  changeToCalendar = () => {
    this.setState({ showing: 'calendar' });
  }

  handleClickClock = (hour, min, sec, time) => {
    this.setState((state) => {
      const date = state.date || moment();
      return {
        input: `${date.format('DD/MM/YYYY')}          ${time}`,
        time,
        date,
        hour,
        min,
        sec,
      };
    });
    this.setState({
      time,
    }, this.onChangeCallback);
  }

  handleClickCalendar = (calendarDate) => {
    const { time } = this.state;

    this.setState({
      input: `${calendarDate.format('DD/MM/YYYY')}     ${time}`,
      date: calendarDate,
      calendarDate: moment(calendarDate).startOf('month'),
      showing: 'clock',
    },
    this.onChangeCallback);
  }

  handleNavigate = (calendarDate) => {
    this.setState({ calendarDate }, this.changeClockSize);
  }

  containerRef = (element) => { this.container = element; };

  renderDay = (day) => {
    const { date } = this.state;
    const mDate = moment(date, 'DD/MM/YYYY').startOf('day');
    const type = day.startOf('day').isSame(mDate) && 'checked';
    return (
      <Unit type={type}>{day.date()}</Unit>
    );
  }

  handleOnMouseEnter = () => {
    const { input } = this.state;
    if (input !== '') { this.setState({ clear: true }); }
  }

  handleOnMouseLeave = () => {
    const { input } = this.state;
    if (input !== '') this.setState({ clear: false });
  }

  clearInput = () => {
    this.setState({
      input: '',
      date: null,
      time: '',
      hour: '',
      min: '',
      sec: '',
      clear: false,
      showing: 'calendar',
      calendarDate: moment(),
    });
  }

  render() {
    const {
      open, showing, calendarDate, input,
      hour, min, sec, clear,
    } = this.state;
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
    const separator = input.trim().length >= 10;
    const {
      onChange, minDate,
      weekLabels, monthsLabels, firstDayOfWeek,
      ...props
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
                value={input}
                version="2"
                onChange={this.handleChange}
                mask="99/99/9999          99:99:99"
                maskChar={null}
                onFocus={this.handleFocus}
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseLeave}
              />
          )}
          >
            <PickerBody>
              <PickerSlider show={showing}>
                <CalendarContainer ref={this.containerRef}>
                  <MonthlyCalendar
                    version="2"
                    date={calendarDate}
                    dayRenderer={this.renderDay}
                    onClick={this.handleClickCalendar}
                    onNavigate={this.handleNavigate}
                    weekLabels={weekLabels}
                    monthsLabels={monthsLabels}
                    firstDayOfWeek={firstDayOfWeek}
                    minDate={minDate}
                  />
                </CalendarContainer>
                <ClockContainer size={this.clockSize}>
                  <Clock hour={hour} min={min} sec={sec} onClick={this.handleClickClock} />
                </ClockContainer>
              </PickerSlider>
              <ActionFooter>
                <Button version={2} {...actionProps[showing]} />
              </ActionFooter>
            </PickerBody>
          </SimpleDropDown>
          <Icon hide={clear} />
          <Close // eslint-disable-line
            show={clear}
            onMouseEnter={this.handleOnMouseEnter}
            onClick={this.clearInput}
          />
          {separator && <InputSeparator>ás</InputSeparator>}
        </Container>
      </ClickOutside>
    );
  }
}

DateTimePicker.propTypes = {
  label: PropTypes.string,
  weekLabels: PropTypes.arrayOf(PropTypes.string),
  monthsLabels: PropTypes.arrayOf(PropTypes.string),
  firstDayOfWeek: PropTypes.oneOf([0, 1]),
  value: PropTypes.string,
  // eslint-disable-next-line
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  onChange: PropTypes.func,
};

DateTimePicker.defaultProps = {
  label: '',
  minDate: null,
  value: '',
  firstDayOfWeek: undefined,
  weekLabels: undefined,
  monthsLabels: undefined,
  onChange: () => {},
};

export default DateTimePicker;
