import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { TimeLabelComponent, TimeTickComponent } from '../TimeComponents';

describe('Test for TimeLabelComponent', () => {
  configure({ adapter: new Adapter() });

  const props = {
    config: [{
      today: false,
    }],
    index: 0,
    lineSize: 100,
  };

  const theme = {
    barChart: {
      timeComponents: {
        label: '#aaa',
        line: '#bbb',
        markedDay: '#ccc',
        rect: '#ddd',
      },
    },
  };

  let clock;
  beforeEach(() => {
    const now = new Date('1234-01-01');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    props.theme = undefined;
    clock.restore();
  });

  it('should render correctly not today', () => {
    const wrapper = shallow(<TimeLabelComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly not today with theme', () => {
    props.theme = theme;
    const wrapper = shallow(<TimeLabelComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly today', () => {
    props.config[0].today = true;
    const wrapper = shallow(<TimeLabelComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly today with theme', () => {
    props.config[0].today = true;
    props.theme = theme;
    const wrapper = shallow(<TimeLabelComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test for TimeTickComponent', () => {
  configure({ adapter: new Adapter() });
  const props = {
    config: [{
      showTick: true,
    }],
    index: 0,
  };
  it('should render correctly with tick', () => {
    const wrapper = shallow(<TimeTickComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly withou tick', () => {
    props.config[0].showTick = false;
    const wrapper = shallow(<TimeTickComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
