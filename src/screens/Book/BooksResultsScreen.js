import React from 'react';
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
  const onFiltersPress = () => {
    navigation.navigate(RouteNames.BooksFilter, {
      filters: route.params.filters || {},
    });
  };
  return (
    <Container>
      <BooksFetchList
        navigation={navigation}
        fetchFunction={fetchSearchBooks}
        query={route.params.query}
        hasFilters={route.params.filters && true}
        filters={route.params.filters || {}}
        onFiltersPress={onFiltersPress}
      />
    </Container>
  );
}

export default BooksResultsScreen;
