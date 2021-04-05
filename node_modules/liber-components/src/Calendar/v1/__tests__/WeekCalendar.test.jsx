import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import WeekCalendar from '../WeekCalendar';
import { NavButton } from '../styles';

describe('Test for WeekCalendar Component', () => {
  configure({ adapter: new Adapter() });
  const props = {
    onWeekChange: sinon.spy(),
    onDayClick: sinon.spy(),
  };
  let clock;
  beforeEach(() => {
    const now = new Date('1234-01-01');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<WeekCalendar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with weekdays', () => {
    const weekDays = ['s', 't', 'q', 'q', 's', 's', 'd'];
    const wrapper = shallow(<WeekCalendar weekDays={weekDays} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should throw an error when weekdays has the wrong length', () => {
    const error = sinon.stub(console, 'error');
    const wrapper = shallow(<WeekCalendar weekDays={[]} />);
    wrapper.setProps({ weekDays: new Array(1) });
    wrapper.setProps({ weekDays: new Array(8) });
    wrapper.setProps({ weekDays: new Array(5) });
    expect(error.calledWith('A week have 7 days, your week has 0'));
    expect(error.calledWith('A week have 7 days, your week has 1'));
    expect(error.calledWith('A week have 7 days, your week has 8'));
    expect(error.calledWith('A week have 7 days, your week has 5'));
    error.restore();
  });
  it('should render correctly with months', () => {
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const wrapper = shallow(<WeekCalendar months={months} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should throw an error when months has the wrong length', () => {
    const error = sinon.stub(console, 'error');
    const wrapper = shallow(<WeekCalendar months={[]} />);
    wrapper.setProps({ weekDays: new Array(1) });
    wrapper.setProps({ weekDays: new Array(8) });
    wrapper.setProps({ weekDays: new Array(13) });
    expect(error.calledWith('A year have 12 month, your year has 0'));
    expect(error.calledWith('A year have 12 month, your year has 1'));
    expect(error.calledWith('A year have 12 month, your year has 8'));
    expect(error.calledWith('A year have 12 month, your year has 13'));
    error.restore();
  });
  it('should render correctly when firstDayOfWeek is seted', () => {
    const wrapper = shallow(<WeekCalendar firstDayOfWeek={3} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when defaultDate is setted', () => {
    const wrapper = shallow(<WeekCalendar defaultDate="1234-12-01" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when date is setted', () => {
    const wrapper = shallow(<WeekCalendar />);
    const date = moment().format('YYYY-MM-DD');
    wrapper.setProps({ date });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly when data is setted', () => {
    const data = {};
    data[moment().format('YYYY-MM-DD')] = [
      { value: '1', label: 'mock1', show: true },
      { value: '2', label: 'mock2', show: true },
      { value: '3', label: 'mock3', show: false },
    ];
    const wrapper = shallow(<WeekCalendar data={data} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onWeekChange when click on navigation', () => {
    const wrapper = shallow(<WeekCalendar {...props} />);
    const nav = wrapper.find(NavButton);
    nav.at(0).simulate('click');
    nav.at(1).simulate('click');
    expect(props.onWeekChange.callCount).toBe(2);
  });
});
