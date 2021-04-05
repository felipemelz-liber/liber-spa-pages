import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment-timezone';
import MonthPicker from '../MonthPicker';
import {
  Month,
} from '../styles';

describe('Testing MonthPicker Component', () => {
  moment.tz.setDefault('UTC');
  configure({ adapter: new Adapter() });
  let clock;

  beforeEach(() => {
    const now = moment('1987-05-15').toDate();
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<MonthPicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with startDate defined', () => {
    const props = {
      startDate: '1985-05-15',
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with endDate defined', () => {
    const props = {
      startDate: '1985-05-15',
      endDate: '1986-05-15',
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with numberOfYear', () => {
    const props = {
      numberOfyears: 4,
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with defined values', () => {
    const props = {
      month: 0,
      year: 1987,
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with different Month labels', () => {
    const props = {
      months: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'agu',
        'sep',
        'oct',
        'nov',
        'dec',
      ],
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onSelect when selecting a month', () => {
    const props = {
      onSelect: sinon.spy(),
    };
    const wrapper = shallow(<MonthPicker {...props} />);
    const month = wrapper.find(Month);
    month.at(5).simulate('click');
    expect(props.onSelect.calledWith(
      { year: 1987, month: 5 },
      'Jun',
      moment({ year: 1987, month: 5 }),
    ));
  });
});
