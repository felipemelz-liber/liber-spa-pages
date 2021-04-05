import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../MonthCalendar.styles';

describe('Testing Version 2.0 MonthCalendar Styles', () => {
  configure({ adapter: new Adapter() });

  const { Unit, ...uncontrolled } = styles;
  describe('Uncontrolled styles', () => {
    Object.keys(uncontrolled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled Styles', () => {
    describe('Unit', () => {
      it('renders correctly without type', () => {
        const wrapper = shallow(<Unit />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=basic', () => {
        const wrapper = shallow(<Unit type="basic" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=past', () => {
        const wrapper = shallow(<Unit type="past" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=range', () => {
        const wrapper = shallow(<Unit type="range" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=today', () => {
        const wrapper = shallow(<Unit type="today" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=label', () => {
        const wrapper = shallow(<Unit type="label" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with type=other', () => {
        const wrapper = shallow(<Unit type="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
