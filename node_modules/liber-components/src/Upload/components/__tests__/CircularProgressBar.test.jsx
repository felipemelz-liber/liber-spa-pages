import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CircularProgressBar from '../CircularProgressBar';

describe('Testing CircularProgressBar Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      sqSize: 20,
      percentage: 20,
      strokeWidth: 20,
    };
  });
  it('should render correctly ', () => {
    const wrapper = shallow(<CircularProgressBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
