import React from 'react';
import styled from 'styled-components/native';
import BooksFetchList from '../../components/books/BooksFetchList';

import {fetchSearchBooks} from '../../api/books';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

function BooksResultsScreen({route, navigation}) {
  return (
    <Container>
      <BooksFetchList
        navigation={navigation}
        fetchFunction={fetchSearchBooks}
        query={route.params.query}
      />
    </Container>
  );
}

export default BooksResultsScreen;
