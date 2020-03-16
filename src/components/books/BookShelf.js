import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/native';
import BooksListHorizontal from './BooksListHorizontal';
import Theme from '../../Theme';
import {Typography, Icon} from '../common';

const ShelfContainer = styled.View`
  background-color: ${props => (props.isFeatured ? '#47B7ED' : 'transparent')};
  margin-top: ${({theme}) => theme.spacing.small}px;
  margin-bottom: ${({theme}) => theme.spacing.small}px;
  width: 100%;

  ${props =>
    props.isFeatured &&
    css`
      padding-top: 24px;
      padding-bottom: 24px;
    `}
`;
const TouchableShelf = styled.TouchableOpacity`
  margin-left: ${({theme}) => theme.spacing.small}px;
`;

const Header = styled.View`
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
`;

const BookShelf = ({title, isFeatured, books, onBookshelfPress}) => {
  const onPress = () => {
    onBookshelfPress(title);
  };

  return (
    <ShelfContainer isFeatured={isFeatured}>
      <TouchableShelf onPress={onPress}>
        <Header>
          <Typography
            type="largeTitle"
            style={{
              color: isFeatured ? Theme.colors.ice : Theme.colors.darkGrey,
              width: 'auto',
            }}>
            {title}
          </Typography>
          <Icon i={isFeatured ? 'rightGoLight' : 'rightGo'} />
        </Header>
      </TouchableShelf>
      <BooksListHorizontal
        isFeatured={isFeatured}
        books={books}
        paddingLeft={Theme.spacing.small}
      />
    </ShelfContainer>
  );
};

export default BookShelf;
