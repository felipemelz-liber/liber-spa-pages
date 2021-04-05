import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Unprocessable from '../Unprocessable';

describe('Testing Unprocessable', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<Unprocessable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
