import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment';
import DateRangePicker from '../DateRangePicker';
import { SimpleDropDown } from '../../../../DropDown';
import { Input, Range as RangeSelector, StyledInput } from '../../RangePickers';

describe('Test for DateRangePicker', () => {
  let clock;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    const now = new Date('2019-06-07');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<DateRangePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const wrapper = shallow(<DateRangePicker label="label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label and openLabel', () => {
    const wrapper = shallow(<DateRangePicker label="label" openLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value', () => {
    const wrapper = shallow(
      <DateRangePicker value="15/05/2019 a 16/05/2019" />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly disabled', () => {
    const wrapper = shallow(<DateRangePicker disabled />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with erro Message', () => {
    const wrapper = shallow(<DateRangePicker errorMessage="Error Message" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with hintText', () => {
    const wrapper = shallow(<DateRangePicker hintText="Hint Message" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with placeholder', () => {
    const wrapper = shallow(<DateRangePicker placeholder="placeholder" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with displayDate', () => {
    const wrapper = shallow(
      <DateRangePicker displayDate={moment('2019-07-07', 'YYYY-MM-DD')} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with defaultDisplayDate', () => {
    const wrapper = shallow(
      <DateRangePicker
        defaultDisplayDate={moment('2019-07-07', 'YYYY-MM-DD')}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should select dates on RangeSelector changes', () => {
    const wrapper = shallow(<DateRangePicker />);
    const selector = wrapper.find(RangeSelector);
    const start = moment('2019-06-07', 'YYYY-MM-DD');
    const end = moment('2019-07-07', 'YYYY-MM-DD');
    selector.simulate('changeDates', start, end);
    expect(wrapper.state('startDate')).toEqual(start.format('DD/MM/YYYY'));
    expect(wrapper.state('endDate')).toEqual(end.format('DD/MM/YYYY'));
    expect(wrapper.state('displayDate')).toEqual(
      moment(start).startOf('month'),
    );
  });
  it('should select startDate state on startDate input Change', () => {
    const wrapper = shallow(<DateRangePicker />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const inputContainer = dd.find(Input).dive();
    const inputs = inputContainer.find(StyledInput);
    inputs
      .at(0)
      .dive()
      .simulate('change', { target: { value: '07/06/2019' } });
    expect(wrapper.state('startDate')).toEqual('07/06/2019');
    expect(wrapper.state('displayDate')).toEqual(
      moment('07/06/2019', 'DD/MM/YYYY').startOf('month'),
    );
  });
  it('should select endDate state on endDate input Change', () => {
    const wrapper = shallow(<DateRangePicker />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const inputContainer = dd.find(Input).dive();
    const inputs = inputContainer.find(StyledInput);
    inputs
      .at(1)
      .dive()
      .simulate('change', { target: { value: '07/07/2019' } });
    expect(wrapper.state('endDate')).toEqual('07/07/2019');
  });
  it('should call onChange on RangeSelector changes when controlled', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<DateRangePicker onChange={onChange} />);
    const selector = wrapper.find(RangeSelector);
    const start = moment('2019-06-07', 'YYYY-MM-DD');
    const end = moment('2019-07-07', 'YYYY-MM-DD');
    selector.simulate('changeDates', start, end);
    expect(onChange.calledWith('07/06/2019 a 07/07/2019'));
  });
  it('should call onChange on startDate input Change when controlled', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<DateRangePicker onChange={onChange} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const inputContainer = dd.find(Input).dive();
    const inputs = inputContainer.find(StyledInput);
    inputs
      .at(0)
      .dive()
      .simulate('change', { target: { value: '07/06/2019' } });
    expect(onChange.calledWith('07/06/2019'));
  });
  it('should call onChange on endDate input Change when controlled', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(
      <DateRangePicker onChange={onChange} value="07/05/2019" />,
    );
    const dd = wrapper.find(SimpleDropDown).dive();
    const inputContainer = dd.find(Input).dive();
    const inputs = inputContainer.find(StyledInput);
    inputs
      .at(1)
      .dive()
      .simulate('change', { target: { value: '07/06/2019' } });
    expect(onChange.calledWith('07/05/2019 a 07/06/2019'));
  });
});
