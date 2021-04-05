import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import DatePicker from '../DatePicker';
import { Field } from '../DatePicker.styles';
import { SimpleDropDown } from '../../../../DropDown';
import { ClickOutside } from '../../../../Util';
import MonthlyCalendar from '../../../../Calendar/v2/MonthCalendar';


describe('Test for DatePicker', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      label: 'Data',
      closeOnSelect: false,
      onChange: sinon.spy(),
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<DatePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open on Input Focus', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('focus');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should close on Click Outsidde', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    const co = wrapper.find(ClickOutside);
    wrapper.setState({ open: true });
    co.simulate('outsideClick');
    expect(wrapper.state('open')).toBeFalsy();
  });
  it('should change selected date and calendarDate on field change with valid date', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '15/05/1987');
    expect(wrapper.state('date')).toEqual('15/05/1987');
    expect(wrapper.state('calendarDate')).toBeDefined();
    expect(props.onChange.calledWith('15/05/1987', wrapper.state('calendarDate'))).toBeTruthy();
  });
  it('should change selected date and calendarDate on field change with invalid date', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '15/15/1987');
    expect(wrapper.state('date')).toEqual('15/15/1987');
    expect(wrapper.state('calendarDate')).not.toBeDefined();
    expect(props.onChange.calledWith('15/15/1987')).toBeTruthy();
  });
  it('should change selected date and calendarDate on calendar date click', () => {
    const wrapper = shallow(<DatePicker {...props} />);
    const calendar = wrapper.find(MonthlyCalendar);
    const date = moment('15/05/1987', 'DD/MM/YYYY');
    calendar.simulate('click', date);
    expect(wrapper.state('date')).toEqual('15/05/1987');
    expect(wrapper.state('calendarDate')).toEqual(date);
    expect(props.onChange.calledWith('15/05/1987', date)).toBeTruthy();
  });
});
