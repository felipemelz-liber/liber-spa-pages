import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../SimpleSelect.styles';

describe('Testing SimpleSelect Styles', () => {
  configure({ adapter: new Adapter() });
  const { Option, ...uncontrolled } = styles;
  describe('Uncontrolled', () => {
    Object.keys(uncontrolled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled', () => {
    describe('Option', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Option />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with active = false', () => {
        const wrapper = shallow(<Option active={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with active = true', () => {
        const wrapper = shallow(<Option active />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
