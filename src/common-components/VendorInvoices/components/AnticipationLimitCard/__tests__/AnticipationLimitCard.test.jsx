import sinon from 'sinon';
import { waitFor, act } from '@testing-library/react';

import AnticipationLimitCard from '..';
import * as api from '../api';
import { renderWithModal } from '../../../../../vendor/test-utils';

const MOCK_LIMIT = {
  totalValue: 1245.5,
  availableValue: 256.4,
};

describe('AnticipationLimitCard tests', () => {
  const token = 'mockedToken';
  const render = () => renderWithModal(AnticipationLimitCard, { token }, { initialState: {} });

  const getAnticipationLimitStub = sinon.stub(api, 'getAnticipationLimit');

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    sinon.restore();
  });

  it('should show anticipation limit card correctly', async () => {
    getAnticipationLimitStub.resolves(MOCK_LIMIT);
    let query;

    await act(async () => {
      query = render().queryByText;
    });
    const available = await waitFor(() => query(/R\$ 256,40/));
    const total = await waitFor(() => query(/R\$ 1\.245,50/));

    expect(getAnticipationLimitStub.calledWith(token)).toBeTruthy();
    expect(total).not.toBeNull();
    expect(available).not.toBeNull();
  });

  it('should not show anticipation limit card if there is no limit set', async () => {
    getAnticipationLimitStub.resolves(null);
    let query;

    await act(async () => {
      query = render().queryByText;
    });
    const available = await waitFor(() => query(/R\$ 0,00/));
    const total = await waitFor(() => query(/R\$ 0,00/));

    expect(total).toBeNull();
    expect(available).toBeNull();
  });
});
