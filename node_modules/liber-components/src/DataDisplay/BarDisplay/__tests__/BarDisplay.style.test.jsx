import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import {
  Container,
  Title,
  Value,
  BarSector,
  BarShadow,
  BarSectors,
  BarShadows,
  Bar,
} from '../styles';

describe('Test for BarDisplay style Components', () => {
  configure({ adapter: new Adapter() });

  const theme = {
    barDisplay: {
      value: '#aaa',
      title: '#bbb',
      bar: '#ccc',
    },
  };

  it('should render Container correctly without props', () => {
    const wrapper = shallow(<Container />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Title', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Title />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Title theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Value', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Value />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Value theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with prefix', () => {
      const wrapper = shallow(<Value prefix="pr" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('BarSector', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<BarSector />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<BarSector theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        color: '#000',
        percentage: '50%',
      };
      const wrapper = shallow(<BarSector {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props and pointed', () => {
      const props = {
        color: '#000',
        percentage: '50%',
        point: true,
      };
      const wrapper = shallow(<BarSector {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('BarShadow', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<BarShadow />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<BarShadow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with props', () => {
      const props = {
        color: '#000',
        percentage: '50%',
      };
      const wrapper = shallow(<BarShadow {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render BarSectors correctly without props', () => {
    const wrapper = shallow(<BarSectors />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render BarShadows correctly without props', () => {
    const wrapper = shallow(<BarShadows />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Bar', () => {
    it('should render correctly without props', () => {
      const wrapper = shallow(<Bar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with theme', () => {
      const wrapper = shallow(<Bar theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render correctly with children', () => {
      const bar = (
        <Bar>
          <BarShadows>
            <BarShadow />
            <BarShadow />
          </BarShadows>
          <BarSectors>
            <BarSector />
            <BarSector />
          </BarSectors>
        </Bar>
      );
      const wrapper = shallow(bar);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
