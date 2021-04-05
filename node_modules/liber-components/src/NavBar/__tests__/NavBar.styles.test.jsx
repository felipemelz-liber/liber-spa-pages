import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../NavBar.styles';

describe('Testing NavBar Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    Content,
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
      it('should renders correctly without props', () => {
        const wrapper = shallow(<Content open={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with contentSize=200px', () => {
        const wrapper = shallow(<Content contentSize="200px" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
