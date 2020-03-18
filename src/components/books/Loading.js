import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/native';
import BooksListHorizontal from './BooksListHorizontal';
import Theme from '../../Theme';
import {Typography, Icon} from '../common';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const HeaderSkin = styled.View`
  margin-left: ${({theme}) => theme.spacing.small}px;
  height: 22px;
  width: 182px;
  background-color: ${({isFeatured, theme}) =>
    isFeatured ? '#7ECDF2' : theme.colors.paleGreyTwo};
`;
const BookshelfSkin = styled.View`
  background-color: ${({isFeatured, theme}) =>
    isFeatured ? theme.colors.primaryVariant : 'transparent'};

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

const ThumbSkin = styled.View`
  width: 93px;
  height: 138px;
  background-color: ${({isFeatured, theme}) =>
    isFeatured ? '#7ECDF2' : theme.colors.paleGreyTwo};

  margin-bottom: ${({theme}) => theme.spacing.small}px;
`;
const BookTitleSkin = styled.View`
  height: ${({theme}) => theme.spacing.tiny}px;
  width: ${({size}) => size || 100}%;
  margin-bottom: ${({theme}) => theme.spacing.tiny}px;
  background-color: ${({isFeatured, theme}) =>
    isFeatured ? '#7ECDF2' : theme.colors.paleGreyTwo};
`;
const ListSkin = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  flex-direction: row;
  margin-left: ${({theme}) => theme.spacing.small}px;
`;

const Thumb = ({isFeatured}) => {
  return <ThumbSkin isFeatured={isFeatured}></ThumbSkin>;
};

const BookSkin = styled.View`
  margin-right: ${({theme}) => theme.spacing.tiny}px;
`;
const Book = ({isFeatured}) => {
  return (
    <BookSkin isFeatured={isFeatured}>
      <ThumbSkin isFeatured={isFeatured} />
      <BookTitleSkin isFeatured={isFeatured} />
      <BookTitleSkin isFeatured={isFeatured} size={68} />
    </BookSkin>
  );
};
const Bookshelf = ({isFeatured}) => {
  return (
    <BookshelfSkin isFeatured={isFeatured}>
      <HeaderSkin isFeatured={isFeatured} />
      <ListSkin>
        <Book isFeatured={isFeatured} />
        <Book isFeatured={isFeatured} />
        <Book isFeatured={isFeatured} />
        <Book isFeatured={isFeatured} />
      </ListSkin>
    </BookshelfSkin>
  );
};
const Loading = () => {
  return (
    <Container>
      <Bookshelf />
      <Bookshelf />
      <Bookshelf isFeatured={true} />
      <Bookshelf />
    </Container>
  );
};

export default Loading;
