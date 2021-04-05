import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../LoginForm.styles';

describe('Testing Login Form Styles', () => {
  configure({ adapter: new Adapter() });

  const {
    Global, Footer, LoginContainer, ...uncontroled
  } = styles;
  describe('Uncontrolled Styles', () => {
    Object.keys(uncontroled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = uncontroled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled Styles', () => {
    describe('Global', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Global />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with container', () => {
        const wrapper = shallow(<Global container=".container" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Footer', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with props', () => {
        const props = {
          logoUrl: 'https://url/of/logo',
          email: 'mock@mockemail.com',
          phone: '+55 11 99999999',
        };
        const wrapper = shallow(<Footer {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('LoginContainer', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<LoginContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with children', () => {
        const wrapper = shallow(<LoginContainer>children</LoginContainer>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with container', () => {
        const wrapper = shallow(<LoginContainer container=".container" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with custom footer', () => {
        const wrapper = shallow(<LoginContainer footer={<div>footer</div>} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
