import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Label,
  Value,
  Container,

} from '../styles';

describe('Test for SimpleDisplay style Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    simpleDisplay: {
      label: '#000',
      value: '#111',
      container: {
        color: '#222',
        highlight: {
          background: '#333',
          label: '#444',
          value: '#555',
        },
        hover: {
          background: '#666',
          label: '#777',
          value: '#888',
        },
      },
    },
  };

  describe('Label', () => {
    it('should render correctly without color', () => {
      const wrapper = shallow(<Label />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Label theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Value', () => {
    const props = {
      children: <div>child</div>,
    };
    it('should render correctly without prefix', () => {
      const wrapper = shallow(<Value {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Value {...props} theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with prefix=""', () => {
      const wrapper = shallow(<Value {...props} prefix="" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with prefix="pf"', () => {
      const wrapper = shallow(<Value {...props} prefix="pf" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Container', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Container />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Container theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with evidentiate=true', () => {
      const wrapper = shallow(<Container evidentiate />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with hasAction=true', () => {
      const wrapper = shallow(<Container asAction />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
