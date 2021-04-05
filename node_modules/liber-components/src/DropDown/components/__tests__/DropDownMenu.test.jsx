import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import DropDownMenu from '../DropDownMenu';
import { MenuOption, ButtonMenu, Label } from '../styles';

describe('Test for DropDownMenu Component', () => {
  configure({ adapter: new Adapter() });

  const optionAction = jest.fn();

  it('should render correctly', () => {
    const dd = (
      <DropDownMenu>
        <MenuOption>1</MenuOption>
        <MenuOption>2</MenuOption>
        <MenuOption>3</MenuOption>
      </DropDownMenu>
    );
    const wrapper = mount(dd);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label', () => {
    const dd = (
      <DropDownMenu label="Label">
        <MenuOption>1</MenuOption>
        <MenuOption>2</MenuOption>
        <MenuOption>3</MenuOption>
      </DropDownMenu>
    );
    const wrapper = mount(dd);
    wrapper.find(ButtonMenu).simulate('mousedown');
    expect(wrapper.find(Label).length).toEqual(1);
  });
  it('should open on button mousedown', () => {
    const dd = (
      <DropDownMenu>
        <MenuOption>1</MenuOption>
        <MenuOption>2</MenuOption>
        <MenuOption>3</MenuOption>
      </DropDownMenu>
    );
    const wrapper = mount(dd);
    const button = wrapper.find(ButtonMenu);
    button.simulate('mousedown');
    expect(wrapper.state('open')).toBeTruthy();
  });
  it('should close on button mousedown, when openned', () => {
    const dd = (
      <DropDownMenu>
        <MenuOption>1</MenuOption>
        <MenuOption>2</MenuOption>
        <MenuOption>3</MenuOption>
      </DropDownMenu>
    );
    const wrapper = mount(dd);
    const button = wrapper.find(ButtonMenu);
    wrapper.setState({ open: true });
    button.simulate('mousedown');
    expect(wrapper.state('open')).toBeFalsy();
  });
  it('should close and call action when option when clicked', () => {
    const dd = (
      <DropDownMenu>
        <MenuOption onClick={optionAction}>1</MenuOption>
        <MenuOption>2</MenuOption>
        <MenuOption>3</MenuOption>
      </DropDownMenu>
    );
    const wrapper = mount(dd);
    wrapper.setState({ open: true });
    const options = wrapper.find(MenuOption);
    options.at(0).simulate('click');
    expect(wrapper.state('open')).toBeFalsy();
    expect(optionAction).toHaveBeenCalled();
  });
});
