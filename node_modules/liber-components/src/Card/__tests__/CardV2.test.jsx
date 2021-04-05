import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../CardV2';

describe('Testing Card v2 Styles', () => {
  configure({ adapter: new Adapter() });
  const { Card, CardHeader, ...uncontrolled } = styles;
  describe('Uncontrolled', () => {
    Object.keys(uncontrolled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('controlled', () => {
    describe('Card', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Card />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with elevation=1', () => {
        const wrapper = shallow(<Card elevation="1" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with elevation=2', () => {
        const wrapper = shallow(<Card elevation="2" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with elevation=3', () => {
        const wrapper = shallow(<Card elevation="3" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with elevation=other', () => {
        const wrapper = shallow(<Card elevation="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('CardHeader', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<CardHeader />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=default', () => {
        const wrapper = shallow(<Card highlight="default" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=dark', () => {
        const wrapper = shallow(<Card highlight="dark" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=primary', () => {
        const wrapper = shallow(<Card highlight="primary" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=success', () => {
        const wrapper = shallow(<Card highlight="success" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=alert', () => {
        const wrapper = shallow(<Card highlight="alert" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=error', () => {
        const wrapper = shallow(<Card highlight="error" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without with highlight=other', () => {
        const wrapper = shallow(<Card highlight="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
