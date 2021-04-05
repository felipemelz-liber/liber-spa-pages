import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { ChartContainer, ChartLabel, PieChart } from '../../';
import { Slice } from '../../PieChart';

describe('Test for ChartLabel component', () => {
  configure({ adapter: new Adapter() });

  let props;
  const theme = {
    chartContainer: {
      defaultColors: ['#aaa', '#bbb', '#ccc', '#ddd'],
    },
  };

  beforeEach(() => {
    props = {
      onHighlightStart: sinon.spy(),
      onHighlightChartStart: sinon.spy(),
      onHighlightLabelStart: sinon.spy(),
      onHighlightEnd: sinon.spy(),
      onHighlightChartEnd: sinon.spy(),
      onHighlightLabelEnd: sinon.spy(),
    };
  });

  it('should render correctly without props', () => {
    const container = (
      <ChartContainer {...props}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with theme', () => {
    const container = (
      <ChartContainer {...props} theme={theme}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should highlight Label when mouseover chart', () => {
    const container = (
      <ChartContainer {...props}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    const chart = wrapper.find(PieChart);
    const slices = chart.find(Slice);
    slices.at(0).simulate('mouseEnter');
    expect(wrapper.state('target')).toBe('0');
    const labels = wrapper.find(ChartLabel);
    expect(labels.at(0).props().highlight).toBe('1');
    expect(labels.at(1).props().highlight).toBe('0.5');
    expect(labels.at(2).props().highlight).toBe('0.5');
    expect(labels.at(3).props().highlight).toBe('0.5');
    expect(props.onHighlightStart.called).toBeTruthy();
    expect(props.onHighlightChartStart.called).toBeTruthy();
    expect(props.onHighlightLabelStart.called).toBeFalsy();
  });
  it('should highlight Label when mouseleave chart', () => {
    const container = (
      <ChartContainer {...props}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    const chart = wrapper.find(PieChart);
    const slices = chart.find(Slice);
    slices.at(0).simulate('mouseLeave');
    expect(wrapper.state('target')).toBe(null);
    const labels = wrapper.find(ChartLabel);
    expect(labels.at(0).props().highlight).toBe('1');
    expect(labels.at(1).props().highlight).toBe('1');
    expect(labels.at(2).props().highlight).toBe('1');
    expect(labels.at(3).props().highlight).toBe('1');
    expect(props.onHighlightEnd.called).toBeTruthy();
    expect(props.onHighlightChartEnd.called).toBeTruthy();
    expect(props.onHighlightLabelEnd.called).toBeFalsy();
  });
  it('should highlight Slice when mouseover label', () => {
    const container = (
      <ChartContainer {...props}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    const labels = wrapper.find(ChartLabel);
    labels.at(0).simulate('mouseEnter');
    const chart = wrapper.find(PieChart);
    expect(wrapper.state('target')).toBe('0');
    expect(chart.props().target).toBe('0');
    expect(props.onHighlightStart.called).toBeTruthy();
    expect(props.onHighlightLabelStart.called).toBeTruthy();
    expect(props.onHighlightChartStart.called).toBeFalsy();
  });
  it('should highlight Slice when mouseLeave label', () => {
    const container = (
      <ChartContainer {...props}>
        <PieChart />
        <ChartLabel>0</ChartLabel>
        <ChartLabel>1</ChartLabel>
        <ChartLabel>2</ChartLabel>
        <ChartLabel>3</ChartLabel>
      </ChartContainer>
    );
    const wrapper = mount(container);
    const labels = wrapper.find(ChartLabel);
    labels.at(0).simulate('mouseLeave');
    const chart = wrapper.find(PieChart);
    expect(wrapper.state('target')).toBe(null);
    expect(chart.props().target).toBe(null);
    expect(props.onHighlightEnd.called).toBeTruthy();
    expect(props.onHighlightLabelEnd.called).toBeTruthy();
    expect(props.onHighlightChartEnd.called).toBeFalsy();
  });
});
