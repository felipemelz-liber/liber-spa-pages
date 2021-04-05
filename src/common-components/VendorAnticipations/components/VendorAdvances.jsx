import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CompleteTable, ToastContainer } from 'liber-components';
import {
  TitleContainer,
  ScreenTitle,
  LoadingBlock,
  Loading,
  DisableBootstrap,
  HeaderText,
  HelpLink,
  Container,
  SubTitle,
} from './VendorAdvances.styles';
import { updatePagination, fetchAdvances } from '../actions/VendorAdvancesActions';
import { COLUMNS_ADVANCE_REQUESTED, getColumns } from '../utils';
import PendingAdvances from './PendingAdvances/PendingAdvances';
import Filters from './Filters/Filters';
import usePageState from '../../../hooks/usePageState';
import HideFromAdmin from './HideFromAdmin/HideFromAdmin';

const getHeaderText = (concludedAdvances, pendingAdvances) => {
  if (concludedAdvances.length === 0 && pendingAdvances.length === 0) {
    return (
      <>
        Não encontramos nenhum registro de antecipações realizadas. <br />
        Verifique em <HelpLink href="/fornecedor/duplicatas">Títulos</HelpLink> se é possível fazer
        a sua primeira antecipação.
      </>
    );
  }
  if (pendingAdvances.length === 0) {
    return (
      <>
        Não encontramos nenhuma solicitação em andamento.
        <br /> Confira abaixo o seu histórico de antecipações.
      </>
    );
  }

  return (
    <>
      Encontramos {pendingAdvances.length} solicitação em andamento.
      <br /> Verifique se existem ações pendentes ou confira o histórico de antecipações.
    </>
  );
};

export const VendorAdvances = ({
  concludedAdvances,
  pendingAdvances,
  pagination,
  onUpdatePagination,
  onFetchAdvances,
  loading,
  filters,
  isAdmin,
  onDetailsClick,
}) => {
  const { current, per, pages, count } = pagination;

  const goToPage = selectedPage => {
    onUpdatePagination({ per, page: selectedPage });
  };

  const [pageState, setPageState, onKeyDownPage] = usePageState(current, pages, goToPage);

  React.useEffect(() => {
    onFetchAdvances('pending');
  }, []);

  React.useEffect(() => {
    onFetchAdvances('concluded');
  }, [current, per, filters]);

  const listingStart = () => String((current - 1) * per + 1);
  const listingEnd = () => {
    const end = (current - 1) * per + per;
    if (count > end) return String(end);
    return String(count);
  };

  const handleChangePagination = paginationParams => {
    onUpdatePagination(paginationParams);
  };

  const handlePageInputChange = ({ target: { value } }) => {
    setPageState(value);
  };

  return (
    <>
      <DisableBootstrap />
      <LoadingBlock loading={loading}>
        {loading ? <Loading loop /> : null}
        <Container>
          <HideFromAdmin>
            <TitleContainer>
              <ScreenTitle>Antecipações</ScreenTitle>
            </TitleContainer>
            <HeaderText>{getHeaderText(concludedAdvances, pendingAdvances)}</HeaderText>
            {/* TODO: commented until FAQ exists
            <HelpLink>
              Saiba mais sobre as antecipações
            </HelpLink>
            */}
          </HideFromAdmin>
          <PendingAdvances onDetailsClick={onDetailsClick} isAdmin={isAdmin} />
          {pendingAdvances.length > 0 ? <SubTitle>Histórico de Antecipações</SubTitle> : null}
          <CompleteTable
            items={concludedAdvances}
            columns={getColumns(isAdmin, onDetailsClick)}
            filters={<Filters />}
            paginationProps={{
              currentPage: String(pageState),
              pageTotal: String(pages),
              onChangePage: handlePageInputChange,
              onKeyDownPage,
              onClickNext: () => handleChangePagination({ per, page: current + 1 }),
              onClickPrev: () => handleChangePagination({ per, page: current - 1 }),
              hasListing: true,
              listingProps: {
                onSelectListing: selectedListing =>
                  handleChangePagination({
                    per: parseInt(selectedListing, 10),
                    page: 1,
                  }),
                listing: String(per),
                total: String(count),
                listingLabelSingular: 'adiantamento',
                listingLabelPlural: 'adiantamentos',
                showInterval: {
                  start: listingStart(),
                  end: listingEnd(),
                },
              },
            }}
          />
        </Container>
      </LoadingBlock>

      <ToastContainer />
    </>
  );
};

VendorAdvances.propTypes = {
  pagination: PropTypes.shape({
    count: PropTypes.number,
    current: PropTypes.number,
    next: PropTypes.number,
    pages: PropTypes.number,
    per: PropTypes.number,
    previous: PropTypes.number,
  }).isRequired,
  onUpdatePagination: PropTypes.func,
  concludedAdvances: PropTypes.arrayOf(PropTypes.object),
  pendingAdvances: PropTypes.arrayOf(PropTypes.object),
  filters: PropTypes.shape({}),
  onFetchAdvances: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onDetailsClick: PropTypes.func,
};

VendorAdvances.defaultProps = {
  onUpdatePagination: () => null,
  onDetailsClick: () => null,
  concludedAdvances: [],
  pendingAdvances: [],
  filters: {},
};

const mapStateToProps = ({
  vendorAdvances: { pagination, concludedAdvances, pendingAdvances, loading, filters, isAdmin },
}) => ({
  pagination,
  concludedAdvances,
  pendingAdvances,
  loading,
  filters,
  isAdmin,
});

const mapDispatchToProps = {
  onUpdatePagination: updatePagination,
  onFetchAdvances: fetchAdvances,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorAdvances);
