import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { ConfirmationHistory } from '../ConfirmationHistory';

describe('Testing ConfirmationHistory component', () => {
  configure({ adapter: new Adapter() });
  const props = {
    token: 'token',
    sacadoId: 1,
    onSetCredentials: sinon.spy(),
    onFetchConfirmations: sinon.spy(),
    loadingAllPage: false,
    per: 10,
    onUpdateFilters: () => null,
  };
  it('ConfirmationHistory should render correctly', () => {
    const useEffectStub = sinon.stub(React, 'useEffect');
    useEffectStub.callsArg(0);

    const wrapper = shallow(<ConfirmationHistory {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();

    const { onSetCredentials, onFetchConfirmations } = props;
    expect(onSetCredentials.called).toBeTruthy();
    expect(onFetchConfirmations.called).toBeTruthy();
  });
});
