import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  AccordionBox,
  ShowBox,
  AccordionAction,
} from '../styles';


describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });
  const theme = {
    accordion: {
      actionBorderTopOpen: '#aaa',
      actionBorderTopClosed: '#bbb',
      boxBackgroundOpen: '#ccc',
      boxBackgroundClosed: '#ddd',
      boxBackgroundHover: '#eee',
      boxBorderOpen: '#fff',
      boxBorderClosed: '#ggg',
    },
  };

  describe('AccordionBox', () => {
    it('should render correctly when open', () => {
      const props = {
        open: true,
      };
      const wrapper = shallow(<AccordionBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when closed', () => {
      const props = {
        open: false,
      };
      const wrapper = shallow(<AccordionBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when open with theme', () => {
      const props = {
        open: true,
        theme,
      };
      const wrapper = shallow(<AccordionBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when closed with theme', () => {
      const props = {
        open: false,
        theme,
      };
      const wrapper = shallow(<AccordionBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('ShowBox', () => {
    it('should render correctly when open', () => {
      const props = {
        open: true,
      };
      const wrapper = shallow(<ShowBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when closed', () => {
      const props = {
        open: false,
      };
      const wrapper = shallow(<ShowBox {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('AccordionAction', () => {
    it('should render correctly when open', () => {
      const props = {
        open: true,
      };
      const wrapper = shallow(<AccordionAction {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when closed', () => {
      const props = {
        open: false,
      };
      const wrapper = shallow(<AccordionAction {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when open with theme', () => {
      const props = {
        open: true,
        theme,
      };
      const wrapper = shallow(<AccordionAction {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly when closed with theme', () => {
      const props = {
        open: false,
        theme,
      };
      const wrapper = shallow(<AccordionAction {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
