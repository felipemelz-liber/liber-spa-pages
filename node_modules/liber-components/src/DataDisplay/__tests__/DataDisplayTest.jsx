import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { DisplayRow } from '../styles';

describe('Test for DataDisplay Styles', () => {
  configure({ adapter: new Adapter() });

  it('should render DisplayRow correctly', () => {
    const wrapper = shallow(<DisplayRow />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
