import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

import Step from '../Step';
import { StepIcon } from '../styles';

describe('Test for ProgressBar Step', () => {
  configure({ adapter: new Adapter() });
  const props = {
    number: 2,
  };

  it('should render with Number prop', () => {
    const wrapper = shallow(<Step {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with Active prop', () => {
    const wrapper = shallow(<Step {...props} active />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with Complete prop', () => {
    const wrapper = shallow(<Step {...props} complete />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with Connect prop', () => {
    const wrapper = shallow(<Step {...props} connect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with clickable', () => {
    const wrapper = shallow(<Step {...props} clickable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with onClick function and clickable', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Step {...props} clickable onClick={onClick} />);
    const cell = wrapper.find(StepIcon);
    cell.simulate('click');
    expect(onClick.called).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Tests for Step Connect', () => {
    it('should not render Connect without the prop', () => {
      const wrapper = shallow(<Step {...props} />);
      expect(wrapper.find('styles__StepConnect').length).toEqual(0);
    });

    it('should render Connect with the prop', () => {
      const wrapper = shallow(<Step {...props} connect />);
      expect(wrapper.find('styles__StepConnect').length).toEqual(1);
    });

    it('should render Connect passing default props', () => {
      const wrapper = shallow(<Step {...props} connect />);
      const connect = wrapper.find('styles__StepConnect');
      expect(connect.props().active).toBeFalsy();
      expect(connect.props().complete).toBeFalsy();
    });

    it('should render Connect matching parent props', () => {
      const wrapper = shallow(<Step {...props} active complete connect />);
      const connect = wrapper.find('styles__StepConnect');
      expect(connect.props().active).toBeTruthy();
      expect(connect.props().complete).toBeTruthy();
    });
  });

  it('should render with Label prop', () => {
    const wrapper = shallow(<Step {...props} label="Foo" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow(<Step {...props} active complete connect label="Foo" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should include StepCheck with Complete prop', () => {
    const wrapper = shallow(<Step {...props} complete />);
    expect(wrapper.find('styles__StepCheck')).toHaveLength(1);
  });

  it('should not include StepCheck without Complete prop', () => {
    const wrapper = shallow(<Step {...props} />);
    expect(wrapper.find('styles__StepCheck')).toHaveLength(0);
  });

  it('should include StepLabel when label is passed', () => {
    const wrapper = shallow(<Step {...props} label="Foo" />);
    expect(wrapper.find('styles__StepLabel')).toHaveLength(1);
  });

  it('should not include StepLabel when label is not defined', () => {
    const wrapper = shallow(<Step {...props} />);
    expect(wrapper.find('styles__StepLabel')).toHaveLength(0);
  });
});
