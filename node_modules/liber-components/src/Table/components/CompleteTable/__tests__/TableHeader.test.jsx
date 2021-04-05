import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { COLUMNS } from '../../../utils';
import TableHeader from '../TableHeader';
import TableHeaderColumn from '../TableHeaderColumn';

describe('Testing TableHeader component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    columns: COLUMNS,
    hasActions: true,
    onSelectAll: null,
    allChecked: false,
    sortingProps: {
      onSort: sinon.spy(),
      sorting: [],
      sortedColumns: true,
    },
    availableSpace: 0.8,
  };

  it(`calls onSort when clicking on the table header`, () => {
    const {
      sortingProps: { onSort },
    } = props;
    const wrapper = mount(<TableHeader {...props} />);
    const headerCol = wrapper.find(TableHeaderColumn).first();
    headerCol.simulate('click');
    expect(onSort.called).toBeTruthy();
  });
});
