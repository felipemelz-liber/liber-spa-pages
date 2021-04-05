import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import SimpleSelect from '../SimpleSelect';
import { Option } from '../SimpleSelect.styles';

describe('Testing SimpleSelect Component', () => {
  configure({ adapter: new Adapter() });
  let props;

  const options = ['10', '25', '50', '100'];

  beforeEach(() => {
    props = {
      children: options.map(option => (<option value={option}>{option}</option>)),
      onSelect: sinon.spy(),
    };
  });
  it('renders SimpleSelect correctly without props', () => {
    const wrapper = shallow(<SimpleSelect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders SimpleSelect correctly with props', () => {
    const wrapper = shallow(<SimpleSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders SimpleSelect correctly with value', () => {
    props.value = '50';
    const wrapper = shallow(<SimpleSelect {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should select value on Option Click', () => {
    const wrapper = shallow(<SimpleSelect {...props} />);
    const opt = wrapper.find(Option);
    opt.at(1).simulate('click');
    expect(wrapper.state('value')).toBe('25');
    expect(wrapper.state('label')).toBe('25');
    expect(props.onSelect.calledWith('25', '25')).toBeTruthy();
  });
  it('should select value on Option Click with value', () => {
    props.value = '100';
    const wrapper = shallow(<SimpleSelect {...props} />);
    const opt = wrapper.find(Option);
    opt.at(1).simulate('click');
    expect(props.onSelect.calledWith('25', '25')).toBeTruthy();
  });
});
