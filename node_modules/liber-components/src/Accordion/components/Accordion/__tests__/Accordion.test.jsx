import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Accordion from '../Accordion';
import { AccordionAction } from '../styles';

describe('Testing Checkbox Component', () => {
  let props;
  configure({ adapter: new Adapter() });

  beforeEach(() => {
    props = {
      children: (<p>Testando</p>),
      label: 'test',
    };
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<Accordion {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open when clicked with props', () => {
    const wrapper = shallow(<Accordion {...props} />);
    const clickable = wrapper.find(AccordionAction);
    clickable.simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly without props', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should open when clicked without props', () => {
    const wrapper = shallow(<Accordion />);
    const clickable = wrapper.find(AccordionAction);
    clickable.simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
