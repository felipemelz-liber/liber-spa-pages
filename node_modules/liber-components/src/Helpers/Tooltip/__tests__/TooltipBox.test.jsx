import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TooltipBox from '../TooltipBox';
import Tooltip from '../Tooltip';

describe('Test for Floater Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'tooltip');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  beforeEach(() => {
    props = {
      show: true,
      label: 'label',
      content: <div>content</div>,
      children: <div id="child">mock</div>,
    };
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(<TooltipBox {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Tooltip on mouseMove', () => {
    const wrapper = shallow(<TooltipBox {...props} />);
    const child = wrapper.find('#child');
    child.simulate('mouseMove', { clientX: 0, clientY: 0 });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Tooltip on mouseEnter', () => {
    const wrapper = shallow(<TooltipBox {...props} />);
    const child = wrapper.find('#child');
    child.simulate('mouseEnter');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should remove Tooltip on mouseLeave', () => {
    const wrapper = shallow(<TooltipBox {...props} />);
    wrapper.setState({ showTooltip: true, position: { x: 0, y: 0 } });
    const tooltip = wrapper.find(Tooltip);
    expect(tooltip.length).toBe(1);
    const child = wrapper.find('#child');
    child.simulate('mouseLeave');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should not show tooltip with show=false', () => {
    props.show = false;
    const wrapper = shallow(<TooltipBox {...props} />);
    const child = wrapper.find('#child');
    child.simulate('mouseMove', { clientX: 0, clientY: 0 });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call clearTimeout on component unmount', () => {
    jest.useFakeTimers();
    const wrapper = shallow(<TooltipBox {...props} />);
    wrapper.instance().componentWillUnmount();
    expect(clearTimeout).toBeCalled();
  });

  it('should render correctly being fixed and with contentPostion ', () => {
    const wrapper = shallow(<TooltipBox fixed contentPosition="start" {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
