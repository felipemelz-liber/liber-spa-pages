import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Accordion from '../Accordion';
import { Button } from '../Accordion.styles';

describe('Testing Accordion Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      children: [
        <div label="1" />,
        <div label="2" />,
        <div label="3" />,
      ],
      grow: false,
    };
  });
  describe('single=false', () => {
    beforeEach(() => {
      props.single = false;
    });
    it('should render correctly', () => {
      const wrapper = shallow(<Accordion {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with grow = true', () => {
      props.grow = true;
      const wrapper = shallow(<Accordion {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should update state on Item Click', () => {
      const wrapper = shallow(<Accordion {...props} />);
      const item = wrapper.find(Button);
      const divs = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
      ];
      divs.forEach((div, index) => div.setAttribute('data-index', index.toString()));
      item.at(0).simulate('click', { target: divs[0] });
      expect(wrapper.state('current')).toEqual(['0']);
      item.at(1).simulate('click', { target: divs[1] });
      expect(wrapper.state('current')).toEqual(['0', '1']);
      item.at(0).simulate('click', { target: divs[0] });
      expect(wrapper.state('current')).toEqual(['1']);
    });
  });
  describe('single=true', () => {
    beforeEach(() => {
      props.single = true;
    });
    it('should render correctly', () => {
      const wrapper = shallow(<Accordion {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with grow = true', () => {
      props.grow = true;
      const wrapper = shallow(<Accordion {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should update state on Item Click', () => {
      const wrapper = shallow(<Accordion {...props} />);
      const item = wrapper.find(Button);
      const divs = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
      ];
      divs.forEach((div, index) => div.setAttribute('data-index', index.toString()));
      item.at(0).simulate('click', { target: divs[0] });
      expect(wrapper.state('current')).toEqual('0');
      item.at(1).simulate('click', { target: divs[1] });
      expect(wrapper.state('current')).toEqual('1');
      item.at(1).simulate('click', { target: divs[1] });
      expect(wrapper.state('current')).toEqual('');
    });
  });
});
