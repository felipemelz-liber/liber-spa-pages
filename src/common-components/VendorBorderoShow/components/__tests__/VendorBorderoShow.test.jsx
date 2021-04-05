import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Icon from '@mdi/react';
import { VendorBorderoShow } from '../VendorBorderoShow';
import { Button } from '../VendorBorderoShow.styles';

describe('VendorBorderoShow component tests', () => {
  configure({ adapter: new Adapter() });

  const testCases = [
    {
      label: 'Concluída',
      status: 'finished',
    },
    {
      label: 'Realizando Pagamento',
      status: 'signed',
    },
  ];

  it('should render correctly without props', () => {
    const wrapper = shallow(<VendorBorderoShow />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with summary loading', () => {
    const wrapper = shallow(<VendorBorderoShow summaryLoading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  testCases.forEach(({ label, status }) => {
    it(`should render correctly with ${label} status`, () => {
      const wrapper = shallow(<VendorBorderoShow status={status} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should render correctly with summary loading', () => {
    const onFetchSummary = sinon.spy();
    const useEffectStub = sinon.stub(React, 'useEffect');
    useEffectStub.callsArg(0);
    shallow(<VendorBorderoShow onFetchSummary={onFetchSummary} />);
    expect(onFetchSummary.called).toBeTruthy();
  });

  it('should call window.history.back() when clicking on back icon button', () => {
    const backStub = sinon.stub(window.history, 'back');
    const wrapper = shallow(<VendorBorderoShow />);
    const backButton = wrapper.find(Icon);
    backButton.simulate('click');
    expect(backStub.called).toBeTruthy();
  });

  it('should have confirmation button only if user hasnt signed yet', () => {
    const operatorsSigned = [
      {
        id: 77,
        name: 'Operator',
        userHasSigned: true,
      },
    ];

    const operatorsNotSigned = [
      {
        id: 77,
        name: 'Operator',
        userHasSigned: false,
      },
    ];

    const signedWrapper = shallow(<VendorBorderoShow userId={77} operators={operatorsSigned} />);
    let confirmationButton = signedWrapper.find(Button);
    expect(confirmationButton.length).toBe(0);

    confirmationButton = null;

    const notSignedWrapper = shallow(
      <VendorBorderoShow userId={77} operators={operatorsNotSigned} />,
    );
    confirmationButton = notSignedWrapper.find(Button);
    expect(confirmationButton.length).toBe(1);
  });
});
