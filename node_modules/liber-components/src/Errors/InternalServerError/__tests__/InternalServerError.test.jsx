import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import InternalServerError from '../InternalServerError';

describe('Testing InternalServerError', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<InternalServerError />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
