import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import ArrayFieldFilter from '../ArrayFieldFilter';
import { ClearButton, FilterButton, TextField } from '../ArrayFieldFilter.styles';
import FilterTag from '../../FilterTag';

describe('ArrayFieldFilter tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    label: 'mock',
    selectedItems: ['mock', 'mock', 'mock'],
    onFilter: sinon.spy(),
    onClear: sinon.spy(),
  };

  const event = { preventDefault: sinon.spy() };

  afterEach(() => {
    const { onFilter, onClear } = props;
    const { preventDefault } = event;
    onFilter.resetHistory();
    onClear.resetHistory();
    preventDefault.resetHistory();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<ArrayFieldFilter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<ArrayFieldFilter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onFilter when filter Button is clicked', () => {
    const wrapper = shallow(<ArrayFieldFilter {...props} />);
    wrapper.find(FilterButton).simulate('click', event);

    const { onFilter } = props;
    expect(event.preventDefault.called).toBeTruthy();
    expect(onFilter.called).toBeTruthy();
  });

  it('should call onClear when clear button is clicked', () => {
    const wrapper = shallow(<ArrayFieldFilter {...props} />);
    wrapper.find(ClearButton).simulate('click');
    const { onClear } = props;
    expect(onClear.called).toBeTruthy();
  });

  it('should call onClear when FilterTagClears', () => {
    const wrapper = shallow(<ArrayFieldFilter {...props} />);
    wrapper.find(FilterTag).simulate('clear');
    const { onClear } = props;
    expect(onClear.called).toBeTruthy();
  });

  it('should call onFilter with correct values', () => {
    const wrapper = shallow(<ArrayFieldFilter {...props} />);

    wrapper.find(TextField).simulate('change', 'mock, mock; mock mock');
    wrapper.find(FilterButton).simulate('click', event);

    const { onFilter } = props;
    expect(event.preventDefault.called).toBeTruthy();
    expect(onFilter.calledWith(['mock', 'mock', 'mock', 'mock'])).toBeTruthy();
  });
});
