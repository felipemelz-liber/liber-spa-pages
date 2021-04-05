import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from '../../Inputs';
import { FilterRow as Row, FilterLabel as Label, FiltersBox } from './styles';

class Filter extends Component {
  constructor(props) {
    super();
    this.state = { };
    Object.keys(props.data.options).forEach((key) => {
      this.state[key] = true;
    });
  }

  handleFilterChange = (filter) => {
    const filteredState = {};
    const { onFilter } = this.props;
    const data = JSON.parse(JSON.stringify(this.props.data.content));
    Object.keys(data).forEach((key) => {
      const toFilter = data[key].options[filter];
      if (toFilter) {
        data[key].options[filter].show = !this.state[filter];
      }
    });
    filteredState[filter] = !this.state[filter];
    this.setState(filteredState, () => { onFilter(data); });
  }

  render() {
    const {
      data, filterColor,
    } = this.props;

    const mappedFilters = Object.keys(data.options).map(key => (
      <RadioButton
        key={key}
        name={key}
        id={key}
        color={typeof filterColor === 'string' ? filterColor : filterColor[key]}
        labelColor="#717171"
        type="checkbox"
        checked={this.state[key]}
        onChange={() => {
          this.handleFilterChange(key);
        }}
      >
        {data.options[key]}
      </RadioButton>
    ));
    return (
      <Row>
        <Label>Mostrar:</Label>
        <FiltersBox>
          {mappedFilters}
        </FiltersBox>
      </Row>
    );
  }
}

Filter.propTypes = {
  filterColor: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.string,
  ]),
  data: PropTypes.shape({
    options: PropTypes.objectOf(PropTypes.string),
    content: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  onFilter: PropTypes.func,
};
Filter.defaultProps = {
  filterColor: '#cecece',
  onFilter: () => {},
};


export default Filter;
