import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import TableHeaderColumn from '../TableHeaderColumn';

describe('Testing TableHeaderColumn component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    column: {
      label: 'Header',
      align: 'left',
      name: 'a',
    },
    sortingProps: {
      onSort: sinon.spy(),
      sortedColumns: true,
      sorting: [],
    },
  };

  it(`calls onSort when clicking on the column header`, () => {
    const {
      sortingProps: { onSort },
    } = props;
    const wrapper = shallow(<TableHeaderColumn {...props} />);
    wrapper.simulate('click');
    expect(onSort.called).toBeTruthy();
  });
});
