import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  ModalButton,
  ModalPrimaryButton,
  SuccessIcon,
  SuccessButton,
  ModalSuccessButton,
  DangerIcon,
  DangerButton,
  ModalDangerButton,
} from '..';

describe('Test for ModalButton Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    buttons: {
      base: {
        ripple: '#123',
        background: '#456',
        backgroundHover: '#789',
        color: '#abc',
      },
      primary: {
        ripple: '#aaa',
        background: '#bbb',
        backgroundHover: '#ccc',
        color: '#ddd',
      },
      success: {
        ripple: '#000',
        background: '#111',
        backgroundHover: '#222',
        color: '#333',
      },
      danger: {
        background: '#aaa',
        backgroundHover: '#bbb',
      },
    },
  };

  describe('ModalButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ModalButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<ModalButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        width: '100px',
        minWidth: '100px',
        maxWidth: '100px',
        height: '100px',
        minHeight: '100px',
        maxHeight: '100px',
        margin: '100px',
      };
      const wrapper = shallow(<ModalButton {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with margin as object', () => {
      const props = {
        margin: {
          top: '10px',
          right: '10px',
          bottom: '10px',
          left: '10px',
        },
      };
      const wrapper = shallow(<ModalButton {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('ModalPrimaryButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ModalPrimaryButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<ModalPrimaryButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('SuccessIcon should render correctly without props', () => {
    const wrapper = shallow(<SuccessIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('SuccessButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<SuccessButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SuccessButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('ModalSuccessButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ModalSuccessButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with icon', () => {
      const wrapper = shallow(<ModalSuccessButton hasIcon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with props', () => {
      const props = {
        width: '50%',
      };
      const wrapper = shallow(<ModalSuccessButton {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('DangerIcon should render correctly without props', () => {
    const wrapper = shallow(<DangerIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('DangerButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<DangerButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<DangerButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('ModalDangerButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<ModalDangerButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with icon', () => {
      const wrapper = shallow(<ModalDangerButton hasIcon />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with props', () => {
      const props = {
        width: '50%',
      };
      const wrapper = shallow(<ModalDangerButton {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
