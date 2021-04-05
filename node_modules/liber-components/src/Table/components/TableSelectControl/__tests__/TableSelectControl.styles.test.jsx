import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../TableSelectControl.styles';

describe('Testing KeyValueDisplay Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    SelectedTitles,
    TotalSelectedTitles,
    Currency,
    DeselectIndicator,
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
    describe('SelectedTitles', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<SelectedTitles />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=empty', () => {
        const wrapper = shallow(<SelectedTitles type="empty" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=single', () => {
        const wrapper = shallow(<SelectedTitles type="single" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=multiple', () => {
        const wrapper = shallow(<SelectedTitles type="multiple" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=other', () => {
        const wrapper = shallow(<SelectedTitles type="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('TotalSelectedTitles', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<TotalSelectedTitles />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=empty', () => {
        const wrapper = shallow(<TotalSelectedTitles type="empty" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=single', () => {
        const wrapper = shallow(<TotalSelectedTitles type="single" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=multiple', () => {
        const wrapper = shallow(<TotalSelectedTitles type="multiple" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=other', () => {
        const wrapper = shallow(<TotalSelectedTitles type="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Currency', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<Currency />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=empty', () => {
        const wrapper = shallow(<Currency type="empty" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=single', () => {
        const wrapper = shallow(<Currency type="single" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=multiple', () => {
        const wrapper = shallow(<Currency type="multiple" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=other', () => {
        const wrapper = shallow(<Currency type="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('DeselectIndicator', () => {
      it('should render correctly without props', () => {
        const wrapper = shallow(<DeselectIndicator />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=empty', () => {
        const wrapper = shallow(<DeselectIndicator type="empty" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=single', () => {
        const wrapper = shallow(<DeselectIndicator type="single" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=multiple', () => {
        const wrapper = shallow(<DeselectIndicator type="multiple" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render correctly with type=other', () => {
        const wrapper = shallow(<DeselectIndicator type="other" />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
