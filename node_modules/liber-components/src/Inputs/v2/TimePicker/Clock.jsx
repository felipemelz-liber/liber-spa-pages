import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import { pad } from '../../../Util';
import { TimeContainer, Col, Unit } from './TimePicker.styles';


const hours = [...Array(24)].map(Number.call, Number);

const minutes = [...Array(60)].map(Number.call, Number);

const seconds = minutes;


class Clock extends Component {
  units = {
    hour: {},
    min: {},
    sec: {},
  }

  col = {}

  componentDidUpdate() {
    const { hour: propHour, min: propMin, sec: propSec } = this.props;
    const hour = parseInt(propHour, 10);
    const min = parseInt(propMin, 10);
    const sec = parseInt(propSec, 10);
    if (this.units.hour[hour]) {
      this.col.hour.scrollTop = this.units.hour[hour].offsetTop;
    }
    if (this.units.min[min]) {
      this.col.min.scrollTop = this.units.min[min].offsetTop;
    }
    if (this.units.sec[sec]) {
      this.col.sec.scrollTop = this.units.sec[sec].offsetTop;
    }
  }

  clickCallback = (obj) => {
    const { onClick } = this.props;
    const { hour, min, sec } = obj;
    onClick(hour, min, sec, `${pad(hour)}:${pad(min)}:${pad(sec)}`);
  }

  handleClick = (key, value) => () => {
    const { hour, min, sec } = this.props;
    const obj = {
      hour: hour ? parseInt(hour, 10) : 0,
      min: min ? parseInt(min, 10) : 0,
      sec: sec ? parseInt(sec, 10) : 0,
      ...{ [key]: value },
    };
    this.clickCallback(obj);
  }

  addRef = (key, value) => (element) => {
    this.units[key][value] = element;
  }

  addColRef = col => (element) => {
    this.col[col] = element;
  }

  mapHours = selected => hour => (
    <Unit
      ref={this.addRef('hour', hour)}
      key={`hour_${hour}`}
      onClick={this.handleClick('hour', hour)}
      selected={hour === parseInt(selected, 10)}
    >{pad(hour)}
    </Unit>
  );

  mapMinutes = selected => min => (
    <Unit
      ref={this.addRef('min', min)}
      key={`min_${min}`}
      onClick={this.handleClick('min', min)}
      selected={min === parseInt(selected, 10)}
    >{pad(min)}
    </Unit>
  );

  mapSeconds = selected => sec => (
    <Unit
      key={`min_${sec}`}
      ref={this.addRef('sec', sec)}
      onClick={this.handleClick('sec', sec)}
      selected={sec === parseInt(selected, 10)}
    >{pad(sec)}
    </Unit>
  );


  render() {
    const {
      hour, min, sec,
    } = this.props;
    return (
      <TimeContainer>
        <div>
          <Col containerRef={this.addColRef('hour')}>{hours.map(this.mapHours(hour))}</Col>
        </div>
        <div>
          <Col containerRef={this.addColRef('min')}>{minutes.map(this.mapMinutes(min))}</Col>
        </div>
        <div>
          <Col containerRef={this.addColRef('sec')}>{seconds.map(this.mapSeconds(sec))}</Col>
        </div>
      </TimeContainer>
    );
  }
}

Clock.propTypes = {
  hour: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  min: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sec: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
};

Clock.defaultProps = {
  hour: null,
  min: null,
  sec: null,
  onClick: () => {},
};

export default Clock;
