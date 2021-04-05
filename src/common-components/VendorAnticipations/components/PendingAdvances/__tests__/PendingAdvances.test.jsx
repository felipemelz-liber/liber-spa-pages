import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { PendingAdvances } from '../PendingAdvances';

describe('PendingAdvances tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    pendingAdvances: [
      { id: 1, status: 'started', faceValue: 12000.32 },
      { id: 2, status: 'signed', faceValue: 12000.32 },
    ],
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<PendingAdvances />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<PendingAdvances {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
