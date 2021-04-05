import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as components from '../Listing.styles';

describe('Testing Listing Styled Components', () => {
  configure({ adapter: new Adapter() });

  Object.keys(components).forEach(componentName => {
    it(`renders ${componentName} correctly`, () => {
      const Component = components[componentName];
      const wrapper = shallow(<Component />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
