import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  FieldContainer,
  CardContent,
  ValueField,
  ValueLabel,
  ValueContainer,
  RangeInputContainer,
  RangeInputFrom,
  RangeInputTo,
  DiffBar,

  FieldBox,
  RangeContainer,
  Label,
  FromTooltip,
  ToTooltip,
} from '../RangeField.styles';


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
    it('should ValueField render correctly', () => {
      const wrapper = shallow(<ValueField />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should ValueLabel render correctly', () => {
      const wrapper = shallow(<ValueLabel />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should ValueContainer render correctly', () => {
      const wrapper = shallow(<ValueContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should RangeInputContainer render correctly', () => {
      const wrapper = shallow(<RangeInputContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should RangeInputFrom render correctly', () => {
      const wrapper = shallow(<RangeInputFrom />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should RangeInputTo render correctly', () => {
      const wrapper = shallow(<RangeInputTo />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should DiffBar render correctly', () => {
      const wrapper = shallow(<DiffBar />);
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
    describe('RangeContainer', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<RangeContainer />);
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
    describe('FromTooltip', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<FromTooltip />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with unselected = true', () => {
        const wrapper = shallow(<FromTooltip unselected />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('ToTooltip', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<ToTooltip />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with unselected = true', () => {
        const wrapper = shallow(<ToTooltip unselected />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
