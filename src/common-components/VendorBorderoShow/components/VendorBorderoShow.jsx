import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CompleteTable } from 'liber-components';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import {
  Container,
  ScreenTitleContainer,
  ScreenTitle,
  LoadingContainer,
  Bunny,
  Button,
  CancelButton,
} from './VendorBorderoShow.styles';
import StatusLabel from './StatusLabel';
import ExpansibleCard from './ExpansibleCard/ExpansibleCard';
import CardContent from './CardContent/CardContent';
import {
  fetchSummary,
  fetchInvoices,
  previousPage,
  nextPage,
  setListing,
  setPage,
} from '../actions/VendorBorderoShowActions';
import { BORDERO_STATUS_MAP, getInvoicesColumns } from '../utils';
import { Row } from './CardContent/CardContent.styles';
import BorderoInvoicesFilters from './Filters/BorderoInvoicesFilters';
import InvoiceDialog from '../../../views/invoice-dialog/InvoiceDialog';
import CancellationDialog from '../../CancellationDialog/CancellationDialog';
import { CANCEL_PAGE_URL } from '../urls';
import usePageState from '../../../hooks/usePageState';
import HideFromAdmin from './HideFromAdmin/HideFromAdmin';
import { dispatchDataLayerEvent } from '../../../vendor/Utils';

export const VendorBorderoShow = ({
  status,
  onFetchSummary,
  summaryLoading,
  onFetchInvoices,
  invoices,
  pagination,
  filters,
  invoicesLoading,
  onNextPage,
  onPreviousPage,
  goToPage,
  onSetListing,
  userId,
  operators,
  borderoIds,
  hasDocument,
  token,
  isAdmin,
  vendorId,
}) => {
  const { current, pages: pageTotal, count: invoiceTotal, per } = pagination;

  const [invoiceShowOpen, setInvoiceShowOpen] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);
  const [pageState, setPageState, onKeyDownPage] = usePageState(current, pageTotal, goToPage);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [borderoId] = borderoIds;

  React.useEffect(() => {
    onFetchSummary();
  }, []);

  React.useEffect(() => {
    onFetchInvoices();
  }, [current, per, filters]);

  const getInterval = () => {
    const end = current * per;
    const start = (current - 1) * per + 1;
    return { start: String(start), end: String(end > invoiceTotal ? invoiceTotal : end) };
  };

  const handleBack = () => window.history.back();

  const needUserConfirmation = () => {
    let need = false;
    operators.forEach(({ id, userHasSigned }) => {
      if (userId === id && !userHasSigned && status !== 'canceled') {
        need = true;
      }
    });
    return need;
  };

  const handleConfirmation = () => {
    dispatchDataLayerEvent('showBorderoConfirmarAntecipacao', isAdmin);

    const ids = borderoIds.map(id => `ids[]=${id}`).join('&');

    window.location.href = `/fornecedor/antecipacoes/sign?${ids}${
      hasDocument ? '&generated=true' : ''
    }`;
  };

  const handleCancellationConfirm = () => {
    dispatchDataLayerEvent('showBorderoCancelarAntecipacao', isAdmin);

    window.location.href = `${CANCEL_PAGE_URL}?id=${borderoIds[0]}`;
  };

  return (
    <>
      <Container>
        <ScreenTitleContainer>
          <HideFromAdmin>
            <Icon onClick={handleBack} path={mdiArrowLeft} />
          </HideFromAdmin>
          <ScreenTitle>Antecipação</ScreenTitle>
          <Row justify="space-between">
            {status && BORDERO_STATUS_MAP[status] && (
              <StatusLabel status={BORDERO_STATUS_MAP[status].type}>
                {BORDERO_STATUS_MAP[status].label}
              </StatusLabel>
            )}
            {operators && needUserConfirmation() && (
              <HideFromAdmin>
                <div>
                  <CancelButton onClick={() => setDialogOpen(true)}>CANCELAR</CancelButton>
                  <Button onClick={handleConfirmation}>Confirmar</Button>
                </div>
              </HideFromAdmin>
            )}
          </Row>
        </ScreenTitleContainer>
        {!summaryLoading && (
          <ExpansibleCard
            buttonText={{
              closed: 'Mostrar Confirmação e Pagamento',
              open: 'Ocultar Confirmação e Pagamento',
            }}
            collapsedHeight={264}
            showButton={status !== 'created'}
            isAdmin={isAdmin}
          >
            <CardContent />
          </ExpansibleCard>
        )}
        <Row height={40} />
        <CompleteTable
          items={invoicesLoading ? [] : invoices}
          columns={getInvoicesColumns({
            borderoStatus: status,
            setInvoiceId,
            setInvoiceShowOpen,
            isAdmin,
          })}
          filters={<BorderoInvoicesFilters isAdmin={isAdmin} />}
          emptyState={
            invoicesLoading ? (
              <LoadingContainer>
                <Bunny />
              </LoadingContainer>
            ) : undefined
          }
          paginationProps={{
            currentPage: String(pageState),
            pageTotal: String(pageTotal),
            onClickNext: onNextPage,
            onClickPrev: onPreviousPage,
            onChangePage: ({ target: { value } }) => {
              setPageState(value);
            },
            onKeyDownPage,
            hasListing: true,
            listingProps: {
              listing: String(per),
              total: String(invoiceTotal),
              showInterval: getInterval(pagination),
              onSelectListing: onSetListing,
            },
          }}
        />
        <InvoiceDialog
          token={token}
          open={invoiceShowOpen}
          invoiceId={invoiceId}
          borderoId={borderoId}
          vendorId={vendorId}
          isAdmin={isAdmin}
          onClose={() => setInvoiceShowOpen(false)}
        />
      </Container>
      <CancellationDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        onConfirm={handleCancellationConfirm}
      />
    </>
  );
};

