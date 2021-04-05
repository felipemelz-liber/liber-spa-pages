import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { SimulationDrawer } from '../SimulationDrawer';
import LoadingButton from '../../../../../common-components/Buttons/LoadingButton';

describe('SimulationDrawer tests', () => {
  configure({ adapter: new Adapter() });

  const changeQuote = sinon.spy();
  const requestAnticipation = sinon.spy();

  const effectStub = sinon.stub(React, 'useEffect');

  const props = {
    selectedInvoices: [1, 2, 3],
    quote: {
      filed: 'mock',
    },
    rateByPeriod: true,
    changeQuote,
    requestAnticipation,
  };

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    effectStub.restore();
  });

  it('should render correctly with no props', () => {
    const wrapper = shallow(<SimulationDrawer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<SimulationDrawer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call change quote correctly with selectedInvoices', () => {
    effectStub.callsArg(0);
    shallow(<SimulationDrawer {...props} />);

    expect(changeQuote.called).toBeTruthy();
  });

  it('should not call change quote without selectedInvoices', () => {
    effectStub.callsArg(0);
    shallow(<SimulationDrawer />);

    expect(changeQuote.called).toBeFalsy();
  });

  it('should call requestAnticipation on button click', () => {
    const wrapper = shallow(<SimulationDrawer {...props} />);

    const reportButton = wrapper.find(LoadingButton);
    reportButton.simulate('click');

    expect(requestAnticipation.called).toBeTruthy();
  });
});
