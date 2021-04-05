import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Pagination from './Pagination';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

class Page extends React.Component {
  state = {
    listing: '10',
    page: '1',
  };

  handleChangePage = ({ target }) => {
    this.setState({ page: target.value });
  };

  handleSelectListing = listing => {
    this.setState({ listing });
  };

  onClickNext = () => {
    this.setState(state => ({
      page: `${parseInt(state.page, 10) + 1}`,
    }));
  };

  onClickPrev = () => {
    this.setState(state => ({
      page: `${parseInt(state.page, 10) - 1}`,
    }));
  };

  onKeyDownPage = ({ key, target }) => {
    if (key === 'Enter') {
      alert(`Página ${target.value} selecionada`);
    }
  };

  render() {
    const { withListing } = this.props;
    return (
      <Pagination
        page={this.state.page}
        pageTotal="135"
        onChangePage={this.handleChangePage}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
        onKeyDownPage={this.onKeyDownPage}
        withListing={withListing}
        listingProps={{
          onSelectListing: this.handleSelectListing,
          listing: this.state.listing,
          total: '1347',
        }}
      />
    );
  }
}

Page.propTypes = {
  withListing: PropTypes.bool.isRequired,
};

export default {
  title: 'Components 2.0|Pagination',

  parameters: {
    jest: ['KeyValueDropDown'],
  },
};

export const defaultStory = () => (
  <Fragment>
    <div id="tooltip" />
    <Center>
      <Page withListing={false} />
    </Center>
  </Fragment>
);

defaultStory.story = {
  name: 'default',
};

export const withListing = () => (
  <Fragment>
    <div id="tooltip" />
    <Center>
      <Page withListing />
    </Center>
  </Fragment>
);

withListing.story = {
  name: 'with listing',
};
