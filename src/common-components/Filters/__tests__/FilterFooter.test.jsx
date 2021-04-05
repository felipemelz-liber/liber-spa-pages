import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import FilterFooter from '../FilterFooter';
import { FilterButton, ClearButton } from '../Filters.styles';

describe('Testing FilterFooter component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    disabled: false,
    onFilter: sinon.spy(),
    onClear: sinon.spy(),
  };

  it('should render FilterFooter correctly without props', () => {
    const wrapper = shallow(<FilterFooter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render FilterFooter correctly with props', () => {
    const wrapper = shallow(<FilterFooter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFilter when clicking on FilterButton', () => {
    const wrapper = shallow(<FilterFooter {...props} />);
    const filterButton = wrapper.find(FilterButton);
    const { onFilter } = props;
    filterButton.simulate('click');
    expect(onFilter.called).toBeTruthy();
  });
  it('should call onClear when clicking on ClearButton', () => {
    const wrapper = shallow(<FilterFooter {...props} />);
    const clearButton = wrapper.find(ClearButton);
    const { onClear } = props;
    clearButton.simulate('click');
    expect(onClear.called).toBeTruthy();
  });
});
