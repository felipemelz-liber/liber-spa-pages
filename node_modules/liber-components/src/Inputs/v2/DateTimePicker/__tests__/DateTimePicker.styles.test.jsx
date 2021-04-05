import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../DateTimePicker.styles';

describe('Testing DateTimePicker Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    Icon, Close, Clock, ...uncontrolled
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
      it('renders correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with hide = false', () => {
        const wrapper = shallow(<Icon hide={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with hide = true', () => {
        const wrapper = shallow(<Icon hide />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Close', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show = false', () => {
        const wrapper = shallow(<Icon show={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show = true', () => {
        const wrapper = shallow(<Icon show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('ClockContainer', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with size = 1000', () => {
        const wrapper = shallow(<Icon size={1000} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
