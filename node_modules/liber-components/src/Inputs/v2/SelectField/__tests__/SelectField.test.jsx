import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { SimpleDropDown } from '../../../../DropDown';
// import { SimpleDropDown } from '../../../../DropDown';
import SelectField from '../SelectField';
import { InputShell, Option, Input, Tag } from '../SelectField.styles';

const children = [
  <option key="1" value="1">
    mock1
  </option>,
  <option key="2" value="2">
    otr2
  </option>,
  <option key="3" value="3" label="mock 3">
    mock3
  </option>,
  <option key="4" value="4">
    mock4
  </option>,
  <option key="5" value="5">
    otr5
  </option>,
];

describe('Test for SelectField', () => {
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = sinon.spy();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<SelectField>{children}</SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly disabled', () => {
    const wrapper = shallow(<SelectField disabled>{children}</SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const wrapper = shallow(
      <SelectField label="label">{children}</SelectField>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with open label', () => {
    const wrapper = shallow(
      <SelectField openLabel label="label">
        {children}
      </SelectField>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with hintText', () => {
    const wrapper = shallow(
      <SelectField hintText="hint text">{children}</SelectField>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with placeholder', () => {
    const wrapper = shallow(
      <SelectField placeholder="placeholder">{children}</SelectField>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with errorMessage', () => {
    const wrapper = shallow(
      <SelectField errorMessage="errorMessage">{children}</SelectField>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with searchable', () => {
    const wrapper = shallow(<SelectField searchable>{children}</SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with multiple empty', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with multiple single selection', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    wrapper.setState({ selected: [{ value: '1', label: 'One' }] });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with multiple ', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    wrapper.setState({
      selected: [{ value: '1', label: 'One' }, { value: '2', label: 'Two' }],
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open on focus', () => {
    const wrapper = shallow(<SelectField>{children}</SelectField>);
    const dd = wrapper.find(SimpleDropDown).dive();
    const shell = dd.find(InputShell);
    shell.simulate('focus');
    expect(wrapper.state('open')).toBeTruthy();
  });
  it('should change focused on arrow click', () => {
    const wrapper = mount(<SelectField>{children}</SelectField>);
    const dd = wrapper.find(SimpleDropDown);
    const shell = dd.find(InputShell);
    expect(wrapper.state('focused')).toEqual(-1);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(0);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(1);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(2);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(3);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(4);
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(4);
    shell.simulate('keyDown', { key: 'ArrowUp' });
    expect(wrapper.state('focused')).toEqual(3);
    shell.simulate('keyDown', { key: 'ArrowUp' });
    expect(wrapper.state('focused')).toEqual(2);
    shell.simulate('keyDown', { key: 'ArrowUp' });
    expect(wrapper.state('focused')).toEqual(1);
    shell.simulate('keyDown', { key: 'ArrowUp' });
    expect(wrapper.state('focused')).toEqual(0);
    shell.simulate('keyDown', { key: 'ArrowUp' });
    expect(wrapper.state('focused')).toEqual(0);
  });
  it('should remove focused and close on Escape', () => {
    const wrapper = mount(<SelectField>{children}</SelectField>);
    const dd = wrapper.find(SimpleDropDown);
    const shell = dd.find(InputShell);
    expect(wrapper.state('focused')).toEqual(-1);
    shell.simulate('focus');
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(0);
    expect(wrapper.state('open')).toBeTruthy();
    shell.simulate('keyDown', { key: 'Escape' });
    expect(wrapper.state('focused')).toEqual(-1);
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('value')).toEqual('');
    expect(wrapper.state('label')).toEqual('');
  });
  it('should select option on Enter', () => {
    const onChange = sinon.spy();
    const wrapper = mount(
      <SelectField onChange={onChange}>{children}</SelectField>,
    );
    const dd = wrapper.find(SimpleDropDown);
    const shell = dd.find(InputShell);
    expect(wrapper.state('focused')).toEqual(-1);
    shell.simulate('focus');
    shell.simulate('keyDown', { key: 'ArrowDown' });
    expect(wrapper.state('focused')).toEqual(0);
    expect(wrapper.state('open')).toBeTruthy();
    shell.simulate('keyDown', { key: 'Enter' });
    expect(wrapper.state('focused')).toEqual(-1);
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('value')).toEqual('1');
    expect(wrapper.state('label')).toEqual('mock1');
    expect(onChange.calledWith('1')).toBeTruthy();
  });
  it('should select option on Click', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(
      <SelectField onChange={onChange}>{children}</SelectField>,
    );
    const option = wrapper.find(Option);
    option.at(2).simulate('click');
    expect(wrapper.state('focused')).toEqual(-1);
    expect(wrapper.state('open')).toBeFalsy();
    expect(wrapper.state('value')).toEqual('3');
    expect(wrapper.state('label')).toEqual('mock 3');
    expect(onChange.calledWith('3')).toBeTruthy();
  });
  it('should filter values on input change while searchable', () => {
    const wrapper = shallow(<SelectField searchable>{children}</SelectField>);
    const dd = wrapper.find(SimpleDropDown).dive();
    const input = dd.find(Input);
    input.simulate('change', { target: { value: 'otr' } });
    expect(wrapper.state('label')).toEqual('otr');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should clear onClick on Tag close icon', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    wrapper.setState({ selected: [{ value: '1', label: 'One' }] });
    const dd = wrapper.find(SimpleDropDown).dive();
    const tag = dd.find(Tag);
    tag.simulate('close');
    expect(wrapper.state('selected')).toEqual([]);
  });
  it('should add item to selected on Option Click', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    const option = wrapper.find(Option);
    option.at(2).simulate('click');
    expect(wrapper.state('selected')).toEqual([
      { value: '3', label: 'mock 3' },
    ]);
  });
  it('should remove selected item on option click', () => {
    const wrapper = shallow(<SelectField multiple>{children}</SelectField>);
    wrapper.setState({ selected: [{ value: '3', label: 'mock 3' }] });
    const option = wrapper.find(Option);
    option.at(2).simulate('click');
    expect(wrapper.state('selected')).toEqual([]);
  });
});
