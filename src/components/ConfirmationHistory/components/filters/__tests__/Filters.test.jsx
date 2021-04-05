import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components';
import Filters from '../Filters';
import { DateFieldFilter } from '../../../../../common-components/Filters';

describe('Testing Filters Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = { count: 10, handleFilter: sinon.spy() };
  });
  it('should render correctly', () => {
    const wrapper = shallow(<Filters {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with calendar open', () => {
    const wrapper = shallow(<Filters {...props} />);
    const { handleFilter } = props;
    const tag = wrapper.find(DateFieldFilter);
    tag.simulate('filter', { start: '11/11/2001', end: '12/01/2002' });
    expect(handleFilter.calledWith({ start: '11/11/2001', end: '12/01/2002' })).toBeTruthy();
  });
  it('should call handleFilter on FilterButton click', () => {
    const wrapper = shallow(<Filters {...props} />);
    const filter = wrapper.find(DateFieldFilter);
    const { handleFilter } = props;
    filter.simulate('clear');
    expect(
      handleFilter.calledWith({
        start: null,
        end: null,
      }),
    ).toBeTruthy();
  });
});
