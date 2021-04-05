import React from 'react';
import sinon from 'sinon';
import moment from 'moment';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Filters } from '../Filters';
import { REQUESTED_LT, REQUESTED_GT, STATUS_IN } from '../../../utils';
import { DateFieldFilter } from '../../../../../common-components/Filters';
import OptionsFilter from '../../../../../common-components/Filters/OptionsFilter/OptionsFilter';
import { CleanFilters } from '../Filters.styles';

const clearDateFilters = {
  [REQUESTED_LT]: null,
  [REQUESTED_GT]: null,
};

const clearStatusFilters = {
  [STATUS_IN]: null,
};

const allClearFilters = {
  ...clearDateFilters,
  ...clearStatusFilters,
};

describe('Filters tests', () => {
  configure({ adapter: new Adapter() });

  const changeFilters = sinon.spy();

  const props = {
    changeFilters,
    filters: allClearFilters,
  };

  const filters = {
    ...allClearFilters,
    [STATUS_IN]: [1, 2],
  };

  const rangeSingle = { start: moment(), end: null };

  const rangePeriod = { start: moment(), end: moment() };

  const periodDateResult = {
    [REQUESTED_LT]: rangePeriod.end.format(),
    [REQUESTED_GT]: rangePeriod.start.format(),
  };
  const singleDateResult = {
    [REQUESTED_GT]: rangeSingle.start.startOf('day').format(),
    [REQUESTED_LT]: rangeSingle.start.endOf('day').format(),
  };

  afterEach(() => {
    sinon.resetHistory();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Filters />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call change filters on date filter clear', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(DateFieldFilter);

    filter.simulate('clear');

    expect(changeFilters.calledWith({ ...props.filters, ...clearDateFilters })).toBeTruthy();
  });

  it('should call change filters on options filter clear', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(OptionsFilter);

    filter.simulate('clear');

    expect(changeFilters.calledWith({ ...props.filters, ...clearStatusFilters })).toBeTruthy();
  });

  it('should call change filters on clear all button click', () => {
    const wrapper = shallow(<Filters {...props} filters={filters} />);
    const button = wrapper.find(CleanFilters);

    button.simulate('click');

    expect(changeFilters.calledWith(allClearFilters)).toBeTruthy();
  });

  it('should call change filters correctly on option filter on filter', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(OptionsFilter);

    filter.simulate('filter', [1, 2]);

    expect(changeFilters.calledWith({ ...allClearFilters, [STATUS_IN]: [1, 2] })).toBeTruthy();
  });

  it('should call change filters correctly on date filter onFilter with single date', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(DateFieldFilter);

    filter.simulate('filter', rangeSingle);

    expect(changeFilters.calledWith({ ...allClearFilters, ...singleDateResult })).toBeTruthy();
  });

  it('should call change filters correctly on date filter onFilter with period date', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(DateFieldFilter);

    filter.simulate('filter', rangePeriod);

    expect(changeFilters.calledWith({ ...allClearFilters, ...periodDateResult })).toBeTruthy();
  });
});
