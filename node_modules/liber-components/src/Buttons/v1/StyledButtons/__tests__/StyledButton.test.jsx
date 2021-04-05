import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  Link,
  PrimaryLink,
  SecondaryLink,
  SuccessLink,
} from '../';

describe('Test for ActionButton Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    buttons: {
      base: {
        ripple: '#123',
        background: '#456',
        backgroundHover: '#789',
        color: '#abc',
      },
      disabled: {
        background: '#112233',
        color: '#aabbcc',
      },
      primary: {
        ripple: '#aaa',
        background: '#bbb',
        backgroundHover: '#ccc',
        color: '#ddd',
      },
      secondary: {
        ripple: '#eee',
        background: '#fff',
        backgroundHover: '#aab',
        border: '#aac',
        color: '#aad',
        colorHover: '#aae',
        borderHover: '#aaf',
      },
      success: {
        ripple: '#000',
        background: '#111',
        backgroundHover: '#222',
        color: '#333',
      },
    },
  };

  describe('Button', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Button />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Button theme={theme} />);
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
      const wrapper = shallow(<Button {...props} />);
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
      const wrapper = shallow(<Button {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('Link', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Link href="/" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Link href="/" theme={theme} />);
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
      const wrapper = shallow(<Link {...props} href="/" />);
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
      const wrapper = shallow(<Link {...props} href="/" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('PrimaryButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<PrimaryButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('SecondaryButton', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<SecondaryButton />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SecondaryButton theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
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
  describe('PrimaryLink', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<PrimaryLink />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<PrimaryLink theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('SecondaryLink', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<SecondaryLink />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SecondaryLink theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('SuccessLink', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<SuccessLink />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<SuccessLink theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
