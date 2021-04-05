import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { ITEMS, COLUMNS } from '../../../utils';
import TableBody from '../TableBody';

describe('TableBody component tests', () => {
  configure({ adapter: new Adapter() });

  const requiredProps = {
    items: ITEMS,
    columns: COLUMNS,
    availableSpace: 90,
    hasSelection: false,
  };

  const customProps = [
    {
      actions: <div>Actions</div>,
      isItemSelected: () => false,
      isItemSelectable: () => true,
      onSelect: () => null,
      tooltipContent: () => <b>Tooltip</b>,
    },
    {
      actions: <div>Actions</div>,
      isItemSelected: () => true,
      isItemSelectable: () => true,
      onSelect: () => null,
      tooltipContent: () => <b>Tooltip</b>,
    },
    {
      actions: <div>Actions</div>,
      isItemSelected: () => false,
      isItemSelectable: () => false,
      onSelect: () => null,
      tooltipContent: () => <b>Tooltip</b>,
    },
    {
      actions: <div>Actions</div>,
      isItemSelected: () => false,
      isItemSelectable: () => false,
      onSelect: () => null,
      tooltipContent: () => null,
    },
  ];

  it('should render TableBody correctly with just required props', () => {
    const wrapper = shallow(<TableBody {...requiredProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  customProps.forEach((props, index) => {
    it(`should render TableBody correctly for test case ${index}`, () => {
      const wrapper = shallow(<TableBody {...requiredProps} {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
