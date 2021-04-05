import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ClickOutside from '../../Util/ClickOutside';
import KeyValueDisplay from '../../KeyValueDisplay';
import KeyValueDropDown from '../KeyValueDropDown';


describe('Tests for KeyValueDropDown', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      label: 'Value',
      keyLabel: 'Key',
      children: 'Value',
    };
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<KeyValueDropDown />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<KeyValueDropDown {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open on Click', () => {
    const wrapper = shallow(<KeyValueDropDown {...props} />);
    const display = wrapper.find(KeyValueDisplay);
    expect(wrapper.state('open')).toBeFalsy();
    display.simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should close on Click Outside', () => {
    const wrapper = shallow(<KeyValueDropDown {...props} />);
    wrapper.setState({ open: true });
    const outside = wrapper.find(ClickOutside);
    outside.simulate('outsideClick');
    expect(wrapper.state('open')).toBeFalsy();
  });
});
