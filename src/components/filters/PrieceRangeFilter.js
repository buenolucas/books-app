import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components/native';
import {CheckBox, Typography} from '../common';

const Container = styled.View``;

const PrieceRangeFilter = ({updateFilter, selectedFilters}) => {
  const filterRange = id => selectedFilters.some(range => range.id === id);

  return (
    <Container>
      <Typography type="title">Preço</Typography>
      <CheckBox
        label="de R$0 até R$30"
        checked={filterRange('range1')}
        onPress={() => updateFilter({id: 'range1', min: 0, max: 30.99})}
      />
      <CheckBox
        label="de R$31 até R$50"
        checked={filterRange('range2')}
        onPress={() => updateFilter({id: 'range2', min: 31, max: 50.99})}
      />
      <CheckBox
        label="de R$51 até R$100"
        checked={filterRange('range3')}
        onPress={() => updateFilter({id: 'range3', min: 51, max: 100.99})}
      />
      <CheckBox
        label="Mais de R$100"
        checked={filterRange('range4')}
        onPress={() => updateFilter({id: 'range4', min: 101, max: Infinity})}
      />
    </Container>
  );
};

PrieceRangeFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.array.isRequired,
};

export default PrieceRangeFilter;
