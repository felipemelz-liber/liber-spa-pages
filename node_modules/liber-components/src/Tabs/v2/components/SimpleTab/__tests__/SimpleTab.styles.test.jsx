import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../SimpleTab.styles';

describe('Testing SimpleTab Styles', () => {
  configure({ adapter: new Adapter() });
  const {
    Tab,
    SimpleTabs,
    ...uncontroled
  } = styles;
  describe('Uncontroled Styles', () => {
    Object.keys(uncontroled).forEach((style) => {
      it(`renders ${style} correctly`, () => {
        const App = styles[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controled styles', () => {
    describe('SimpleTabs', () => {
      it('should renders correctly without props', () => {
        const wrapper = shallow(<SimpleTabs />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly wit left=false', () => {
        const wrapper = shallow(<SimpleTabs left={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should renders correctly wit left=true', () => {
        const wrapper = shallow(<SimpleTabs left />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
    describe('Tab', () => {
      describe('Center', () => {
        it('should renders correctly without props', () => {
          const wrapper = shallow(<Tab />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with active=false', () => {
          const wrapper = shallow(<Tab active={false} />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with active=true', () => {
          const wrapper = shallow(<Tab active />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with disabled=false', () => {
          const wrapper = shallow(<Tab active />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with disabled=true', () => {
          const wrapper = shallow(<Tab active />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
      });
      describe('Left', () => {
        it('should renders correctly without props', () => {
          const wrapper = shallow(<Tab left />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with active=false', () => {
          const wrapper = shallow(<Tab active={false} left />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with active=true', () => {
          const wrapper = shallow(<Tab active left />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with disabled=false', () => {
          const wrapper = shallow(<Tab active left />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('should renders correctly with disabled=true', () => {
          const wrapper = shallow(<Tab active left />);
          expect(toJson(wrapper)).toMatchSnapshot();
        });
      });
    });
  });
});
