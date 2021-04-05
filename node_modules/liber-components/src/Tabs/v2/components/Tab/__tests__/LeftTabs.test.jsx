import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Tabs from '../LeftTabs';
import { SimpleTab } from '../../SimpleTab';

describe('Testing LeftTabs Styles', () => {
  configure({ adapter: new Adapter() });


  describe('ContentDisplay', () => {
    it('should renders correctly', () => {
      const wrapper = mount(
        <Tabs>
          <SimpleTab label="1">1</SimpleTab>
          <SimpleTab label="2">2</SimpleTab>
          <SimpleTab label="3">3</SimpleTab>
        </Tabs>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should renders correctly after click on Tab', () => {
      const wrapper = mount(
        <Tabs>
          <SimpleTab label="1">1</SimpleTab>
          <SimpleTab label="2">2</SimpleTab>
          <SimpleTab label="3">3</SimpleTab>
        </Tabs>,
      );
      const tab = wrapper.find(SimpleTab).at(1);
      tab.simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
