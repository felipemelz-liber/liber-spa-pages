import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components';
import DateFieldFilter from '../DateFieldFilter';
import { FilterButton, ClearButton } from '../../Filters.styles';
import FilterFooter from '../../FilterFooter';
import FilterTag from '../../FilterTag';

describe('Testing DateFieldFilter Component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    label: 'Date label',
    description: 'Selecione o período:',
    onFilter: sinon.spy(),
    onClear: sinon.spy(),
  };

  let clock;
  beforeEach(() => {
    const now = new Date('1234-01-01');
    clock = sinon.useFakeTimers(now.getTime());
  });
  afterEach(() => {
    clock.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<DateFieldFilter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<DateFieldFilter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFilter when clicking on FilterButton', () => {
    const wrapper = shallow(<DateFieldFilter {...props} />);
    const filterFooter = wrapper.find(FilterFooter);
    const filterButton = filterFooter.dive().find(FilterButton);
    const { onFilter } = props;
    filterButton.simulate('click');
    expect(onFilter.called).toBeTruthy();
  });
  it('should call onClear when clicking on ClearButton', () => {
    const wrapper = shallow(<DateFieldFilter {...props} />);
    const filterFooter = wrapper.find(FilterFooter);
    const clearButton = filterFooter.dive().find(ClearButton);
    const { onClear } = props;
    clearButton.simulate('click');
    expect(onClear.called).toBeTruthy();
  });
  it('should call onClear when FilterTag clear event is fired', () => {
    const wrapper = shallow(<DateFieldFilter {...props} />);
    const tag = wrapper.find(FilterTag);
    const { onClear } = props;
    tag.simulate('clear');
    expect(onClear.called).toBeTruthy();
  });
});
