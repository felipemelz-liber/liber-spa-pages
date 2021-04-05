import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment-timezone';
import PeriodPicker from '../PeriodPicker';
import MonthPicker from '../../MonthPicker';
import DropDown, { DropDownOption as Option } from '../../../DropDown';

describe('Testing MonthPicker Component', () => {
  moment.tz.setDefault('UTC');
  configure({ adapter: new Adapter() });
  let clock;
  let now;

  beforeEach(() => {
    now = moment('1987-05-15').toDate();
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(
      <PeriodPicker>
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value defined', () => {
    const wrapper = shallow(
      <PeriodPicker value="last-10">
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with base date defined', () => {
    const wrapper = shallow(
      <PeriodPicker date="2018-01-01">
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should return period based on value', () => {
    const onSelect = sinon.spy();
    const error = sinon.stub(console, 'error');
    const wrapper = shallow(
      <PeriodPicker onSelect={onSelect}>
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    const dropdown = wrapper.find(DropDown);
    dropdown.simulate('select', 'next-10');
    expect(onSelect.calledWith('next-10', moment(), moment().add(9, 'days'))).toBeTruthy();
    dropdown.simulate('select', 'last-10');
    expect(onSelect.calledWith('last-10', moment().subtract(9, 'days'), moment())).toBeTruthy();
    dropdown.simulate('select', 'other');
    expect(error.calledWith('Wrong format, try (last|next)-[1-9]+: other')).toBeTruthy();
    error.restore();
  });
  it('should open MonthPicker when value is month-picker', () => {
    const onSelect = sinon.spy();
    const wrapper = shallow(
      <PeriodPicker onSelect={onSelect}>
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    const dropdown = wrapper.find(DropDown);
    dropdown.simulate('select', 'month-picker');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onSelect when selection a month from month-picker', () => {
    const onSelect = sinon.spy();
    const wrapper = shallow(
      <PeriodPicker onSelect={onSelect}>
        <Option value="next-10">Próximos 10</Option>
        <Option value="last-10">Últimos 10</Option>
        <Option value="month-picker">Selecione o mês</Option>
      </PeriodPicker>,
    );
    const dropdown = wrapper.find(DropDown);
    const monthPicker = wrapper.find(MonthPicker);
    dropdown.simulate('select', 'month-picker');
    monthPicker.simulate('select', {
      year: 1987,
      month: 4,
    }, 'Mai', moment({
      year: 1987,
      month: 4,
    }));
    expect(onSelect.calledWith(
      'month-picker',
      moment({
        year: 1987,
        month: 4,
      }).startOf('month'),
      moment({
        year: 1987,
        month: 4,
      }).endOf('month'),
    )).toBeTruthy();
  });
});
