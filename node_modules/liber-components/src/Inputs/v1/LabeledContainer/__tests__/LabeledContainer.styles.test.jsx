import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { LabelContainer } from '../LabeledContainer.styles';

describe('Test for LabeledContainer Styles Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    labeledContainer: {
      color: '#aaa',
    },
  };

  it('should render without props', () => {
    const wrapper = shallow(<LabelContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with theme', () => {
    const wrapper = shallow(<LabelContainer theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
