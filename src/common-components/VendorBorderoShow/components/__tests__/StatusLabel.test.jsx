import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import StatusLabel from '../StatusLabel';

describe('StatusLabel component tests', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<StatusLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  ['positive', 'negative', 'neutral', 'primary'].forEach(status => {
    it(`should render correctly with ${status} status`, () => {
      const wrapper = shallow(<StatusLabel status={status}>Mock</StatusLabel>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
