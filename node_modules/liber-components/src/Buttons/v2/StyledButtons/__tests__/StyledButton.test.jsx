import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  AlertButton,
  ErrorButton,
  Link,
  PrimaryLink,
  SecondaryLink,
  SuccessLink,
  AlertLink,
  ErrorLink,
} from '..';

describe('Test for V2 StyledButton Styles', () => {
  configure({ adapter: new Adapter() });

  const buttons = [Button, PrimaryButton, SecondaryButton, SuccessButton, AlertButton, ErrorButton];
  const links = [Link, PrimaryLink, SecondaryLink, SuccessLink, AlertLink, ErrorLink];

  buttons.forEach(Component => {
    describe(`${Component.displayName}`, () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Component />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with size=small', () => {
        const wrapper = shallow(<Component size="small" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with circle=true', () => {
        const wrapper = shallow(<Component circle />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with outlined=true', () => {
        const wrapper = shallow(<Component outlined />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });

  links.forEach(Component => {
    describe(`${Component.displayName}`, () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Component href="/" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with props', () => {
        const wrapper = shallow(<Component size="small" href="/" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with circle=true', () => {
        const wrapper = shallow(<Component circle href="/" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with outlined=true', () => {
        const wrapper = shallow(<Component outlined href="/" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
