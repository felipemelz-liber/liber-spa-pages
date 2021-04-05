import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { PageInput, PrevButton, NextButton } from '../Pagination.styles';
import Pagination from '../Pagination';

describe('Testing Pagination Component', () => {
  configure({ adapter: new Adapter() });
  let props;

  beforeEach(() => {
    props = {
      page: '1',
      pageTotal: '10',
      onChangePage: sinon.spy(),
      onKeyDownPage: sinon.spy(),
      onClickNext: sinon.spy(),
      onClickPrev: sinon.spy(),
    };
  });
  it('renders Pagination correctly without props', () => {
    const wrapper = shallow(<Pagination />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Pagination correctly with props', () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders Pagination correctly with props and withListing', () => {
    const wrapper = shallow(<Pagination {...props} withListing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onChangePage on page input change', () => {
    const wrapper = shallow(<Pagination {...props} />);
    const input = wrapper.find(PageInput);
    input.simulate('change');
    expect(props.onChangePage.called).toBeTruthy();
  });
  it('should call onKeyDownPage on page input keyDown', () => {
    const wrapper = shallow(<Pagination {...props} />);
    const input = wrapper.find(PageInput);
    input.simulate('keyDown');
    expect(props.onKeyDownPage.called).toBeTruthy();
  });
  it('should call onClickNext on next button click', () => {
    const wrapper = shallow(<Pagination {...props} />);
    const button = wrapper.find(NextButton);
    button.simulate('click');
    expect(props.onClickNext.called).toBeTruthy();
  });
  it('should call onClickPrev on prev button click', () => {
    const wrapper = shallow(<Pagination {...props} />);
    const button = wrapper.find(PrevButton);
    button.simulate('click');
    expect(props.onClickPrev.called).toBeTruthy();
  });
});
