import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Container, PageContainer, PrevButton, NextButton, PageInput } from './Pagination.styles';
import Listing from '../Listing';

const noOp = () => {};

try {
  numeral.register('locale', 'liber', {
    delimiters: {
      thousands: '.',
      decimal: '',
    },
  });
} catch (e) {
  noOp();
}
numeral.locale('liber');

const formatNumber = number => numeral(parseInt(number, 10)).format('0,0');

const Pagination = ({
  page,
  pageTotal,
  onChangePage,
  onKeyDownPage,
  onClickNext,
  onClickPrev,
  pageRef,
  withListing,
  listingProps,
}) => (
  <Container>
    {withListing ? <Listing {...listingProps} /> : null}
    <PageContainer>
      Página
      <PageInput ref={pageRef} value={page} onChange={onChangePage} onKeyDown={onKeyDownPage} />
      de {formatNumber(pageTotal)}
      <PrevButton onClick={onClickPrev} disabled={parseInt(page, 10) === 1} />
      <NextButton onClick={onClickNext} disabled={parseInt(page, 10) === parseInt(pageTotal, 10)} />
    </PageContainer>
  </Container>
);

Pagination.propTypes = {
  withListing: PropTypes.bool,
  pageTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageRef: PropTypes.oneOfType([PropTypes.any]),
  onChangePage: PropTypes.func,
  onKeyDownPage: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  listingProps: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    listing: PropTypes.oneOf(['10', '25', '50', '100']),
    listingRef: PropTypes.oneOfType([PropTypes.any]),
    onSelectListing: PropTypes.func,
    listingLabelSingular: PropTypes.string,
    listingLabelPlural: PropTypes.string,
  }),
};

Pagination.defaultProps = {
  page: '',
  pageTotal: '',
  listingProps: {},
  pageRef: () => {},
  onChangePage: () => {},
  onKeyDownPage: () => {},
  onClickNext: () => {},
  onClickPrev: () => {},
  withListing: false,
};

export default Pagination;
