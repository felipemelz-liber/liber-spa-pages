import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Slider } from '../styles';

describe('Test for BarChart Styles Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    barChart: {
      slider: {
        background: '#666',
        border: '#777',
      },
    },
  };

  describe('Slider', () => {
    it('should render without props', () => {
      const wrapper = shallow(<Slider />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with theme', () => {
      const wrapper = shallow(<Slider theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
