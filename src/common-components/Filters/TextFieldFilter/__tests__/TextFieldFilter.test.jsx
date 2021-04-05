import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components';
import TextFieldFilter from '../TextFieldFilter';
import { FilterButton, ClearButton } from '../../Filters.styles';
import FilterFooter from '../../FilterFooter';
import FilterTag from '../../FilterTag';

describe('Testing TextFieldFilter Component', () => {
  configure({ adapter: new Adapter() });

  const props = {
    label: 'Filtro',
    mask: '',
    hintText: 'Faça a busca',
    onFilter: sinon.spy(),
    onClear: sinon.spy(),
  };

  const event = { preventDefault: sinon.spy() };

  afterEach(() => {
    const { onClear, onFilter } = props;
    const { preventDefault } = event;
    onClear.resetHistory();
    onFilter.resetHistory();
    preventDefault.resetHistory();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<TextFieldFilter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = shallow(<TextFieldFilter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFilter when clicking on FilterButton', () => {
    const wrapper = shallow(<TextFieldFilter {...props} />);
    const filterFooter = wrapper.find(FilterFooter);
    const filterButton = filterFooter.dive().find(FilterButton);
    const { onFilter } = props;
    filterButton.simulate('click', event);
    expect(event.preventDefault.called).toBeTruthy();
    expect(onFilter.called).toBeTruthy();
  });
  it('should call onClear when clicking on ClearButton', () => {
    const wrapper = shallow(<TextFieldFilter {...props} />);
    const filterFooter = wrapper.find(FilterFooter);
    const clearButton = filterFooter.dive().find(ClearButton);
    const { onClear } = props;
    clearButton.simulate('click');
    expect(onClear.called).toBeTruthy();
  });
  it('should call onClear when FilterTag clear event is fired', () => {
    const wrapper = shallow(<TextFieldFilter {...props} />);
    const tag = wrapper.find(FilterTag);
    const { onClear } = props;
    tag.simulate('clear');
    expect(onClear.called).toBeTruthy();
  });
});
