import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NavBar from '../NavBar';

describe('Testing NavBar Component', () => {
  let props;
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    props = {
      menu: {
        label: 'label',
        sublabel: 'sublabel',
        icon: <svg />,
      },
      contentSize: '200px',
      children: <span />,
    };
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<NavBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<NavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
