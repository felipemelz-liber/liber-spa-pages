import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import * as styles from '../ModalTag.styles';

describe('Testing ModalTag Styles', () => {
  configure({ adapter: new Adapter() });
  const { FloatingTag, ...uncontrolled } = styles;
  describe('Uncontrolled', () => {
    Object.keys(uncontrolled).forEach(style => {
      it(`renders ${style} correctly`, () => {
        const App = uncontrolled[style];
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
  describe('Controlled', () => {
    describe('FloatingTag', () => {
      const modalRoot = global.document.createElement('div');
      modalRoot.setAttribute('id', 'modal');
      const body = global.document.querySelector('body');
      body.appendChild(modalRoot);

      it('should not render without position', () => {
        const wrapper = mount(<FloatingTag />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
      it('should render with position', () => {
        const position = {
          x: 100,
          y: 100,
        };
        const wrapper = mount(<FloatingTag position={position} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
