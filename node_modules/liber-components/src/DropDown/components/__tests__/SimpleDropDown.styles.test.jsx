import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../SimpleDropDown.styles';

describe('Testing SimpleDropDown Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    DropDownContent,
    ...uncontroled
  } = styles;
  describe('Uncontroled Styles', () => {
    Object.keys(uncontroled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = styles[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controled styles', () => {
    describe('CurrentBox', () => {
      it('should renders correctly closed', () => {
        const wrapper = shallow(<DropDownContent open={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly opened', () => {
        const wrapper = shallow(<DropDownContent open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with a position', () => {
        const wrapper = shallow(<DropDownContent position="bottom-left" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with any position', () => {
        const wrapper = shallow(<DropDownContent position="position" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
