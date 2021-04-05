import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import moment from 'moment';
import sinon from 'sinon';
import MonthCalendar from '../MonthCalendar';
import { Prev, Next, Unit } from '../MonthCalendar.styles';

describe('Testing Version 2.0 MonthCalendar Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  let clock;

  beforeEach(() => {
    const now = new Date('1987-05-15');
    clock = sinon.useFakeTimers(now.getTime());
    props = {
      onNavigate: sinon.spy(),
      onClick: sinon.spy(),
    };
  });

  afterEach(() => {
    clock.restore();
  });

  it('renders correctly without props', () => {
    const wrapper = shallow(<MonthCalendar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with firstDayOfWeek = 1 (Week starts on Monday)', () => {
    props.firstDayOfWeek = 1;
    const wrapper = shallow(<MonthCalendar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with custom weekLabels', () => {
    props.weekLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const wrapper = shallow(<MonthCalendar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with custom monthsLabels', () => {
    props.monthsLabels = [
      'Jan', 'Fev', 'Mar', 'Ab', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
    ];
    const wrapper = shallow(<MonthCalendar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with a default date is set', () => {
    props.defaultDate = moment('2019-05-15');
    const wrapper = shallow(<MonthCalendar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders correctly with custom day render', () => {
    props.dayRenderer = day => (<div>Day: {day.date()}</div>);
    const wrapper = shallow(<MonthCalendar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change state on date change', () => {
    const wrapper = shallow(<MonthCalendar {...props} />);
    wrapper.setProps({ date: moment().add(1, 'month') });
    expect(wrapper.state('date').format('DD/MM/YYYY')).toEqual('01/06/1987');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call navigate on click prev button', () => {
    const wrapper = shallow(<MonthCalendar {...props} />);
    const button = wrapper.find(Prev);
    button.simulate('click');
    expect(wrapper.state('date').format('DD/MM/YYYY')).toEqual('01/04/1987');
    expect(props.onNavigate.called).toBeTruthy();
  });
  it('should call navigate on click next button', () => {
    const wrapper = shallow(<MonthCalendar {...props} />);
    const button = wrapper.find(Next);
    button.simulate('click');
    expect(wrapper.state('date').format('DD/MM/YYYY')).toEqual('01/06/1987');
    expect(props.onNavigate.called).toBeTruthy();
  });
  it('should call onClick on Day click', () => {
    const wrapper = shallow(<MonthCalendar {...props} />);
    const button = wrapper.find(Unit);
    button.at(10).simulate('click');
    expect(props.onClick.called).toBeTruthy();
  });
});
