import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Value,
  Label,
  ActionContainer,
  Display,
  DisplayRow,
} from '../styles';

describe('Test for ActionButton Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    actionDisplay: {
      value: '#aaa',
      label: '#bbb',
      display: {
        background: '#ccc',
        hover: {
          background: '#ddd',
          value: '#eee',
          label: '#fff',
        },
      },
    },
  };

  describe('Value', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Value>child</Value>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Value theme={theme}>child</Value>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with currency', () => {
      const wrapper = shallow(<Value currency="R$">child</Value>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Label', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Label />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Label theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render ActionContainer correctly', () => {
    const wrapper = shallow(<ActionContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Display', () => {
    it('should render correctly without action', () => {
      const wrapper = shallow(<Display hasAction={false} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Display theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with action', () => {
      const wrapper = shallow(<Display hasAction />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with size', () => {
      const wrapper = shallow(<Display size="70%" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with valueBig', () => {
      const wrapper = shallow(<Display valueBig="32px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with valueSmall', () => {
      const wrapper = shallow(<Display valueBig="30px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render DisplayRow correctly', () => {
    const wrapper = shallow(<DisplayRow />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
