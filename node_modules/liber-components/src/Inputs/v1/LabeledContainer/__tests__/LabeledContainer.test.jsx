import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import LabeledContainer from '../LabeledContainer';

describe('Testing LabeledContainer Component', () => {
  configure({ adapter: new Adapter() });

  it('should not render without label prop', () => {
    const error = sinon.stub(console, 'error');
    shallow(<LabeledContainer />);
    expect(error.calledOnce).toBeTruthy();
    error.restore();
  });

  it('should render correctly with label', () => {
    const wrapper = shallow(<LabeledContainer label="Label" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render error when message is passed', () => {
    const wrapper = shallow(<LabeledContainer label="Label" errorMessage="Error" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render children passed', () => {
    const wrapper = shallow(<LabeledContainer label="Label"><div>test</div></LabeledContainer>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
