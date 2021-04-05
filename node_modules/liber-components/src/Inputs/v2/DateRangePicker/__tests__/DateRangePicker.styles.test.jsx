import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../DateRangePicker.styles';

describe('Testing DateRangePicker Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    Range, Icon, Close, ...uncontrolled
  } = styles;
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
    describe('Icon', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with error = true', () => {
        const wrapper = shallow(<Icon error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with hide = true', () => {
        const wrapper = shallow(<Icon hide />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Close', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Close />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with show = true', () => {
        const wrapper = shallow(<Close show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
