import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import LoadingContainer from '../LoadingContainer';

describe('LoadingContainer tests', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<LoadingContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with loading active', () => {
    const wrapper = shallow(<LoadingContainer loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
