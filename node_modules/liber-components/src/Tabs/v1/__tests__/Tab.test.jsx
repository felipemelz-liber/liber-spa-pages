import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Tab from '../Tab';

describe('Testing Tab Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      label: 'test',
    };
  });
  it('should render correctly with element', () => {
    const wrapper = shallow(<Tab {...props}><div /></Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with string', () => {
    const wrapper = shallow(<Tab {...props}>Test</Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with number', () => {
    const wrapper = shallow(<Tab {...props}>{1212}</Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with arrayOf element', () => {
    const wrapper = shallow(<Tab {...props}><div /><div /></Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with arrayOf string', () => {
    const wrapper = shallow(<Tab {...props}>{['test1', 'test2']}</Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with arrayOf number', () => {
    const wrapper = shallow(<Tab {...props}>{['1212', '9898']}</Tab>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
