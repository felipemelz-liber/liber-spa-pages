import React, { PureComponent as Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Field, Icon, Close,
} from './TimePicker.styles';
import Clock from './Clock';

import { SimpleDropDown } from '../../../DropDown';
import { ClickOutside } from '../../../Util';
import { PsGlobalStyle } from '../../../Assets';

const breakTime = (time) => {
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

class TimePicker extends Component {
  state = {
    open: false,
    clear: false,
    hour: '',
    min: '',
    sec: '',
    time: '',
  }

  static getDerivedStateFromProps(props, state) {
    if (props.time) {
      return {
        ...breakTime(props.time),
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
    const {
      time, hour, min, sec,
    } = this.state;
    onChange(time, hour, min, sec);
  }

  handleClick = (hour, min, sec, time) => {
    this.setState({
      time, hour, min, sec,
    }, this.onChangeCallback);
  }

  handleChange = (time) => {
    this.setState({
      ...breakTime(time),
    }, this.onChangeCallback);
  }

  handleOnMouseEnter = () => {
    const { time } = this.state;
    if (time.trim() !== '') { this.setState({ clear: true }); }
  }

  handleOnMouseLeave = () => {
    const { time } = this.state;
    if (time.trim() !== '') this.setState({ clear: false });
  }

  clearInput = () => {
    this.setState({
      hour: '',
      min: '',
      sec: '',
      time: '',
      clear: false,
    });
  }

  render() {
    const {
      time, open, hour, min, sec, clear,
    } = this.state;
    const {
      onChange, ...props
    } = this.props;
    return (
      <Fragment>
        <PsGlobalStyle />
        <ClickOutside onOutsideClick={this.handleOutsideClick}>
          <Container>
            <SimpleDropDown
              open={open}
              customButton={(
                <Field
                  width="340px"
                  {...props}
                  value={time}
                  version="2"
                  onChange={this.handleChange}
                  mask="99:99:99"
                  maskChar={null}
                  onFocus={this.handleFocus}
                  onMouseEnter={this.handleOnMouseEnter}
                  onMouseLeave={this.handleOnMouseLeave}
                />
          )}
            >
              <Clock onClick={this.handleClick} hour={hour} min={min} sec={sec} />
            </SimpleDropDown>
            <Icon hide={clear} />
          <Close // eslint-disable-line
            show={clear}
            onMouseEnter={this.handleOnMouseEnter}
            onClick={this.clearInput}
          />
          </Container>
        </ClickOutside>
      </Fragment>
    );
  }
}


TimePicker.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string,
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  label: '',
  time: null,

  onChange: () => {},
};

export default TimePicker;
