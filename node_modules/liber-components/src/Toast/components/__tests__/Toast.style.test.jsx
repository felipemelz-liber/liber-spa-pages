import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Toast.styles';

describe('Testing KeyValueDisplay Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    CloseIcon, LargeContent, ...uncontrolled
  } = styles;
  describe('uncontrolled', () => {
    Object.keys(uncontrolled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled', () => {
    describe('CloseIcon', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<CloseIcon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with  top=false', () => {
        const wrapper = shallow(<CloseIcon top={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with  base=true', () => {
        const wrapper = shallow(<CloseIcon top />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('LargeContent', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<LargeContent />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with  base=false', () => {
        const wrapper = shallow(<LargeContent base={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with  base=true', () => {
        const wrapper = shallow(<LargeContent base />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
