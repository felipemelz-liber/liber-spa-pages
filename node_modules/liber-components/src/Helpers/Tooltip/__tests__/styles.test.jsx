import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Container, Float, Icon, Arrow } from '../styles';

describe('Test for Inputs Styles Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    tooltip: {
      fill: '#aaa',
      color: '#bbb',
      hover: '#ccc',
      floatBgPrimary: '#ddd',
      floatBgSecondary: '#eee',
      floatPrimary: '#fff',
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

  describe('Float', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Float />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<Float theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    describe('Visible', () => {
      it('should render visible', () => {
        const wrapper = shallow(<Float visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      it('should be placed left', () => {
        const wrapper = shallow(<Float placement="left" visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      it('should be placed center', () => {
        const wrapper = shallow(<Float placement="center" visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

      it('should be placed right', () => {
        const wrapper = shallow(<Float placement="right" visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });

  describe('Icon', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Icon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('should render with contentPosition', () => {
    it('should render with contentPosition = unset', () => {
      const wrapper = shallow(<Float contenPosition="unset" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with contentPosition = start', () => {
      const wrapper = shallow(<Float contenPosition="start" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with contentPosition = middle', () => {
      const wrapper = shallow(<Float contenPosition="middle" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with contentPosition = end', () => {
      const wrapper = shallow(<Float contenPosition="end" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Arrow', () => {
    it('should render Arrow without props', () => {
      const wrapper = shallow(<Arrow />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render Arrow with children', () => {
      const wrapper = shallow(<Arrow>mock</Arrow>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render Arrow with props', () => {
      const wrapper = shallow(<Arrow mount="left" contenPosition="start" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
