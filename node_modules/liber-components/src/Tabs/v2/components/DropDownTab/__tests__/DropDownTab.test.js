import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import ClickOutside from '../../../../../Util/ClickOutside';
import DropDownTab from '../DropDownTab';
import { Tab as StyledTab } from '../DropDownTab.styles';
import Tab from '../../SimpleTab/SimpleTab';

describe('Testing DropDownTab Component', () => {
  configure({ adapter: new Adapter() });
  it('renders DropDownTab correctly without props', () => {
    const wrapper = shallow(
      <DropDownTab>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders DropDownTab correctly with label set', () => {
    const wrapper = shallow(
      <DropDownTab label="Test label">
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders DropDownTab correctly with minWidth set', () => {
    const wrapper = shallow(
      <DropDownTab minWidth={275}>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders DropDownTab correctly with strongBorder', () => {
    const wrapper = shallow(
      <DropDownTab strongBorder>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders DropDownTab correctly with active = true', () => {
    const wrapper = shallow(
      <DropDownTab active>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should raise an error with children is lass than 2', () => {
    expect(() =>
      shallow(
        <DropDownTab active>
          <Tab label="tab 1">content</Tab>
        </DropDownTab>,
      ),
    ).toThrow();
  });
  it('should open on Tab Click', () => {
    const setter = sinon.spy();
    const state = sinon.stub(React, 'useState').callsFake(init => [init, setter]);
    const wrapper = shallow(
      <DropDownTab active>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    const tab = wrapper.find(StyledTab);
    tab.simulate('click');
    expect(setter.calledWith(true)).toBeTruthy();
    state.restore();
  });
  it('should close on click outside', () => {
    const setter = sinon.spy();
    const state = sinon.stub(React, 'useState').callsFake(() => [true, setter]);
    const wrapper = shallow(
      <DropDownTab active>
        <Tab label="tab 1">content</Tab>
        <Tab label="tab 1">content</Tab>
      </DropDownTab>,
    );
    const outside = wrapper.find(ClickOutside);
    outside.simulate('outsideClick');
    expect(setter.calledWith(false)).toBeTruthy();
    state.restore();
  });
});
