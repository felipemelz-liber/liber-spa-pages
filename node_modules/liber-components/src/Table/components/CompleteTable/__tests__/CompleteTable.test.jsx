import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { COLUMNS, ITEMS } from '../../../utils';
import CompleteTable from '../CompleteTable';

describe('Testing CompleteTable component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    columns: COLUMNS,
    items: ITEMS,
    onSelectAll: sinon.spy(),
    allChecked: false,
    isItemSelected: sinon.spy(),
    onSelect: sinon.spy(),
    filters: <div>Filtros</div>,
    actions: <div>Ações</div>,
    paginationProps: {
      currentPage: '1',
      pageTotal: '10',
      onChangePage: sinon.spy(),
      onClickNext: sinon.spy(),
      onClickPrev: sinon.spy(),
      onKeyDownPage: sinon.spy(),
      hasListing: true,
      listingProps: {
        onSelectListing: sinon.spy(),
        listing: '10',
        total: String(ITEMS.length),
        listingLabelSingular: 'item',
        listingLabelPlural: 'itens',
      },
    },
  };

  it(`renders CompleteTable correctly with all the props`, () => {
    const wrapper = shallow(<CompleteTable {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly with unselctable items`, () => {
    const wrapper = shallow(<CompleteTable {...props} isItemSelectable={() => false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly with tooltip on unselctable items`, () => {
    const wrapper = shallow(
      <CompleteTable
        {...props}
        isItemSelectable={() => false}
        tooltipContent={() => <div>Tooltip mock</div>}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without header border-top`, () => {
    const wrapper = shallow(<CompleteTable {...props} headerBorderTop={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without filter border-top`, () => {
    const wrapper = shallow(<CompleteTable {...props} filterBorderTop={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without pagination`, () => {
    const { paginationProps, ...remainingProps } = props;
    const wrapper = shallow(<CompleteTable {...remainingProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without actions`, () => {
    const { actions, ...remainingProps } = props;
    const wrapper = shallow(<CompleteTable {...remainingProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without filters`, () => {
    const { filters, ...remainingProps } = props;
    const wrapper = shallow(<CompleteTable {...remainingProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without selection`, () => {
    const { onSelectAll, allChecked, isItemSelected, onSelect, ...remainingProps } = props;
    const wrapper = shallow(<CompleteTable {...remainingProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(`renders CompleteTable correctly without items`, () => {
    const { onSelectAll, allChecked, isItemSelected, onSelect, items, ...remainingProps } = props;
    const wrapper = shallow(<CompleteTable {...remainingProps} items={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
