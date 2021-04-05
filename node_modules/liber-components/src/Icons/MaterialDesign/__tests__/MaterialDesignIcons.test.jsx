import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as icons from '../';


describe('Testing Material Design Icons', () => {
  configure({ adapter: new Adapter() });
  Object.keys(icons).forEach((icon) => {
    it(`renders ${icon} correctly`, () => {
      const Icon = icons[icon];
      const wrapper = shallow(<Icon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
