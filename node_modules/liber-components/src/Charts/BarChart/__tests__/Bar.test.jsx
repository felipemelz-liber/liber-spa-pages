import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import moment from 'moment-timezone';
import { Bar as VictoryBar } from 'victory';
import Bar from '../Bar';

describe('Test for Bar', () => {
  configure({ adapter: new Adapter() });
  moment.tz.setDefault('UTC');

  const props = {
    barRatio: 1,
    datum: {
      x: moment('1990-01-01'),
      y: 100,
      tooltipContent: <div>mock</div>,
    },
    events: {
      onMouseMove: sinon.spy(),
      onMouseLeave: sinon.spy(),
    },
    style: {

    },
    colors: {
      pastColor: '#000',
      futureColor: '#000',
    },
  };
  it('should render correctly', () => {
    const wrapper = shallow(<Bar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should trigger tooltip onMouseMove', () => {
    const wrapper = shallow(<Bar {...props} />);
    const victoryBar = wrapper.find(VictoryBar);
    victoryBar.props().events.onMouseMove({ clientX: 0, clientY: 0 });
    expect(wrapper.state('showTooltip')).toBeTruthy();
    expect(wrapper.state('position').x).toBe(0);
    expect(wrapper.state('position').y).toBe(0);
    expect(wrapper.state('tooltip').label).toEqual(moment('1990-01-01').locale('pt-br').format('DD [de] MMMM'));
    expect(wrapper.state('tooltip').content).toEqual(props.datum.tooltipContent);
    expect(props.events.onMouseMove.calledWith({ clientX: 0, clientY: 0 })).toBeTruthy();
  });
  it('should trigger clean tooltip onMouseLeave', () => {
    const wrapper = shallow(<Bar {...props} />);
    const victoryBar = wrapper.find(VictoryBar);
    wrapper.setState({
      showTooltip: true,
      position: {
        x: 0,
        y: 0,
      },
      tooltip: {
        label: '01 de Janeiro',
        content: <div>mock</div>,
      },
    });
    victoryBar.props().events.onMouseLeave('event');
    expect(wrapper.state('showTooltip')).toBeFalsy();
    expect(wrapper.state('position').x).toBeNull();
    expect(wrapper.state('position').y).toBeNull();
    expect(wrapper.state('tooltip').label).toBeNull();
    expect(wrapper.state('tooltip').content).toBeNull();
    expect(props.events.onMouseLeave.calledWith('event')).toBeTruthy();
  });
});
