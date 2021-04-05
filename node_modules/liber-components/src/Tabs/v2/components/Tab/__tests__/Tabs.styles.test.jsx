import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Tabs.styles';

describe('Testing SimpleTab Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    TabContentDisplay,
    TabContent,
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
    describe('TabContentDisplay', () => {
      it('should renders correctly without props', () => {
        const wrapper = shallow(<TabContentDisplay />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with active=0', () => {
        const wrapper = shallow(<TabContentDisplay active={0} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with active=1', () => {
        const wrapper = shallow(<TabContentDisplay active={0} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with active=10', () => {
        const wrapper = shallow(<TabContentDisplay active={0} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('TabContent', () => {
      it('should renders correctly without props', () => {
        const wrapper = shallow(<TabContent />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with active=false', () => {
        const wrapper = shallow(<TabContent active={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly with activetrue', () => {
        const wrapper = shallow(<TabContent active />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
