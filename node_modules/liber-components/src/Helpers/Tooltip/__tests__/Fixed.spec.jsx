import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { ClickOutside } from 'Util';
import Fixed from '../Fixed';
import { Container, Float } from '../styles';

describe('Test for Fixed Component', () => {
  configure({ adapter: new Adapter() });

  it('should not render without children', () => {
    const error = sinon.stub(console, 'error');
    shallow(<Fixed />);
    expect(error.calledOnce).toBeTruthy();
    error.restore();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(<Fixed><p>Hello.</p></Fixed>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should spread props correctly', () => {
    const wrapper = shallow(<Fixed label="Helper" position="bottom-center" ><p>Hello.</p></Fixed>);
    expect(wrapper.find('h6').prop('children')).toEqual('Helper');
    expect(wrapper.find(Float).prop('position')).toEqual('bottom-center');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Hoverable', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Fixed hoverable><p>Hello.</p></Fixed>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should show when mouse over', () => {
      const wrapper = shallow(<Fixed hoverable><p>Hello.</p></Fixed>);
      wrapper.find(Container).simulate('mouseover');
      expect(wrapper.state('visible')).toBeTruthy();
      expect(wrapper.update().find(Float).prop('visible')).toBeTruthy();
    });

    it('should show when mouse leave', () => {
      const wrapper = shallow(<Fixed hoverable><p>Hello.</p></Fixed>);
      wrapper.find(Container).simulate('mouseover');
      wrapper.find(Container).simulate('mouseleave');
      expect(wrapper.state('visible')).toBeFalsy();
      expect(wrapper.update().find(Float).prop('visible')).toBeFalsy();
    });
  });

  describe('Visible state', () => {
    it('should show when clicked', () => {
      const wrapper = shallow(<Fixed><p>Hello.</p></Fixed>);
      wrapper.find(Container).simulate('click');
      expect(wrapper.state('visible')).toBeTruthy();
      expect(wrapper.update().find(Float).prop('visible')).toBeTruthy();
    });

    it('should hide when clicked again', () => {
      const wrapper = shallow(<Fixed><p>Hello.</p></Fixed>);
      wrapper.find(Container).simulate('click');
      wrapper.find(Container).simulate('click');
      expect(wrapper.state('visible')).toBeFalsy();
      expect(wrapper.update().find(Float).prop('visible')).toBeFalsy();
    });

    it('should hide when clicked outside', () => {
      const wrapper = shallow(<Fixed><p>Hello.</p></Fixed>);
      wrapper.find(Container).simulate('click');
      wrapper.find(ClickOutside).prop('onOutsideClick')();
      expect(wrapper.state('visible')).toBeFalsy();
      expect(wrapper.update().find(Float).prop('visible')).toBeFalsy();
    });
  });
});
