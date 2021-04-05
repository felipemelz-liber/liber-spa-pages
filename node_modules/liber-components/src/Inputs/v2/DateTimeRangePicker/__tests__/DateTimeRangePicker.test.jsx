import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import ResizeObserver from 'resize-observer-polyfill';
import { SimpleDropDown } from '../../../../DropDown';
import DateTimeRangePicker from '../DateTimeRangePicker';
import DateTime from '../DateTime';
import {
  DateInput, TimeInput,
} from '../DateTimeRangePicker.styles';

describe('Test for DateTimeRangePicker', () => {
  let clock;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    const now = new Date('2019-06-07');
    global.ResizeObserver = ResizeObserver;
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<DateTimeRangePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const wrapper = shallow(<DateTimeRangePicker label="label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const wrapper = shallow(<DateTimeRangePicker label="label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label and openLabel', () => {
    const wrapper = shallow(<DateTimeRangePicker label="label" openLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with hintText', () => {
    const wrapper = shallow(<DateTimeRangePicker hintText="hint Text" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with placeholder', () => {
    const wrapper = shallow(<DateTimeRangePicker hintText="placeholder" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with errorMessage', () => {
    const wrapper = shallow(<DateTimeRangePicker errorMessage="Erro!" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with disabled=true', () => {
    const wrapper = shallow(<DateTimeRangePicker disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onChange on date selection', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DateTimeRangePicker onChange={callback} />);
    const picker = wrapper.find(DateTime);
    picker.at(0).simulate('calendarClick', moment('15/05/1987', 'DD/MM/YYYY'));
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(callback.firstCall.calledWith('15/05/1987', '15/05/1987', '', '', '')).toBeTruthy();
    picker.at(1).simulate('calendarClick', moment('17/05/1987', 'DD/MM/YYYY'));
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(
      callback.secondCall.calledWith('15/05/1987 a 17/05/1987', '15/05/1987', '', '17/05/1987', ''),
    ).toBeTruthy();
  });
  it('should not call onChange on time selection without date', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DateTimeRangePicker onChange={callback} />);
    const picker = wrapper.find(DateTime);
    picker.at(0).simulate('clockClick', 12, 0, 0, '12:00:00');
    expect(wrapper.state('startTime')).toEqual('');
    expect(callback.called).toBeFalsy();
    picker.at(1).simulate('clockClick', 12, 0, 0, '12:00:00');
    expect(wrapper.state('endTime')).toEqual('');
    expect(callback.called).toBeFalsy();
  });
  it('should call onChange on time selection', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DateTimeRangePicker onChange={callback} />);
    wrapper.setState({
      startDate: '15/05/1987',
      endDate: '17/05/1987',
    });
    const picker = wrapper.find(DateTime);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    picker.at(0).simulate('clockClick', 12, 0, 0, '12:00:00');
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(
      callback.firstCall.calledWith('15/05/1987 12:00:00 a 17/05/1987', '15/05/1987', '12:00:00', '17/05/1987', ''),
    ).toBeTruthy();
    picker.at(1).simulate('clockClick', 12, 0, 0, '11:00:00');
    expect(wrapper.state('endTime')).toEqual('11:00:00');
    expect(
      callback.secondCall.calledWith(
        '15/05/1987 12:00:00 a 17/05/1987 11:00:00', '15/05/1987', '12:00:00', '17/05/1987', '11:00:00',
      ),
    ).toBeTruthy();
  });
  it('should call onChange on date and time selection in order', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DateTimeRangePicker onChange={callback} />);

    let picker = wrapper.find(DateTime);

    picker.at(0).simulate('calendarClick', moment('15/05/1987', 'DD/MM/YYYY'));
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(callback.firstCall.calledWith('15/05/1987', '15/05/1987', '', '', '')).toBeTruthy();


    picker = wrapper.find(DateTime);

    picker.at(0).simulate('clockClick', 12, 0, 0, '12:00:00');
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(
      callback.secondCall.calledWith('15/05/1987 12:00:00', '15/05/1987', '12:00:00', '', ''),
    ).toBeTruthy();

    picker = wrapper.find(DateTime);

    picker.at(1).simulate('calendarClick', moment('17/05/1987', 'DD/MM/YYYY'));
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(
      callback.thirdCall.calledWith('15/05/1987 12:00:00 a 17/05/1987', '15/05/1987', '12:00:00', '17/05/1987', ''),
    ).toBeTruthy();

    picker = wrapper.find(DateTime);

    picker.at(1).simulate('clockClick', 12, 0, 0, '11:00:00');
    expect(wrapper.state('endTime')).toEqual('11:00:00');
    expect(
      callback.lastCall.calledWith(
        '15/05/1987 12:00:00 a 17/05/1987 11:00:00', '15/05/1987', '12:00:00', '17/05/1987', '11:00:00',
      ),
    ).toBeTruthy();
  });
  it('should call on Change on input change', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DateTimeRangePicker onChange={callback} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const startDateInput = dd.find(DateInput).at(0);

    startDateInput.simulate('change', { target: { value: '15/05/1987' } });
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(callback.firstCall.calledWith('15/05/1987', '15/05/1987', '', '', '')).toBeTruthy();


    const startTimeInput = dd.find(TimeInput).at(0);

    startTimeInput.simulate('change', { target: { value: '12:00:00' } });
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(
      callback.secondCall.calledWith('15/05/1987 12:00:00', '15/05/1987', '12:00:00', '', ''),
    ).toBeTruthy();

    const endDateInput = dd.find(DateInput).at(1);

    endDateInput.simulate('change', { target: { value: '17/05/1987' } });
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(
      callback.thirdCall.calledWith('15/05/1987 12:00:00 a 17/05/1987', '15/05/1987', '12:00:00', '17/05/1987', ''),
    ).toBeTruthy();

    const endTimeInput = dd.find(TimeInput).at(1);

    endTimeInput.simulate('change', { target: { value: '11:00:00' } });
    expect(wrapper.state('endTime')).toEqual('11:00:00');
    expect(
      callback.lastCall.calledWith(
        '15/05/1987 12:00:00 a 17/05/1987 11:00:00', '15/05/1987', '12:00:00', '17/05/1987', '11:00:00',
      ),
    ).toBeTruthy();
  });
  it('should set state when value="" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="" />);
    expect(wrapper.state('startDate')).toEqual('');
    expect(wrapper.state('endDate')).toEqual('');
    expect(wrapper.state('startTime')).toEqual('');
    expect(wrapper.state('endTime')).toEqual('');
  });
  it('should set state when value="15/05/1987" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="15/05/1987" />);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('startTime')).toEqual('');
    expect(wrapper.state('endDate')).toEqual('');
    expect(wrapper.state('endTime')).toEqual('');
  });
  it('should set state when value="15/05/1987 12:00:00" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="15/05/1987 12:00:00" />);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(wrapper.state('endDate')).toEqual('');
    expect(wrapper.state('endTime')).toEqual('');
  });
  it('should set state when value="15/05/1987 a 17/05/1987" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="15/05/1987 a 17/05/1987" />);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('startTime')).toEqual('');
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(wrapper.state('endTime')).toEqual('');
  });
  it('should set state when value="15/05/1987 12:00:00 a 17/05/1987" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="15/05/1987 12:00:00 a 17/05/1987" />);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(wrapper.state('endTime')).toEqual('');
  });
  it('should set state when value="15/05/1987 12:00:00 a 17/05/1987 11:00:00" ', () => {
    const wrapper = shallow(<DateTimeRangePicker value="15/05/1987 12:00:00 a 17/05/1987 11:00:00" />);
    expect(wrapper.state('startDate')).toEqual('15/05/1987');
    expect(wrapper.state('startTime')).toEqual('12:00:00');
    expect(wrapper.state('endDate')).toEqual('17/05/1987');
    expect(wrapper.state('endTime')).toEqual('11:00:00');
  });
});
