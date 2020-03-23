import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
const {width} = Dimensions.get('window');
const PREVIEW_WIDTH = width * 0.27;

const TouchableShelf = styled.View`
  width: ${PREVIEW_WIDTH}px;
  margin-left: ${({theme}) => theme.spacing.tiny}px;
  margin-right: ${({theme}) => theme.spacing.tiny}px;
  padding-bottom: ${({theme}) => theme.spacing.tiny}px;
`;

const BookTitle = styled.Text`
  color: ${({negativeColors, theme}) => {
    return negativeColors ? theme.colors.white : theme.colors.text;
  }};
  font-size: 12px;
  margin-top: 10px;
  height: 34px;
`;

const BookThumb = ({book, negativeColors, reverseCorners, highPriority}) => {
  const renderBook = () => {
    const priority = highPriority
      ? FastImage.priority.high
      : FastImage.priority.normal;
    const image = Object.assign({}, styles.image);
    if (reverseCorners) {
      image.borderTopRightRadius = image.borderBottomLeftRadius = 16;
    } else {
      image.borderTopRightRadius = image.borderBottomRightRadius = 16;
    }
    return (
      <>
        <FastImage
          style={image}
          source={{
            uri: book.thumbnail,
            priority: priority,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <BookTitle numberOfLines={3} negativeColors={negativeColors}>
          {book.title}
        </BookTitle>
      </>
    );
  };
  const renderEmptyBook = () => {
    return <View style={styles.image} />;
  };
  return (
    <TouchableShelf disabled={true}>
      {book ? renderBook() : renderEmptyBook()}
    </TouchableShelf>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: Theme.specifications.bookCoverAspectRation,
    backgroundColor: Theme.colors.transparentBlack,
  },
});

BookThumb.propTypes = {
  movie: PropTypes.object,
  reverseCorners: PropTypes.bool,
  style: PropTypes.any,
};

export default withTheme(BookThumb);
