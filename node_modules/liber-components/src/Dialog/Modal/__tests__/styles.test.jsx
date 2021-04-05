import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Card, CardHeader, CloseIcon, CloseButton } from '../styles';

describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    dialog: {
      background: '#aaa',
      card: '#bbb',
      header: '#ccc',
      separator: '#ddd',
    },
  };

  describe('Card', () => {
    it('should render correctly when open', () => {
      const wrapper = shallow(<Card />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with overflow', () => {
      const wrapper = shallow(<Card overflow="hidden" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Card theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('CardHeader', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<CardHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CardHeader theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('CloseIcon', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<CloseIcon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<CloseIcon theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('CloseButton should render without props', () => {
    const wrapper = shallow(<CloseButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
