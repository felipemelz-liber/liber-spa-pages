import sinon from 'sinon';
import { waitFor } from '@testing-library/react';

import UnavailableLimitDialog from '..';
import { renderWithModal } from '../../../vendor/test-utils';

describe('UnavailableLimitDialog tests', () => {
  const props = { onLeaved: sinon.spy(), show: true };

  afterEach(() => {
    sinon.resetHistory();
  });

  afterAll(() => {
    sinon.restore();
  });

  it('should show modal for cancellation when there is no surplusValue', async () => {
    const { findByText } = renderWithModal(UnavailableLimitDialog, props);

    await waitFor(() => findByText('Limite Indisponível'));
    await waitFor(() => findByText(/A antecipação foi cancelada/));
    await waitFor(() => findByText('OK'));
  });

  it('should show modal with surplus value when it has surplusValue', async () => {
    const { findByText } = renderWithModal(UnavailableLimitDialog, {
      surplusValue: 456.4,
      ...props,
    });

    await waitFor(() => findByText('Limite Indisponível'));
    await waitFor(() => findByText(/A antecipação não poderá ser realizada/));
    await waitFor(() => findByText(/O excesso tem o valor de R\$ 456,40/));
    await waitFor(() => findByText('OK'));
  });
});