VendorBorderoShow.propTypes = {
  status: PropTypes.string,
  onFetchSummary: PropTypes.func,
  summaryLoading: PropTypes.bool,
  onFetchInvoices: PropTypes.func,
  invoices: PropTypes.arrayOf(PropTypes.shape({})),
  pagination: PropTypes.shape({
    current: PropTypes.number,
    previous: PropTypes.number,
    next: PropTypes.number,
    per: PropTypes.number,
    pages: PropTypes.number,
    count: PropTypes.number,
  }),
  filters: PropTypes.shape({}),
  invoicesLoading: PropTypes.bool,
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  goToPage: PropTypes.func,
  onSetListing: PropTypes.func,
  userId: PropTypes.number,
  operators: PropTypes.arrayOf(PropTypes.shape({})),
  borderoIds: PropTypes.arrayOf(PropTypes.number),
  hasDocument: PropTypes.bool,
  token: PropTypes.string,
  isAdmin: PropTypes.bool,
  vendorId: PropTypes.number,
};

VendorBorderoShow.defaultProps = {
  status: null,
  onFetchSummary: () => {},
  summaryLoading: false,
  onFetchInvoices: () => [],
  invoices: [],
  pagination: {
    current: 1,
    previous: null,
    next: null,
    per: 10,
    pages: 1,
    count: 0,
  },
  filters: {},
  invoicesLoading: false,
  onNextPage: () => null,
  onPreviousPage: () => null,
  goToPage: () => null,
  onSetListing: () => null,
  userId: null,
  operators: [],
  borderoIds: [],
  hasDocument: false,
  token: '',
  isAdmin: false,
  vendorId: null,
};

const mapStateToProps = ({
  vendorBorderoShow: {
    summary: { status },
    summaryLoading,
    invoices,
    pagination,
    filters,
    invoicesLoading,
    operator: { id: userId },
    summary: { operators, invoiceTransferAgreementUrl: hasDocument },
    borderoIds,
    token,
    isAdmin,
    fornecedorId: vendorId,
  },
}) => ({
  status,
  summaryLoading,
  invoices,
  pagination,
  filters,
  invoicesLoading,
  userId,
  operators,
  borderoIds,
  hasDocument: Boolean(hasDocument),
  token,
  isAdmin,
  vendorId,
});

const mapDispatchToProps = {
  onFetchSummary: fetchSummary,
  onFetchInvoices: fetchInvoices,
  onNextPage: nextPage,
  onPreviousPage: previousPage,
  onSetListing: setListing,
  goToPage: setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorBorderoShow);
