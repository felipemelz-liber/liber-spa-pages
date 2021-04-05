import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { SimpleSelect } from '../Inputs';
import { ListingContainer, SelectContainer } from './Listing.styles';

try {
  numeral.register('locale', 'liber', {
    delimiters: {
      thousands: '.',
      decimal: '',
    },
  });
} catch (e) {}
numeral.locale('liber');

const formatNumber = number => numeral(parseInt(number, 10)).format('0,0');

const checkPlural = (number, singular, plural) => {
  if (parseInt(number, 10) > 1) {
    return plural;
  }
  return singular;
};

const Listing = ({
  listing,
  total,
  listingRef,
  onSelectListing,
  listingLabelPlural,
  listingLabelSingular,
  showInterval,
}) => {
  return (
    <ListingContainer>
      Listar
      <SelectContainer>
        <SimpleSelect value={listing} onSelect={onSelectListing} ref={listingRef}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </SimpleSelect>
      </SelectContainer>
      por página &ensp;&bull;&ensp;{' '}
      {showInterval ? `${showInterval.start}-${showInterval.end}` : 'total'} de{' '}
      {formatNumber(total)} {checkPlural(total, listingLabelSingular, listingLabelPlural)}
    </ListingContainer>
  );
};

Listing.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  listing: PropTypes.oneOf(['10', '25', '50', '100']),
  listingRef: PropTypes.oneOfType([PropTypes.any]),
  onSelectListing: PropTypes.func,
  listingLabelSingular: PropTypes.string,
  listingLabelPlural: PropTypes.string,
  showInterval: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

Listing.defaultProps = {
  total: '',
  listing: '',
  onSelectListing: () => {},
  listingLabelSingular: 'título',
  listingLabelPlural: 'títulos',
  listingRef: () => {},
  showInterval: null,
};

export default Listing;
