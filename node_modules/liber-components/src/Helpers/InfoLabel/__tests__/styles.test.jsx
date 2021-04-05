import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Container, Icon, Label } from '../styles';

describe('Test for Inputs Styles Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    infoLabel: {
      color: '#aaa',
      fill: '#bbb',
    },
  };

  describe('Container', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Container />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<Container theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Icon', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Icon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with props', () => {
      const wrapper = shallow(<Icon color="#123456" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<Icon theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Label', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Label />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
