import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/native';
import BookThumb from './BookThumb';
import {View, Text, FlatList} from 'react-native';
import times from '../../utils/times';
import {bookId} from '../../utils/books';
import Theme from '../../Theme';

const BooksList = styled.FlatList`
  padding-top: ${({theme}) => theme.spacing.tiny}px
  padding-bottom: ${({theme}) => theme.spacing.tiny}px;
`;

const BooksListHorizontal = ({books, paddingLeft, isFeatured}) => {
  renderThumb = ({item, index}) => (
    <BookThumb
      book={item}
      reverseCorners={isFeatured}
      highPriority={index < 5}
      negativeColors={isFeatured}
    />
  );
  renderHeader = () => (
    <View style={{width: paddingLeft - Theme.spacing.tiny}} />
  );
  renderEmptyContainer = () => times(4).map((r, i) => <BookThumb key={i} />);

  const isEmpty = books.length === 0;

  return (
    <BooksList
      horizontal
      data={books || []}
      scrollEnabled={!isEmpty}
      initialNumToRender={5}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={paddingLeft && renderHeader}
      ListEmptyComponent={renderEmptyContainer}
      keyExtractor={bookId}
      renderItem={renderThumb}
    />
  );
};
BooksListHorizontal.propTypes = {
  books: PropTypes.array.isRequired,
  isFeatured: PropTypes.bool,
  paddingLeft: PropTypes.number,
};
export default BooksListHorizontal;
