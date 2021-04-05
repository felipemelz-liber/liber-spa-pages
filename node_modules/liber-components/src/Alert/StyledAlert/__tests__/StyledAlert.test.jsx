import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  DefaultAlert,
  SuccessAlert,
  DangerAlert,
  WarningAlert,
} from '../index';

describe('Testing StyledAlert Components', () => {
  configure({ adapter: new Adapter() });

  describe('DefaultAlert', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<DefaultAlert />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('SuccessAlert', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SuccessAlert />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('DangerAlert', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<DangerAlert />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('WarningAlert', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<WarningAlert />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
