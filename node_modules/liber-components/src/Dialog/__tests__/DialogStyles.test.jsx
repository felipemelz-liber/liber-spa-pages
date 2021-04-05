
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Bg, DialogContainer } from '../DialogStyles';

describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });

  describe('Bg', () => {
    it('should render correctly when closed', () => {
      const wrapper = shallow(<Bg />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const theme = {
        dialog: {
          background: '#aaa',
        },
      };
      const wrapper = shallow(<Bg theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('DialogContainer should render correctly', () => {
    const wrapper = shallow(<DialogContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
