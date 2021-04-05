import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Label, Header, Slide } from '../styles';

describe('Testing Tabs Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    slider: '#aaa',
    label: {
      active: '#bbb',
      common: '#ccc',
      background: '#ddd',
      border: '#eee',
    },
  };

  describe('Label', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Label />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Label theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        backgroundColor: '#ccc',
        activeColor: '#ccc',
        commonCOlor: '#ccc',
        bordeColor: '#ccc',
        active: true,
      };
      const wrapper = shallow(<Label {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('Header should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Slide', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Slide />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Slide theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        color: '#ccc',
        number: 4,
        current: 0,
      };
      const wrapper = shallow(<Slide {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with gradient', () => {
      const props = {
        color: ['#ccc', '#ddd', '#eee'],
      };
      const wrapper = shallow(<Slide {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
