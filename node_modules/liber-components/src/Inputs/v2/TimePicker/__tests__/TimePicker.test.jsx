import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { SimpleDropDown } from '../../../../DropDown';
import { ClickOutside } from '../../../../Util';
import { Field } from '../TimePicker.styles';
import TimePicker from '../TimePicker';

describe('Testing TimePicker Component', () => {
  configure({ adapter: new Adapter() });
  let props;

  beforeEach(() => {
    props = {
      label: 'label',
      onChange: sinon.spy(),
    };
  });
  it('renders TimePicker correctly without props', () => {
    const wrapper = shallow(<TimePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TimePicker correctly with props', () => {
    const wrapper = shallow(<TimePicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders TimePicker correctly with time', () => {
    props.time = '12:00:00';
    const wrapper = shallow(<TimePicker {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open on Input Focus', () => {
    const wrapper = shallow(<TimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('focus');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should close on Click Outsidde', () => {
    const wrapper = shallow(<TimePicker {...props} />);
    const co = wrapper.find(ClickOutside);
    wrapper.setState({ open: true });
    co.simulate('outsideClick');
    expect(wrapper.state('open')).toBeFalsy();
  });
  it('should change state and call onChange when update input', () => {
    const wrapper = shallow(<TimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '11:30:00');
    expect(wrapper.state('time')).toEqual('11:30:00');
    expect(wrapper.state('hour')).toBe('11');
    expect(wrapper.state('min')).toBe('30');
    expect(wrapper.state('sec')).toBe('00');
    expect(props.onChange.calledWith('11:30:00', '11', '30', '00')).toBeTruthy();
  });
  it('should change state and call onChange when update input with invalid time', () => {
    const wrapper = shallow(<TimePicker {...props} />);
    const dd = wrapper.find(SimpleDropDown).dive();
    const field = dd.find(Field);
    field.simulate('change', '25:61:109');
    expect(wrapper.state('time')).toEqual('23:59:59');
    expect(wrapper.state('hour')).toBe('23');
    expect(wrapper.state('min')).toBe('59');
    expect(wrapper.state('sec')).toBe('59');
    expect(props.onChange.calledWith('23:59:59', '23', '59', '59')).toBeTruthy();
  });
});
