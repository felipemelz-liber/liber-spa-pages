import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../SelectField.styles';

describe('Testing SelectField Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    InputShell,
    Input,
    Option,
    Icon,
    Close,
    Hint,
    Error,
    Label,
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
      it('render correctly without props', () => {
        const wrapper = shallow(<InputShell />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=false', () => {
        const wrapper = shallow(<InputShell disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=true', () => {
        const wrapper = shallow(<InputShell disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with basic=false', () => {
        const wrapper = shallow(<InputShell basic={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with basic=true', () => {
        const wrapper = shallow(<InputShell basic />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with error=false', () => {
        const wrapper = shallow(<InputShell error={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with error=true', () => {
        const wrapper = shallow(<InputShell error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Input', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Input />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=false', () => {
        const wrapper = shallow(<Input disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=true', () => {
        const wrapper = shallow(<Input disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with basic=false', () => {
        const wrapper = shallow(<Input basic={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with basic=true', () => {
        const wrapper = shallow(<Input basic />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with static=false', () => {
        const wrapper = shallow(<Input static={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with static=true', () => {
        const wrapper = shallow(<Input static />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Input', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Option />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=false', () => {
        const wrapper = shallow(<Option disabled={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with disabled=true', () => {
        const wrapper = shallow(<Option disabled />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with checked=false', () => {
        const wrapper = shallow(<Option checked={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with checked=true', () => {
        const wrapper = shallow(<Option checked />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with focused=false', () => {
        const wrapper = shallow(<Option focused={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with focused=true', () => {
        const wrapper = shallow(<Option focused />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Icon', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Icon />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with hide=false', () => {
        const wrapper = shallow(<Icon hide={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with hide=true', () => {
        const wrapper = shallow(<Icon hide />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with error=false', () => {
        const wrapper = shallow(<Icon error={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with error=true', () => {
        const wrapper = shallow(<Icon error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Close', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Close />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with show=false', () => {
        const wrapper = shallow(<Close show={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with show=true', () => {
        const wrapper = shallow(<Close show />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Hint', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Hint />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with visible=false', () => {
        const wrapper = shallow(<Hint visible={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with visible=true', () => {
        const wrapper = shallow(<Hint visible />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Error', () => {
      it('render correctly without props', () => {
        const wrapper = shallow(<Error />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with visible=false', () => {
        const wrapper = shallow(<Error visible={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('render correctly with visible=true', () => {
        const wrapper = shallow(<Error visible />);
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
  });
});
