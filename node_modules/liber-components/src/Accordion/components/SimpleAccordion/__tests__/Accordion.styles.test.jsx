import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../Accordion.styles';

describe('Testing Accordion Styles', () => {
  configure({ adapter: new Adapter() });
  describe('Imuttable styles', () => {
    describe('Button', () => {
      it('should render correctly', () => {
        const wrapper = shallow(<styles.Button />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('ContentItem', () => {
      it('should render correctly', () => {
        const wrapper = shallow(<styles.ContentItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Muttable styles', () => {
    describe('Content', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<styles.Content />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with children', () => {
        const props = {
          children: [
            '1', '2', '3',
          ],
        };
        const wrapper = shallow(<styles.Content {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with children and opened', () => {
        const props = {
          open: true,
          children: [
            '1', '2', '3',
          ],
        };
        const wrapper = shallow(<styles.Content {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Item', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<styles.Item />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly witho open=true', () => {
        const wrapper = shallow(<styles.Item open />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Accordion', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<styles.Accordion />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with children', () => {
        const props = {
          children: [
            '1', '2', '3',
          ],
        };
        const wrapper = shallow(<styles.Accordion {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with children and grow=true', () => {
        const props = {
          grow: true,
          children: [
            '1', '2', '3',
          ],
        };
        const wrapper = shallow(<styles.Accordion {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
