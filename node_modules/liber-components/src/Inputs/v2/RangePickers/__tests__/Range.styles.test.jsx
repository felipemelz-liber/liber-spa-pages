import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Range.styles';

describe('Testing Range Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    Input,
    Separator,
    InputContainer,
    InputShell,
    SelectionSlider,
    Range,
    Label,
    Hint,
    Error,
    ...uncontrolled
  } = styles;
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
    describe('Input', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Input />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with inputSize', () => {
        const wrapper = shallow(<Input inputSize="90px" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Separator', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Separator />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=true', () => {
        const wrapper = shallow(<Separator show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('InputContainer', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<InputContainer />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with full', () => {
        const wrapper = shallow(<InputContainer full="90px" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with hide=true', () => {
        const wrapper = shallow(<InputContainer hide />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('InputShell', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<InputShell />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with open=true', () => {
        const wrapper = shallow(<InputShell open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=true', () => {
        const wrapper = shallow(<InputShell error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<InputShell disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('SelectionSlider', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<SelectionSlider />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show="date"', () => {
        const wrapper = shallow(<SelectionSlider show="date" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show="time"', () => {
        const wrapper = shallow(<SelectionSlider show="time" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Range', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Range />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without props with empty = false, checked = false and start = false', () => {
        const wrapper = shallow(<Range empty={false} checked={false} start={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without props with empty = true, checked = false and start = false', () => {
        const wrapper = shallow(<Range empty checked={false} start={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without props with empty = false, checked = true and start = false', () => {
        const wrapper = shallow(<Range empty={false} checked start={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly without props with empty = false, checked = true and start = true', () => {
        const wrapper = shallow(<Range empty={false} checked start />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Label', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Label />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with open=true', () => {
        const wrapper = shallow(<Label open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=true', () => {
        const wrapper = shallow(<Label error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<Label disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Hint', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Hint />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with visible=true', () => {
        const wrapper = shallow(<Hint visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Error', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with visible=true', () => {
        const wrapper = shallow(<Error visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
