import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components/native';
import {CheckBox, Typography} from '../common';

const Container = styled.View``;

const AvailableFormats = ({updateFilter, selectedFilters}) => {
  return (
    <Container>
      <Typography type="title">Formatos Disponíveis</Typography>
      <CheckBox
        label="Epub"
        checked={selectedFilters.indexOf('epub') > -1 && true}
        onPress={() => updateFilter('epub')}
      />
      <CheckBox
        label="PDF"
        checked={selectedFilters.indexOf('pdf') > -1 && true}
        onPress={() => updateFilter('pdf')}
      />
    </Container>
  );
};

export default AvailableFormats;
