import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Title, Text } from '../Typography';

describe('Typography components tests', () => {
  configure({ adapter: new Adapter() });

  const sizes = ['small', 'regular', 'large', 'xlarge'];

  sizes.forEach(size => {
    it(`should render ${size} Title correctly`, () => {
      const wrapper = shallow(<Title size={size}>{size} title</Title>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  sizes.forEach(size => {
    it(`should render ${size} Text correctly`, () => {
      const wrapper = shallow(<Text size={size}>{size} text</Text>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
