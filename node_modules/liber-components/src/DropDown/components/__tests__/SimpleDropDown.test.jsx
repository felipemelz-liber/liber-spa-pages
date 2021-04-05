import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ClickOutside from '../../../Util/ClickOutside';
import SimpleDropDown from '../SimpleDropDown';
import { CurrentBox } from '../SimpleDropDown.styles';
import { Button } from '../../../Buttons';

describe('Test for SimpleDropDown Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      children: 'content',
      label: 'label',
    };
  });
  it('should render conrrectly without props', () => {
    const wrapper = shallow(<SimpleDropDown />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('uncontrolled', () => {
    it('should render correctly with props', () => {
      const wrapper = shallow(<SimpleDropDown {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should open on box click', () => {
      const wrapper = shallow(<SimpleDropDown {...props} />);
      const box = wrapper.find(CurrentBox);
      expect(wrapper.state('open')).toBeFalsy();
      box.simulate('click');
      expect(wrapper.state('open')).toBeTruthy();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should close on click outside', () => {
      const wrapper = shallow(<SimpleDropDown {...props} />);
      wrapper.setState({ open: true });
      const outside = wrapper.find(ClickOutside);
      outside.simulate('outsideClick');
      expect(wrapper.state('open')).toBeFalsy();
    });
    it('should render correctly with customButton', () => {
      props.customButton = <Button />;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should open on buttonclick', () => {
      props.customButton = <Button />;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      const button = wrapper.find(Button);
      expect(wrapper.state('open')).toBeFalsy();
      button.simulate('click');
      expect(wrapper.state('open')).toBeTruthy();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('controlled', () => {
    it('should render correctly with props', () => {
      props.open = false;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should not open on box click', () => {
      props.open = false;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      const box = wrapper.find(CurrentBox);
      expect(wrapper.state('open')).toBeFalsy();
      box.simulate('click');
      expect(wrapper.state('open')).toBeFalsy();
    });
    it('should open on props.open change to true', () => {
      props.open = false;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      wrapper.setProps({ open: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should close on props.open change to false', () => {
      props.open = true;
      const wrapper = shallow(<SimpleDropDown {...props} />);
      wrapper.setProps({ open: false });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
