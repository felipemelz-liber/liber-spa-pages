import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../TextFieldFilter.styles';

describe('Testing TextFieldFilter styles', () => {
  configure({ adapter: new Adapter() });

  Object.keys(styles).forEach(componentName => {
    const Component = styles[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
