import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import sinon from 'sinon';
import TabCtrl from '../TabsCtrl';
import { TabContentDisplay } from '../Tabs.styles';

describe('Testing TabsCtrl Styles', () => {
  configure({ adapter: new Adapter() });
  let props;
  let effect;
  let state;
  let setter;

  beforeEach(() => {
    props = {
      active: 0,
      header: 'header',
      tabs: [
        {
          key: '1',
          content: 'Content 1',
        },
        {
          key: '2',
          content: 'Content 2',
        },
        {
          key: '3',
          content: 'Content 3',
        },
      ],
    };
    setter = sinon.spy();
    effect = sinon.stub(React, 'useEffect').callsFake(fn => fn());
    state = sinon.stub(React, 'useState').returns([false, setter]);
  });

  afterEach(() => {
    effect.restore();
    state.restore();
  });

  it('should renders correctly', () => {
    const wrapper = shallow(<TabCtrl {...props} />);
    expect(setter.calledWith(true)).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should renders correctly when active = 1', () => {
    props.active = 1;
    const wrapper = shallow(<TabCtrl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should renders correctly when active = 2', () => {
    props.active = 2;
    const wrapper = shallow(<TabCtrl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should renders correctly when active = 100', () => {
    props.active = 100;
    const wrapper = shallow(<TabCtrl {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should stop transitioning on transitioning end', () => {
    props.active = 100;
    const wrapper = shallow(<TabCtrl {...props} />);
    const container = wrapper.find(TabContentDisplay);
    expect(setter.calledWith(true)).toBeTruthy();
    container.simulate('transitionEnd');
    expect(setter.calledWith(false)).toBeTruthy();
  });
});
