import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  FieldContainer,
  CardContent,
  SelectHeader,
  SelectCounter,
  SelectBox,
  Tooltip,
  FieldBox,
  Label,
  SelectionContainer,
  Checkbox,
} from '../SelectMultiple.styles';

describe('Testing RadioButton Styles', () => {
  configure({ adapter: new Adapter() });
  describe('Uncontrolled Styles', () => {
    it('should FieldContainer render correctly', () => {
      const wrapper = shallow(<FieldContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should CardContent render correctly', () => {
      const wrapper = shallow(<CardContent />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should SelectHeader render correctly', () => {
      const wrapper = shallow(<SelectHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should SelectCounter render correctly', () => {
      const wrapper = shallow(<SelectCounter />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should SelectBox render correctly', () => {
      const wrapper = shallow(<SelectBox />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should Tooltip render correctly', () => {
      const wrapper = shallow(<Tooltip />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('Controled Styles', () => {
    describe('FieldBox', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<FieldBox />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === opened', () => {
        const wrapper = shallow(<FieldBox layout="opened" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === unselected', () => {
        const wrapper = shallow(<FieldBox layout="unselected" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === selected', () => {
        const wrapper = shallow(<FieldBox layout="selected" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Label', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Label />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === opened', () => {
        const wrapper = shallow(<Label layout="opened" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === unselected', () => {
        const wrapper = shallow(<Label layout="unselected" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with layout === selected', () => {
        const wrapper = shallow(<Label layout="selected" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('SelectionContainer', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<SelectionContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with open = true', () => {
        const wrapper = shallow(<FieldBox open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with open = true and position = left', () => {
        const wrapper = shallow(<FieldBox open position="left" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with open = true and position = center', () => {
        const wrapper = shallow(<FieldBox open position="center" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with open = true and position = right', () => {
        const wrapper = shallow(<FieldBox open position="right" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Checkbox', () => {
      it('should render correctly without header flag', () => {
        const wrapper = shallow(<Checkbox id="mock-id" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with header flag', () => {
        const wrapper = shallow(<Checkbox id="mock-id" header />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly checked', () => {
        const wrapper = shallow(<Checkbox id="mock-id" checked />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
