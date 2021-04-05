import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import NotFound from '../NotFound';

describe('Testing NotFound', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
