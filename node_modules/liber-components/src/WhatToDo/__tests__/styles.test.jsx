import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Title,
  Separator,
  Box,
  Question,
  YellowBox,
  NotificationLabel,
  NotificationContent,
} from '../styles';

describe('Testing Checkbox Styles', () => {
  configure({ adapter: new Adapter() });
  it('Bg should render correctly when closed', () => {
    const wrapper = shallow(<Title />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Card should render correctly when open', () => {
    const wrapper = shallow(<Separator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('ModalContainer should render correctly when closed', () => {
    const wrapper = shallow(<Box />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('ModalContainer should render correctly when closed', () => {
    const wrapper = shallow(<Question />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('YellowBox should render correctly', () => {
    const wrapper = shallow(<YellowBox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('NotificationLabel should render correctly', () => {
    const wrapper = shallow(<NotificationLabel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MNotificationContent should render correctly when opened', () => {
    const wrapper = shallow(<NotificationContent show />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('MNotificationContent should render correctly when closed', () => {
    const wrapper = shallow(<NotificationContent show={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
