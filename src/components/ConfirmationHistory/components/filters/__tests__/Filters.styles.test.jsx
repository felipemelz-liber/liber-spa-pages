import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Filters.styles';

describe('Testing Filters Styles', () => {
  configure({ adapter: new Adapter() });
  const { FilterTag, SelectedSwitch, ...uncontrolled } = styles;
  describe('Uncontrolled', () => {
    Object.keys(uncontrolled).forEach(style => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled', () => {
    describe('FilterTag', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<FilterTag />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with gray=false', () => {
        const wrapper = shallow(<FilterTag gray={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with gray=true', () => {
        const wrapper = shallow(<FilterTag gray />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('SelectedSwitch', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<SelectedSwitch />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with switch=false', () => {
        const wrapper = shallow(<SelectedSwitch switch={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with switch=true', () => {
        const wrapper = shallow(<FilterTag switch />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
