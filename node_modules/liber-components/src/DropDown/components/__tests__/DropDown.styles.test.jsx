import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import sinon from 'sinon';
import {
  Box,
  Button,
  ButtonMenu,
  Icon,
  Label,
  List,
  MenuOption,
  Option,
} from '../styles';

describe('Test for DropDown Styles Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    dropdown: {
      button: {
        color: '#000',
        hover: '#111',
        caret: '#222',
      },
      label: {
        background: '#ccc',
        border: '#ddd',
        color: '#eee',
      },
      list: {
        background: '#333',
        border: '#444',
      },
      menu: {
        icon: '#123',
        option: {
          background: '#456',
          color: '#789',
          hover: {
            background: '#abc',
            color: '#def',
          },
        },
      },
      option: {
        background: '#555',
        selected: {
          background: '#666',
          color: '#777',
        },
        unselected: {
          background: '#888',
          color: '#999',
        },
        hover: {
          background: '#aaa',
          color: '#bbb',
        },
      },
    },
  };

  it('should render Card correctly ', () => {
    const wrapper = shallow(<Box />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Button', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Button />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Button theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('ButtonMenu', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<ButtonMenu />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<ButtonMenu theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Icon', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Icon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Icon theme={theme} />);
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

  describe('List', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<List />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<List theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        opacity: '1',
        scaleY: '1',
      };
      const wrapper = shallow(<List {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when position is set to shift-left', () => {
      const props = {
        position: 'shift-left',
      };
      const wrapper = shallow(<List {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when position is set to shift-right', () => {
      const props = {
        position: 'shift-right',
      };
      const wrapper = shallow(<List {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('MenuOption', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<MenuOption>string</MenuOption>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<MenuOption theme={theme}>string</MenuOption>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Option', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Option>string</Option>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Option theme={theme}>string</Option>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when disabled', () => {
      const props = {
        disabled: true,
      };
      const wrapper = shallow(<Option {...props}>{1}</Option>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when selected', () => {
      const props = {
        selected: true,
      };
      const wrapper = shallow(<Option {...props}>string</Option>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with error when children empty', () => {
      const error = sinon.stub(console, 'error');
      shallow(<Option />);
      expect(error.called).toBeTruthy();
      error.restore();
    });
  });
});
