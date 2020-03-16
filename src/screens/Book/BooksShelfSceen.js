import React from 'react';
import styled from 'styled-components/native';
import {Typography, Button} from '../../components/common';
import BookShelf from '../../components/books/BookShelf';
import {FlatList} from 'react-native-gesture-handler';
import {fetchCategoriesBooks} from '../../api/books';
import RouteNames from '../../RouteNames';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-top: ${({theme}) => theme.spacing.small}px;
`;

const bookshielf = [
  {key: 'adventure', title: 'Aventura', books: []},
  {key: 'kids', title: 'Infantil', books: []},
  {key: 'featured', title: 'Destaques', isFeatured: true, books: []},
  {key: 'action', title: 'Ação', books: []},
];

class BooksShelfScreen extends React.Component {
  state = {
    books: [],
    loading: true,
  };

  componentDidMount() {
    // eslint-disable-next-line
    requestAnimationFrame(() => {
      this.fetchBooks();
    });
  }

  async fetchBooks() {
    const bookshielfs = await fetchCategoriesBooks();
    this.setState({
      bookshielfs: bookshielfs,
      loading: false,
    });
  }
  onSelectBookshelf(bookshelf) {
    const {navigation} = this.props;
    navigation.navigate(RouteNames.BooksResults, {query: bookshelf});
  }

  render() {
    const {loading, bookshielfs} = this.state;

    if (loading) {
      return <Typography>Loading</Typography>;
    } else {
      return (
        <Container>
          <FlatList
            data={bookshielfs}
            renderItem={({item}) => (
              <BookShelf
                title={item.title}
                isFeatured={item.isFeatured}
                books={item.books}
                style={{marginHorizontal: 16}}
                onBookshelfPress={bookshelf =>
                  this.onSelectBookshelf(bookshelf)
                }
              />
            )}
          />
        </Container>
      );
    }
  }
}

export default BooksShelfScreen;
