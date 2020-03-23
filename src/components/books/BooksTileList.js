import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/native';
import BookThumb from './BookThumb';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import times from '../../utils/times';
import {bookId} from '../../utils/books';
import Theme from '../../Theme';

const TileListSkin = styled.FlatList`
  padding-top: ${({theme}) => theme.spacing.tiny}px;
  padding-bottom: ${({theme}) => theme.spacing.tiny}px;
  flex: 1;
  align-self: stretch;
  margin-left: ${({theme}) => theme.spacing.small}px;
`;

const BooksTileList = props => {
  renderThumb = ({item, index}) => (
    <BookThumb book={item} highPriority={index < 15} />
  );

  const {books} = props;
  return (
    <TileListSkin
      data={books}
      numColumns={3}
      initialNumToRender={20}
      maxToRenderPerBatch={20}
      renderItem={renderThumb}
      keyExtractor={bookId}
      {...props}
    />
  );
};

BooksTileList.propTypes = {
  books: PropTypes.array.isRequired,
  paddingLeft: PropTypes.number,
};
export default BooksTileList;
