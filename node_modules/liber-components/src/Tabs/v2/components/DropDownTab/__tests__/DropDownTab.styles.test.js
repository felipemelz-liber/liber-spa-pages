import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../DropDownTab.styles';

describe('Testing DropDownTab Styles', () => {
  configure({ adapter: new Adapter() });
  const { Content, ...uncontrolled } = styles;
  describe('Uncontrolled Styles', () => {
    Object.keys(uncontrolled).forEach(style => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled Styles', () => {
    describe('Content', () => {
      it(`renders correctly without props`, () => {
        const wrapper = shallow(<Content />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it(`renders correctly with open=false`, () => {
        const wrapper = shallow(<Content open={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it(`renders correctly with open=true`, () => {
        const wrapper = shallow(<Content open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
