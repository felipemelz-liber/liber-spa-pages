import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../FilterTag.styles';

describe('Testing FilterTag styles', () => {
  configure({ adapter: new Adapter() });

  const { FilterTag, ...remaininStyles } = styles;

  it(`should render FilterTag correctly with gray property`, () => {
    const wrapper = shallow(<FilterTag gray />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`should render FilterTag correctly without gray property`, () => {
    const wrapper = shallow(<FilterTag />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  Object.keys(remaininStyles).forEach(Style => {
    it(`should render ${Style} correctly`, () => {
      const wrapper = shallow(<Style />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
