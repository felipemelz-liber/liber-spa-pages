import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Carousel.styles';

describe('Testing Carousel Styles', () => {
  configure({ adapter: new Adapter() });
  const { DotsContainer, Dot, ...uncontrolled } = styles;
  describe('Uncontroled', () => {
    Object.keys(uncontrolled).forEach((style) => {
      it(`renders ${style} without crashing`, () => {
        const App = styles[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled', () => {
    describe('Dot', () => {
      it('should render without crashing, without current', () => {
        const wrapper = shallow(<DotsContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render without crashing, with current=false', () => {
        const wrapper = shallow(<DotsContainer current={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render without crashing, with current=true', () => {
        const wrapper = shallow(<DotsContainer current />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('DotContainer', () => {
      it('should render without crashing, without inner', () => {
        const wrapper = shallow(<DotsContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render without crashing, with inner=false', () => {
        const wrapper = shallow(<DotsContainer inner={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render without crashing, with inner=true', () => {
        const wrapper = shallow(<DotsContainer inner />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
