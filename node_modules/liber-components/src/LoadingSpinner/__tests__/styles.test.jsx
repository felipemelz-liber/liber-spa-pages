import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { Liber as theme } from 'Themes';
import { Container, Spinner } from '../styles';

describe('Testing LoadingSpinner Styles', () => {
  configure({ adapter: new Adapter() });

  it('should render Container correctly without props', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Spinner', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Spinner />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with size', () => {
      const wrapper = shallow(<Spinner size="64px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with thickness', () => {
      const wrapper = shallow(<Spinner thickness="6px" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with color', () => {
      const wrapper = shallow(<Spinner color="#fafafa" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with theme', () => {
      const wrapper = shallow(<Spinner theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with theme and color', () => {
      const wrapper = shallow(<Spinner theme={theme} color="#ff00ff" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
