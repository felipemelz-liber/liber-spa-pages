import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../DateTimeRangePicker.styles';

describe('Testing DateTimePicker Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    InputShell, TimeInput, DateInput,
    InputSeparator, Icon, Close, Label,
    Row, PickerSlider, Range,
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
    describe('InputShell', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<InputShell />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=false', () => {
        const wrapper = shallow(<InputShell error={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=true', () => {
        const wrapper = shallow(<InputShell error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=false', () => {
        const wrapper = shallow(<InputShell disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<InputShell disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('TimeInput', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<TimeInput />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=false', () => {
        const wrapper = shallow(<TimeInput disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<TimeInput disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('DateInput', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<DateInput />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=false', () => {
        const wrapper = shallow(<DateInput disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<DateInput disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('InputSeparator', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<DateInput />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=false', () => {
        const wrapper = shallow(<DateInput show={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=true', () => {
        const wrapper = shallow(<DateInput show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Icon', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=false', () => {
        const wrapper = shallow(<Icon error={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=true', () => {
        const wrapper = shallow(<Icon error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with hide=false', () => {
        const wrapper = shallow(<Icon hide={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with hide=true', () => {
        const wrapper = shallow(<Icon hide />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Close', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Close />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=false', () => {
        const wrapper = shallow(<Icon show={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=true', () => {
        const wrapper = shallow(<Icon show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Label', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Label />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with disabled=true', () => {
        const wrapper = shallow(<Label disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with error=true', () => {
        const wrapper = shallow(<Label error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with valid=true', () => {
        const wrapper = shallow(<Label valid />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with focused=true', () => {
        const wrapper = shallow(<Label focused />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Row', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Row />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with size=1000', () => {
        const wrapper = shallow(<Row size={1000} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('PickerSlider', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<PickerSlider />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=calendar', () => {
        const wrapper = shallow(<PickerSlider show="calendar" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=clock', () => {
        const wrapper = shallow(<PickerSlider show="clock" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with show=other', () => {
        const wrapper = shallow(<PickerSlider show="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Range', () => {
      it('renders correctly without props', () => {
        const wrapper = shallow(<Range />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with empty=false, checked=false and start=false', () => {
        const wrapper = shallow(<Range empty={false} checked={false} start={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with empty=true', () => {
        const wrapper = shallow(<Range empty />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('renders correctly with checked=true and start=false', () => {
        const wrapper = shallow(<Range checked start={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
