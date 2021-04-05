import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Content } from '../styles';

describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });

  describe('Content', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Content />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const theme = {
        dialog: {
          background: '#aaa',
        },
      };
      const wrapper = shallow(<Content theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=left, size=100 and fitScreen=false', () => {
      const props = {
        position: 'left',
        size: 100,
        fitScreen: false,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=left, size=100 and fitScreen=true', () => {
      const props = {
        position: 'left',
        size: 100,
        fitScreen: true,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=right, size=100 and fitScreen=false', () => {
      const props = {
        position: 'right',
        size: 100,
        fitScreen: false,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=right, size=100 and fitScreen=true', () => {
      const props = {
        position: 'right',
        size: 100,
        fitScreen: true,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=top, size=100 and fitScreen=false', () => {
      const props = {
        position: 'top',
        size: 100,
        fitScreen: false,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=top, size=100 and fitScreen=true', () => {
      const props = {
        position: 'top',
        size: 100,
        fitScreen: true,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=bottom, size=100 and fitScreen=false', () => {
      const props = {
        position: 'bottom',
        size: 100,
        fitScreen: false,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with position=bottom, size=100 and fitScreen=true', () => {
      const props = {
        position: 'bottom',
        size: 100,
        fitScreen: true,
      };
      const wrapper = shallow(<Content {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
