import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions, StyleSheet, Image} from 'react-native';

const {width} = Dimensions.get('window');
const PREVIEW_WIDTH = width * 0.27;

const TouchableShelf = styled.TouchableOpacity`
  width: ${PREVIEW_WIDTH}px;
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 8px;
`;
const Thumb = styled.Image`
  width: 93px;
  height: 138px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const BookTitle = styled.Text`
  color: ${({negativeColors, theme}) => {
    return negativeColors ? theme.colors.white : theme.colors.text;
  }};
  font-size: 12px;
  margin-top: 10px;
  height: 28px;
`;

const BookThumb = ({book, negativeColors, highPriority}) => {
  const renderBook = () => {
    const hasCover = book.thumbnail ? true : false;

    return (
      <>
        {hasCover ? (
          <Image
            style={styles.image}
            source={{
              uri: book.thumbnail,
            }}
          />
        ) : (
          <Image style={styles.image} />
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
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Theme.colors.transparentBlack,
  },
});

BookThumb.propTypes = {
  movie: PropTypes.object,
  highPriority: PropTypes.bool,
  style: PropTypes.any,
};

export default BookThumb;
