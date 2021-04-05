import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import BlurredMessage from '../BlurredMessage';

describe('BlurredMessage tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    children: <div />,
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<BlurredMessage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(<BlurredMessage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with overlay', () => {
    const wrapper = shallow(<BlurredMessage {...props} overlay="mock" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with overlay and no blur', () => {
    const wrapper = shallow(<BlurredMessage {...props} overlay="mock" blur={0} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
