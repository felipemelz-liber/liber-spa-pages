import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../TimePicker.styles';

describe('Testing TimePicker Styles', () => {
  configure({ adapter: new Adapter() });
  const { Unit, ...uncontrolled } = styles;
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
    describe('Unit', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Unit />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with selected = false', () => {
        const wrapper = shallow(<Unit selected={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with selected = true', () => {
        const wrapper = shallow(<Unit selected />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
