import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { PrimaryButton } from 'liber-components';
import { HideFromAdmin } from '../HideFromAdmin';

describe('HideFromAdmin component tests', () => {
  configure({ adapter: new Adapter() });

  it('should not render children when is admin', () => {
    const wrapper = shallow(
      <HideFromAdmin isAdmin>
        <PrimaryButton>Button</PrimaryButton>
      </HideFromAdmin>,
    );
    const button = wrapper.find(PrimaryButton);

    expect(button.length).toBe(0);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render children when is not admin', () => {
    const wrapper = shallow(
      <HideFromAdmin>
        <PrimaryButton>Button</PrimaryButton>
      </HideFromAdmin>,
    );
    const button = wrapper.find(PrimaryButton);

    expect(button.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
