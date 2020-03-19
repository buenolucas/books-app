import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import BooksFetchList from '../../components/books/BooksFetchList';

import {fetchSearchBooks} from '../../api/books';
import {Icon, RoundedButton} from '../../components/common';
import RouteNames from '../../RouteNames';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

function BooksResultsScreen({route, navigation}) {
  console.log('Init>', route.params);
  const [filters, setFilters] = useState(route.params.filters);
  useEffect(() => {
    console.log('useEffect');
    setFilters(route.params.filters);
  });

  const openFilters = () => {
    console.log('openFilters', filters);
    navigation.navigate(RouteNames.BooksFilter, {
      filters: filters,
    });
  };

  const clearFilters = () => {
    console.log('clearFilters', filters);
    route.params.filters = undefined;
    setFilters({});
  };

  const hasFilters = filters && true;
  return (
    <Container>
      <BooksFetchList
        navigation={navigation}
        fetchFunction={fetchSearchBooks}
        query={route.params.query}
        hasFilters={hasFilters}
        filters={filters}
        onFiltersPress={openFilters}
        onClearFilter={clearFilters}
      />
    </Container>
  );
}

class BooksResultsScreen2 extends React.Component {
  constructor(props) {
    super(props);
    /*
    console.log('Construct', this.state);
    this.state = {
      filters: props.route.params.filters || {},
      hasFilters: props.route.params.filters && true,
    };
    */
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps);
    return true;
  }
  componentDidMount() {
    console.log('DidMount', this.state);
    const {route} = this.props;
    this.setState({
      filters: route.params.filters || {},
      hasFilters: route.params.filters && true,
    });
  }
  openFilters = () => {
    const {navigation} = this.props;
    const {filters} = this.state;
    navigation.navigate(RouteNames.BooksFilter, {
      filters: filters,
    });
  };
  clearFilters = () => {
    this.setState({filters: {}, hasFilters: false});
  };
  render() {
    const {hasFilters, filters} = this.state;
    const {route, navigation} = this.props;
    console.log('Render ', hasFilters, filters);
    return (
      <Container>
        <BooksFetchList
          navigation={navigation}
          fetchFunction={fetchSearchBooks}
          query={route.params.query}
          hasFilters={hasFilters}
          filters={filters}
          onFiltersPress={this.openFilters}
          onClearFilter={this.clearFilters}
        />
      </Container>
    );
  }
}

export default BooksResultsScreen;
