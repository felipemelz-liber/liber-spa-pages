import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Resizable from '../Resizable';

describe('Test for Bar Display', () => {
  configure({ adapter: new Adapter() });
  const Container = props => (
    <div style={{ width: '100px' }} {...props} />
  );

  it('should render correctly small', () => {
    const props = {
      style: {
        fontSize: '30px',
      },
      children: <div>child</div>,
    };
    const comp = (
      <Container>
        <Resizable {...props} />
      </Container>
    );
    const wrapper = mount(comp);
    const res = wrapper.find(Resizable);
    const fontSize = window.getComputedStyle(res.getDOMNode()).getPropertyValue('font-size');
    expect(fontSize).toBe('30px');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render correctly big', () => {
    const props = {
      style: {
        fontSize: '30px',
        width: '200px',
      },
      children: <div>child</div>,
    };
    const comp = (
      <Container>
        <Resizable {...props} />
      </Container>
    );
    const wrapper = mount(comp);
    const res = wrapper.find(Resizable);
    const fontSize = window.getComputedStyle(res.getDOMNode()).getPropertyValue('font-size');
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(fontSize).not.toBe('30px');
  });
});
