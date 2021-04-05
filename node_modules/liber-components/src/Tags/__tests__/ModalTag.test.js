import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { Modal } from '../../Dialog';
import ModalTag from '../ModalTag';
import { WhiteTag } from '../ModalTag.styles';

describe('Test ModalTag Component', () => {
  configure({ adapter: new Adapter() });

  const otherRoot = global.document.createElement('div');
  const modalRoot = global.document.createElement('div');
  otherRoot.setAttribute('id', 'other');
  modalRoot.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(otherRoot);
  body.appendChild(modalRoot);

  let props;
  let effect;
  let ref;
  let state;
  let changeStateShow;
  let setViewportMount;
  beforeEach(() => {
    props = {
      label: 'Label',
      elementId: 'other',
    };
    global.window.innerWidth = 1920;
    global.window.innerHeight = 920;
    global.window.scrollX = 0;
    global.window.scrollY = 0;

    class ResizeObserver {
      observe = sinon.spy();
    }
    global.ResizeObserver = ResizeObserver;

    const getBoundingClientRectSpy = sinon.stub().returns({
      height: 100,
      width: 100,
      top: 10,
      left: 10,
    });

    effect = sinon.stub(React, 'useEffect').callsFake(fn => fn());
    ref = sinon.stub(React, 'useRef');
    ref.onFirstCall().returns({
      current: {
        getBoundingClientRect: getBoundingClientRectSpy,
      },
    });
    ref.onSecondCall().returns({
      current: {
        getBoundingClientRect: getBoundingClientRectSpy,
      },
    });
    changeStateShow = sinon.spy();
    setViewportMount = sinon.spy();
    state = sinon.stub(React, 'useState');
    state.onFirstCall().returns([false, changeStateShow]);
    state.onSecondCall().callsFake(value => [value, setViewportMount]);
  });
  afterEach(() => {
    effect.restore();
    ref.restore();
    state.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = mount(
      <ModalTag>
        <div>content</div>
      </ModalTag>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with props', () => {
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with show === true', () => {
    props.show = true;
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call changeStateShow on WhiteTag click', () => {
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    const tag = wrapper.find(WhiteTag);
    tag.simulate('click');
    expect(changeStateShow.calledWith(true)).toBeTruthy();
  });
  it('should call changeStateShow on modal left', () => {
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    const modal = wrapper.find(Modal);
    modal.instance().props.onLeaved();
    expect(changeStateShow.calledWith(false)).toBeTruthy();
  });
  it('should call onChange on WhiteTag click when prop is defined', () => {
    props.onChange = sinon.spy();
    props.show = false;
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    const tag = wrapper.find(WhiteTag);
    tag.simulate('click');
    expect(props.onChange.calledWith(true)).toBeTruthy();
  });
  it('should call onChange on modal left', () => {
    props.onChange = sinon.spy();
    props.show = true;
    const wrapper = mount(
      <ModalTag {...props}>
        <div>content</div>
      </ModalTag>,
    );
    const modal = wrapper.find(Modal);
    modal.instance().props.onLeaved();
    expect(props.onChange.calledWith(false)).toBeTruthy();
  });
});
