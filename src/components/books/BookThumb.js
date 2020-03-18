import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions, StyleSheet, Image} from 'react-native';

const {width} = Dimensions.get('window');
const PREVIEW_WIDTH = width * 0.27;

const TouchableShelf = styled.TouchableOpacity`
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
  height: 28px;
`;

const BookThumb = ({book, negativeColors, reverseCorners}) => {
  const renderBook = () => {
    const hasCover = book.thumbnail ? true : false;
    const image = Object.assign({}, styles.image);
    if (reverseCorners) {
      image.borderTopRightRadius = image.borderBottomLeftRadius = 16;
    } else {
      image.borderTopRightRadius = image.borderBottomRightRadius = 16;
    }
    return (
      <>
        {hasCover ? (
          <Image
            style={image}
            source={{
              uri: book.thumbnail,
            }}
          />
        ) : (
          <Image style={image} />
        )}
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
    width: PREVIEW_WIDTH,
    aspectRatio: Theme.specifications.bookCoverAspectRation,
    backgroundColor: Theme.colors.transparentBlack,
  },
});

BookThumb.propTypes = {
  movie: PropTypes.object,
  reverseCorners: PropTypes.bool,
  style: PropTypes.any,
};

export default BookThumb;
