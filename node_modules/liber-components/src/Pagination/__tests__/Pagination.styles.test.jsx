import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Pagination.styles';

describe('Testing Pagination Styles', () => {
  configure({ adapter: new Adapter() });


  Object.keys(styles).forEach((style) => {
    it(`renders ${style} correctly`, () => {
      const App = styles[style];
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
