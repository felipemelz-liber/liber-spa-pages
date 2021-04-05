import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { COLUMNS } from '../../../utils';
import TableRow from '../TableRow';
import { CheckboxCell } from '../CompleteTable.styles';
import { TooltipBox } from '../../../../Helpers';

describe('Testing TableRow component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    item: {
      id: 1,
      name: 'Item 1',
      date: '01/01/2020',
      value: 100,
    },
    columns: COLUMNS,
    actions: <div></div>,
    availableSpace: 0.8,
    hasSelection: true,
    isItemSelected: () => false,
    onSelect: sinon.spy(),
  };

  it(`should call onSelect when clicking on the row`, () => {
    const { onSelect } = props;
    const wrapper = shallow(<TableRow {...props} />);
    wrapper.simulate('click');
    expect(onSelect.called).toBeTruthy();
  });
  it(`should have tooltip only when tooltipContent is set`, () => {
    let tooltip;

    const withTooltipWrapper = shallow(<TableRow {...props} tooltipContent={() => 'Tooltip'} />);
    tooltip = withTooltipWrapper.find(TooltipBox);
    expect(tooltip.prop('show')).toBeTruthy();

    const withoutTooltipWrapper = shallow(<TableRow {...props} />);
    tooltip = withoutTooltipWrapper.find(TooltipBox);
    expect(tooltip.prop('show')).toBeFalsy();
  });
});
