import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../TableHeader.styles';

const { HeaderColumn, ...components } = styles;

describe('Testing TableHeader Styles', () => {
  configure({ adapter: new Adapter() });

  Object.keys(components).forEach(style => {
    it(`renders ${style} correctly`, () => {
      const Component = components[style];
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  ['left', 'center', 'right'].forEach(aligment => {
    it(`renders TableHeaderColumn with ${aligment} aligment`, () => {
      const wrapper = shallow(<HeaderColumn align={aligment} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
