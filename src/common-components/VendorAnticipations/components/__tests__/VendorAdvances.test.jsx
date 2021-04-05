import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { VendorAdvances } from '../VendorAdvances';

describe('VendorAdvances component test', () => {
  configure({ adapter: new Adapter() });

  const effectStub = sinon.stub(React, 'useEffect');

  const requiredProps = {
    filters: {},
    pagination: {
      current: 1,
      previous: null,
      next: null,
      per: 10,
      pages: 1,
      count: 0,
    },
    onFetchAdvances: sinon.spy(),
    onSubscribeAdvances: sinon.spy(),
    loading: false,
    onUpdatePagination: () => null,
  };

  const concludedAdvances = [
    {
      number: 0,
    },
  ];

  const pendingAdvances = [
    {
      number: 0,
    },
  ];

  const props = {
    concludedAdvances,
    pendingAdvances,
  };

  afterEach(() => {
    const { onFetchAdvances } = requiredProps;
    onFetchAdvances.resetHistory();
  });

  it(`should render correctly with required props`, () => {
    const wrapper = shallow(<VendorAdvances {...requiredProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it(`should render correctly with all props`, () => {
    const wrapper = shallow(<VendorAdvances {...requiredProps} {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it(`should render correctly with concluded advances and no pending advances`, () => {
    const wrapper = shallow(<VendorAdvances {...requiredProps} {...props} pendingAdvances={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it(`should render correctly with no concluded advances and pending advances`, () => {
    const wrapper = shallow(
      <VendorAdvances {...requiredProps} {...props} concludedAdvances={[]} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call onFetchAdvances when rendering advances tab', () => {
    const unitedProps = {
      ...requiredProps,
      ...props,
    };
    effectStub.callsArg(0);
    shallow(<VendorAdvances {...unitedProps} />);
    const { onFetchAdvances } = requiredProps;
    expect(onFetchAdvances.calledWith('concluded')).toBeTruthy();
    expect(onFetchAdvances.calledWith('pending')).toBeTruthy();
  });
});
