import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import InfoLabel from '../InfoLabel';

describe('Test for InfoLabel Component', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<InfoLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const wrapper = shallow(<InfoLabel label="Label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(<InfoLabel>Children</InfoLabel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with color', () => {
    const wrapper = shallow(<InfoLabel color="#ABCDEF" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should pass props correctly', () => {
    const wrapper = shallow(<InfoLabel label="Label" prop="value" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
