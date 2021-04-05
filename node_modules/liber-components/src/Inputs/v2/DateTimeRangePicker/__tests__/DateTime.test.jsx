import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import MonthlyCalendar from '../../../../Calendar/v2/MonthCalendar';
import { Clock } from '../../TimePicker';
import DateTime from '../DateTime';

describe('Test for DateTimePicker', () => {
  let props;
  let clock;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    const now = new Date('2019-06-07');
    clock = sinon.useFakeTimers(now.getTime());
    props = {
      month: moment(),
      time: '12:00:00',
      onNavigate: sinon.spy(),
      onCalendarClick: sinon.spy(),
      onClockClick: sinon.spy(),
    };
  });
  afterEach(() => {
    clock.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<DateTime />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<DateTime {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onNavigate on calendar navigate', () => {
    const wrapper = shallow(<DateTime {...props} />);
    const calendar = wrapper.find(MonthlyCalendar);
    calendar.simulate('navigate', 'date');
    expect(props.onNavigate.calledWith('date')).toBeTruthy();
  });
  it('should call onCalendarClick on calendar click', () => {
    const wrapper = shallow(<DateTime {...props} />);
    const calendar = wrapper.find(MonthlyCalendar);
    calendar.simulate('click', 'date');
    expect(props.onCalendarClick.calledWith('date')).toBeTruthy();
  });
  it('should call onClockClick on clock click', () => {
    const wrapper = shallow(<DateTime {...props} />);
    const $clock = wrapper.find(Clock);
    $clock.simulate('click', 'time');
    expect(props.onClockClick.calledWith('time')).toBeTruthy();
  });
});
