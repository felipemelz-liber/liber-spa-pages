import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import PieChart from '../PieChart';
import Slice from '../Slice';

describe('Test for PieChart', () => {
  configure({ adapter: new Adapter() });

  const props = {
    onClick: sinon.spy(),
    onMouseEnter: sinon.spy(),
    onMouseLeave: sinon.spy(),
  };
  const theme = {
    pieChart: {
      tooltip: '#aaa',
      flyout: {
        fill: '#bbb',
        stroke: '#ccc',
      },
      colorScale: ['#000', '#111', '#222', '#333'],
    },
  };

  it('should render correctly', () => {
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with theme', () => {
    const wrapper = shallow(<PieChart {...props} theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with data', () => {
    props.data = [
      { x: 'E', y: 250 },
      { x: 'F', y: 150 },
      { x: 'G', y: 100 },
      { x: 'H', y: 500 },
    ];
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with colorScale (string)', () => {
    props.colorScale = 'grayscale';
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with colorScale (array)', () => {
    props.colorScale = ['yellow', 'red', 'green', 'blue'];
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with height', () => {
    props.height = 500;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with width', () => {
    props.width = 500;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with innerRadius', () => {
    props.innerRadius = 50;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with padding(number)', () => {
    props.padding = 35;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with padding(object)', () => {
    props.padding = {
      top: 35, bottom: 25, left: 20, right: 15,
    };
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with labels', () => {
    props.labels = ['X', 'Y', 'Z', 'W'];
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with label radius', () => {
    props.labelRadius = 30;
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with x', () => {
    props.data = [
      {
        label: 'Opti E', x: 'E', y: 250, test: 1,
      },
      {
        label: 'Opti F', x: 'F', y: 150, test: 2,
      },
      {
        label: 'Opti G', x: 'G', y: 100, test: 3,
      },
      {
        label: 'Opti H', x: 'H', y: 500, test: 4,
      },
    ];
    props.x = 'test';
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly with y', () => {
    props.data = [
      {
        label: 'Opti E', x: 'E', y: 250, test: 1,
      },
      {
        label: 'Opti F', x: 'F', y: 150, test: 2,
      },
      {
        label: 'Opti G', x: 'G', y: 100, test: 3,
      },
      {
        label: 'Opti H', x: 'H', y: 500, test: 4,
      },
    ];
    props.x = 'label';
    const wrapper = shallow(<PieChart {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onCLick on click', () => {
    const wrapper = mount(<PieChart {...props} />);
    const slices = wrapper.find(Slice);
    slices.at(0).simulate('click');
    expect(props.onClick.called).toBeTruthy();
  });
  it('should call onMouseEnter when hoverOn', () => {
    const wrapper = mount(<PieChart {...props} />);
    const slices = wrapper.find(Slice);
    slices.at(0).simulate('mouseEnter');
    expect(props.onMouseEnter.called).toBeTruthy();
  });
  it('should call onMouseLeave when hoverOn', () => {
    const wrapper = mount(<PieChart {...props} />);
    const slices = wrapper.find(Slice);
    slices.at(0).simulate('mouseLeave');
    expect(props.onMouseLeave.called).toBeTruthy();
  });
});
