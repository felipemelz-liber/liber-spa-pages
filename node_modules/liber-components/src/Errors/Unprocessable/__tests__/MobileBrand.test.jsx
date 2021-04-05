import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import MobileBrand from '../MobileBrand';

describe('Testing MobileBrand', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<MobileBrand />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
