import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import DropDown from '../DropDown';
import { Option, Button, Label } from '../styles';

describe('Test for DropDown Component', () => {
  configure({ adapter: new Adapter() });
  const props = {
    onSelect: sinon.spy(),
  };
  it('should render correctly', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const dd = (
      <DropDown label="Label" {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.find(Button).simulate('mousedown');
    expect(wrapper.find(Label).length).toEqual(1);
  });
  it('should select first Option by default', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    expect(wrapper.state('label')).toBe('1');
  });
  it('should set defaultValue as value', () => {
    const dd = (
      <DropDown {...props} defaultValue="3">
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    expect(wrapper.state('label')).toBe('3');
  });
  it('should open on button mousedown', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    const button = wrapper.find(Button);
    button.simulate('mousedown');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should close on button mousedown, when openned', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    const button = wrapper.find(Button);
    wrapper.setState({ open: true });
    button.simulate('mousedown');
    expect(wrapper.state('open')).toBeFalsy();
  });
  it('should select option when clicked', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    const options = wrapper.find(Option);
    options.at(1).simulate('click');
    expect(wrapper.state('label')).toBe('2');
    expect(props.onSelect.calledWith('2')).toBeTruthy();
    props.onSelect.resetHistory();
  });
  it('should do nothing when click selected option', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    const options = wrapper.find(Option);
    options.at(0).simulate('click');
    expect(wrapper.state('label')).toBe('1');
    expect(props.onSelect.called).toBeFalsy();
  });
  it('should do nothing when click disabled option', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option disabled>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    const options = wrapper.find(Option);
    options.at(2).simulate('click');
    expect(wrapper.state('label')).toBe('1');
    expect(props.onSelect.called).toBeFalsy();
  });
  it('should trigger onSelect when option hasAction', () => {
    const dd = (
      <DropDown {...props}>
        <Option hasAction>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    const options = wrapper.find(Option);
    options.at(0).simulate('click');
    expect(wrapper.state('label')).toBe('1');
    expect(props.onSelect.called).toBeTruthy();
  });
  it('should set value base on value prop', () => {
    const dd = (
      <DropDown {...props}>
        <Option>1</Option>
        <Option>2</Option>
        <Option disabled>3</Option>
      </DropDown>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    wrapper.setProps({ value: '2' });
    expect(wrapper.state('label')).toBe('2');
  });
});
