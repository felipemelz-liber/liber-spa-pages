import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment-timezone';
import AreaChart from '../AreaChart';

describe('Test for AreaChart', () => {
  configure({ adapter: new Adapter() });
  moment.tz.setDefault('UTC');

  let props;
  let clock;
  beforeEach(() => {
    const now = moment('1990-01-15').toDate();
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  const timeProps = {
    data: [
      { x: moment('1990-01-10'), y: 10 },
      { x: moment('1990-02-10'), y: 40 },
    ],
    xDomain: {
      scale: 'time',
      timeSeparator: 'month',
      past: false,
      offset: 4,
      skip: 0,
      padding: 15,
    },
  };
  const linearProps = {
    data: [{ x: 'Abelhas', y: 30 },
      { x: 'Formigas', y: 10 }],
    xDomain: {
      scale: 'linear',
      offset: 4,
      skip: 0,
      padding: 15,
    },
  };
  beforeEach(() => {
    props = {
      height: 300,
      width: 300,
      padding: 30,
      barColor: '#000',
      onClick: sinon.spy(),
    };
  });
  it('should render correctly with default props', () => {
    const wrapper = shallow(<AreaChart />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to time', () => {
    props = Object.assign(props, timeProps);
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to time', () => {
    props = Object.assign(props, timeProps);
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to time, with past marker', () => {
    props = Object.assign(props, timeProps);
    props.xDomain.past = true;
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to time, with offset=2', () => {
    props = Object.assign(props, timeProps);
    props.xDomain.offset = 2;
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to time, with skip=2', () => {
    props = Object.assign(props, timeProps);
    props.xDomain.skip = 2;
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to linear', () => {
    props = Object.assign(props, linearProps);
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to linear, with offset=2', () => {
    props = Object.assign(props, linearProps);
    props.xDomain.offset = 2;
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with xDomain set to linear, with skip=2', () => {
    props = Object.assign(props, linearProps);
    props.xDomain.skip = 2;
    const wrapper = shallow(<AreaChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
