import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Progress,
  LabelUpper,
  LabelLower,
  Steps,
  StepContainer,
  StepIcon,
  StepCheck,
  StepConnect,
  StepLabel,
} from '../styles';

describe('Test for ActionButton Styles', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    progressBar: {
      background: '#aaa',
      label: '#bbb',
      step: {
        active: '#ccc',
        complete: '#ddd',
        inactive: '#eee',
      },
    },
  };

  describe('Progress', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Progress />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Progress theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Labels', () => {
    it('should render LabelUpper correctly without props', () => {
      const wrapper = shallow(<LabelUpper />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render LabelUpper correctly with theme', () => {
      const wrapper = shallow(<LabelUpper theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render LabelLower correctly without props', () => {
      const wrapper = shallow(<LabelLower />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render LabelLower correctly with theme', () => {
      const wrapper = shallow(<LabelLower theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render Steps correctly without props', () => {
    const wrapper = shallow(<Steps />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('StepContainer', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<StepContainer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<StepContainer theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with active prop', () => {
      const wrapper = shallow(<StepContainer active />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with active prop and theme', () => {
      const wrapper = shallow(<StepContainer active theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop', () => {
      const wrapper = shallow(<StepContainer complete />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop and theme', () => {
      const wrapper = shallow(<StepContainer complete theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('StepIcon', () => {
    it('should render with active prop', () => {
      const wrapper = shallow(<StepIcon active />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with active prop and theme', () => {
      const wrapper = shallow(<StepIcon active theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop', () => {
      const wrapper = shallow(<StepIcon complete />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop and theme', () => {
      const wrapper = shallow(<StepIcon complete theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render clickable', () => {
      const wrapper = shallow(<StepIcon clickable />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render StepCheck correctly without props', () => {
    const wrapper = shallow(<StepCheck />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('StepConnect', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<StepConnect />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<StepConnect theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with active prop', () => {
      const wrapper = shallow(<StepConnect active />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with active prop and theme', () => {
      const wrapper = shallow(<StepConnect active theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop', () => {
      const wrapper = shallow(<StepConnect complete />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render with complete prop and theme', () => {
      const wrapper = shallow(<StepConnect complete theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render StepLabel correctly without props', () => {
    const wrapper = shallow(<StepLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
