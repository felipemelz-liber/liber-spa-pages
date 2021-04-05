import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BorderoInvoicesFilters, filtersNull } from '../BorderoInvoicesFilters';
import { DUPLICATA_NUMBER_IN_BORDERO, VENDOR_CNPJ_EQ, BORDERO_STATUS_IN } from '../../../utils';
import { CleanFilters } from '../../../../VendorAnticipations/components/Filters/Filters.styles';

export const filtersMock = {
  [DUPLICATA_NUMBER_IN_BORDERO]: [10, 20, 60],
  [VENDOR_CNPJ_EQ]: '1234567890',
  [BORDERO_STATUS_IN]: [1, 2, 6],
};

describe('BorderoInvoicesFilters component tests', () => {
  configure({ adapter: new Adapter() });

  const onUpdateFilters = sinon.spy();

  it('should render correctly without props', () => {
    const wrapper = shallow(<BorderoInvoicesFilters />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(
      <BorderoInvoicesFilters onUpdateFilters={onUpdateFilters} filters={filtersMock} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onUpdateFilters with null filters on clicking on clear filters', () => {
    const wrapper = shallow(
      <BorderoInvoicesFilters onUpdateFilters={onUpdateFilters} filters={filtersMock} />,
    );
    const clearButton = wrapper.find(CleanFilters);
    clearButton.simulate('click');
    expect(onUpdateFilters.calledWith(filtersNull)).toBeTruthy();
  });

  it('should not render clear button when all filters are null', () => {
    const wrapper = shallow(
      <BorderoInvoicesFilters onUpdateFilters={onUpdateFilters} filters={filtersNull} />,
    );
    const clearButton = wrapper.find(CleanFilters);
    expect(clearButton.length).toBe(0);
  });
});
