import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { SelectionControl } from '../SelectionControl';
import { SelectActions } from '../SelectionControl.styles';

describe('SelectionControl tests', () => {
  configure({ adapter: new Adapter() });

  const selectAll = sinon.spy();
  const clearSelection = sinon.spy();

  const spyProps = {
    selectAll,
    clearSelection,
  };

  const fewSelectedProps = {
    selectedItems: [1, 2, 3],
    itemsCount: 10,
    ...spyProps,
  };

  const almostAllSelectedProps = {
    selectedItems: [1, 2, 3],
    itemsCount: 4,
    unselectedItems: [{ id: 4 }],
    hasSelectedAllItems: true,
    ...spyProps,
  };

  const allSelectedProps = {
    selectedItems: [1, 2, 3],
    itemsCount: 3,
    unselectedItems: [],
    hasSelectedAllItems: true,
    ...spyProps,
  };

  it('should render nothing with no props', () => {
    const wrapper = shallow(<SelectionControl />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with some selected items', () => {
    const wrapper = shallow(<SelectionControl {...fewSelectedProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with almost all selected items', () => {
    const wrapper = shallow(<SelectionControl {...almostAllSelectedProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with all selected items', () => {
    const wrapper = shallow(<SelectionControl {...allSelectedProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call clearSelection on button clear click', () => {
    const wrapper = shallow(<SelectionControl {...fewSelectedProps} />);
    const clearButton = wrapper.find(SelectActions).at(1);

    clearButton.simulate('click');

    expect(clearSelection.called).toBeTruthy();
  });

  it('should call selectAll on button select all click', () => {
    const wrapper = shallow(<SelectionControl {...fewSelectedProps} />);
    const selectButton = wrapper.find(SelectActions).at(0);

    selectButton.simulate('click');

    expect(selectAll.called).toBeTruthy();
  });
});
