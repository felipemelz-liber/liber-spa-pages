import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../AcccountSelect.styles';

describe('Testing AccountSelect Styles', () => {
  configure({ adapter: new Adapter() });
  const { Box, Checkbox, ...uncontrolled } = styles;
  describe('Uncontrolled', () => {
    Object.keys(uncontrolled).forEach(style => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });

    it('renders CheckBox correctly', () => {
      const wrapper = shallow(<Checkbox id="mock-id" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('Controlled', () => {
    describe('Box', () => {
      it('should render corectly without props', () => {
        const wrapper = shallow(<Box>children</Box>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render corectly uncheked', () => {
        const wrapper = shallow(<Box checked={false}>children</Box>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render corectly cheked', () => {
        const wrapper = shallow(<Box checked>children</Box>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
