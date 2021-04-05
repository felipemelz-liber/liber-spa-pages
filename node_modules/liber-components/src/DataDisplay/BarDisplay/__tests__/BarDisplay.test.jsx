import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import BarDisplay from '../BarDisplay';
import { BarSector } from '../styles';

describe('Test for Bar Display', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly without props', () => {
    const wrapper = shallow(<BarDisplay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with value and label', () => {
    const wrapper = shallow(<BarDisplay label="test">3</BarDisplay>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with prefix', () => {
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
    };
    const wrapper = shallow(<BarDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with sectors', () => {
    const sectors = [
      {
        percentage: '60%',
        color: ['#00ccff', '#009dff'],
        events: {
          onEvent1: sinon.spy(),
        },
        tooltipLabel: 'Valor a Receber',
        tooltipContent: <div>Content 1</div>,
      },
      {
        percentage: '40%',
        color: ['#88f3e2', '#50e3c2'],
        events: {
          onEvent2: sinon.spy(),
        },
      },
    ];
    const props = {
      children: '3',
      label: 'test',
      currency: 'R$',
      sectors,
    };
    const wrapper = shallow(<BarDisplay {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render fire event', () => {
    const sectors = [
      {
        percentage: '60%',
        color: ['#00ccff', '#009dff'],
        events: {
          onEvent0: sinon.spy(),
        },
        tooltipLabel: 'Valor a Receber',
        tooltipContent: <div>Content 1</div>,
      },
      {
        percentage: '40%',
        color: ['#88f3e2', '#50e3c2'],
        events: {
          onEvent1: sinon.spy(),
        },
      },
    ];
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
      sectors,
    };
    const wrapper = shallow(<BarDisplay {...props} />);
    const sectorsComp = wrapper.find(BarSector);
    sectorsComp.at(0).simulate('event0');
    expect(sectors[0].events.onEvent0.called).toBeTruthy();
    sectorsComp.at(1).simulate('event1');
    expect(sectors[1].events.onEvent1.called).toBeTruthy();
  });
  it('should show tooltip onMouseMove', () => {
    const sectors = [
      {
        percentage: '60%',
        color: ['#00ccff', '#009dff'],
        events: {
          onEvent0: sinon.spy(),
        },
        tooltipLabel: 'Valor a Receber',
        tooltipContent: <div>Content 1</div>,
      },
      {
        percentage: '40%',
        color: ['#88f3e2', '#50e3c2'],
        events: {
          onEvent1: sinon.spy(),
        },
      },
    ];
    const props = {
      children: '3',
      label: 'test',
      prefix: 'R$',
      sectors,
    };
    const wrapper = shallow(<BarDisplay {...props} />);
    const sector = wrapper.find(BarSector);
    sector.at(0).simulate('mouseMove', { clienX: 0, clientY: 0 });
    expect(wrapper.state('showTooltip')).toBeTruthy();
  });
});
