import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components/native';
import {CheckBox, Typography} from '../common';

const Container = styled.View``;

const SaleabilityFilter = ({updateFilter, selectedFilters}) => {
  return (
    <Container>
      <Typography type="title">Disponibilidade</Typography>
      <CheckBox
        label="Gratuito"
        checked={selectedFilters.indexOf('FREE') > -1 && true}
        onPress={() => updateFilter('FREE')}
      />
      <CheckBox
        label="À Venda"
        checked={selectedFilters.indexOf('FOR_SALE') > -1 && true}
        onPress={() => updateFilter('FOR_SALE')}
      />
      <CheckBox
        label="Pré-Venda"
        checked={selectedFilters.indexOf('FOR_PREORDER') > -1 && true}
        onPress={() => updateFilter('FOR_PREORDER')}
      />
      <CheckBox
        label="Indispoível"
        checked={selectedFilters.indexOf('NOT_FOR_SALE') > -1 && true}
        onPress={() => updateFilter('NOT_FOR_SALE')}
      />
    </Container>
  );
};

SaleabilityFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.array.isRequired,
};

export default SaleabilityFilter;
