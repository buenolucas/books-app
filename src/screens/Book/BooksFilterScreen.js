import React from 'react';
import styled from 'styled-components/native';
import {Typography, CheckBox, Button} from '../../components/common';
import {
  AvailableFormatsFilter,
  SaleabilityFilter,
  PrieceRangeFilter,
} from '../../components/filters';

import {
  filterBooks,
  availableFormatFilter,
  saleabilityFilter,
  prieceFilter,
} from '../../utils/books';
import RouteNames from '../../RouteNames';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const Form = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-top: 16px;
`;

class BooksFilterScreen extends React.Component {
  constructor(props) {
    super(props);
    const filters = props.route.params.filters || {};
    console.log('Abre!!!');
    this.state = {
      availableFormats: filters.availableFormats || [],
      priece: filters.priece || [],
      saleability: filters.saleability || [],
    };
  }
  updatePriece = value => {
    let terms = this.state.priece;
    const index = terms.findIndex(term => term.id === value.id);
    index == -1 ? terms.push(value) : terms.splice(index, 1);
    this.setState({priece: terms});
  };
  updateAvailableFormats = value => {
    let terms = this.state.availableFormats;
    const index = terms.indexOf(value);
    index == -1 ? terms.push(value) : terms.splice(index, 1);
    this.setState({availableFormats: terms});
  };
  updateSebility = value => {
    let terms = this.state.saleability;
    const index = terms.indexOf(value);
    index == -1 ? terms.push(value) : terms.splice(index, 1);

    this.setState({saleability: terms});
  };
  onPress = () => {
    const filterParams =
      (this.state.availableFormats.length > 0 ||
        this.state.priece.length > 0 ||
        this.state.saleability.length > 0) &&
      this.state;

    this.props.navigation.navigate(RouteNames.BooksResults, {
      filters: filterParams,
    });
  };

  render() {
    const {availableFormats, priece, saleability} = this.state;
    return (
      <Container>
        <Form>
          <PrieceRangeFilter
            selectedFilters={priece}
            updateFilter={this.updatePriece}
          />
          <AvailableFormatsFilter
            selectedFilters={availableFormats}
            updateFilter={this.updateAvailableFormats}
          />
          <SaleabilityFilter
            selectedFilters={saleability}
            updateFilter={this.updateSebility}
          />
        </Form>
        <Button label="Filtrar Agora" onPress={() => this.onPress()} />
      </Container>
    );
  }
}

export default BooksFilterScreen;
