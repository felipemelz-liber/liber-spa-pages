import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as toastObj from 'liber-components/components/Toast/actions';
import { VendorInvoices } from '../VendorInvoices';

describe('VendorInvoices tests', () => {
  configure({ adapter: new Adapter() });

  const getInvoices = sinon.spy();
  const subscribe = sinon.spy();
  const toastSpy = sinon.spy(toastObj, 'toast');
  sinon.stub(React, 'useEffect').callsArg(0);
  const windowSpy = sinon.spy();
  global.open = windowSpy;

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    sinon.restore();
  });

  it('should render correctly without props', () => {
    const wrapper = shallow(<VendorInvoices />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with loading', () => {
    const wrapper = shallow(<VendorInvoices loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly whend vendor can input xml', () => {
    const wrapper = shallow(<VendorInvoices canInputXml />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call subscribe and getInvoices on render', () => {
    shallow(<VendorInvoices getInvoices={getInvoices} subscribe={subscribe} />);
    expect(getInvoices.called).toBeTruthy();
    expect(subscribe.called).toBeTruthy();
  });

  it('should call window open when report successfuly generated', () => {
    const report = { successful: true, url: 'mock' };
    shallow(<VendorInvoices report={report} />);

    expect(windowSpy.calledWith(report.url)).toBeTruthy();
  });

  it('should call toast when report is unsuccessful', () => {
    const report = { successful: false, errorMessage: 'error' };
    shallow(<VendorInvoices report={report} />);

    expect(toastSpy.called).toBeTruthy();
  });
});
