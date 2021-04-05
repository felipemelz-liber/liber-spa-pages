import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import DateTimePicker from '../DateTimePicker';
import { Field } from '../DateTimePicker.styles';
import { SimpleDropDown } from '../../../../DropDown';
import { ClickOutside } from '../../../../Util';
import MonthlyCalendar from '../../../../Calendar/v2/MonthCalendar';
import { Clock } from '../../TimePicker';


describe('Test for DateTimePicker', () => {
  let props;
  let clock;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    const now = new Date('2019-06-07');
    clock = sinon.useFakeTimers(now.getTime());
    props = {
      label: 'Data',
      onChange: sinon.spy(),
    };
  });
  afterEach(() => {
    clock.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<DateTimePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<DateTimePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open on Input Focus', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('focus');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should close on Click Outsidde', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const co = wrapper.find(ClickOutside);
    wrapper.setState({ open: true });
    co.simulate('outsideClick');
    expect(wrapper.state('open')).toBeFalsy();
  });
  it('should change date on input change', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '15/05/1987');
    const date = moment('15/05/1987', 'DD/MM/YYYY');
    expect(wrapper.state('date')).toEqual(date);
    expect(wrapper.state('calendarDate')).toBeDefined();
    expect(props.onChange.calledWith(
      '15/05/1987 ás ',
      '15/05/1987',
      '',
      date,
    )).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change time on input change', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '15/05/1987          12:00:00');
    const date = moment('15/05/1987', 'DD/MM/YYYY').hour(12);
    expect(wrapper.state('time')).toEqual('12:00:00');
    expect(wrapper.state('calendarDate')).toBeDefined();
    expect(props.onChange.calledWith(
      '15/05/1987 ás 12:00:00',
      '15/05/1987',
      '12:00:00',
      date,
    )).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change date on calendar Click', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const calendar = wrapper.find(MonthlyCalendar);
    const date = moment('15/05/1987', 'DD/MM/YYYY');
    calendar.simulate('click', date);
    expect(wrapper.state('date')).toEqual(date);
    expect(wrapper.state('calendarDate')).toBeDefined();
    expect(props.onChange.calledWith(
      '15/05/1987 ás ',
      '15/05/1987',
      '',
      date,
    )).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change time on Clock Click', () => {
    const wrapper = shallow(<DateTimePicker {...props} />);
    const $clock = wrapper.find(Clock);
    $clock.simulate('click', 12, 0, 0, '12:00:00');
    const date = moment().hour(12);
    expect(wrapper.state('date')).toEqual(date);
    expect(wrapper.state('calendarDate')).toBeDefined();
    expect(props.onChange.calledWith(
      '06/06/2019 ás 12:00:00',
      '06/06/2019',
      '12:00:00',
      date,
    )).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
