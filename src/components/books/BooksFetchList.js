import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import FooterLoading from './FooterLoading';
import BooksTileList from './BooksTileList';
import withRefetch from '../hoc/withRefetch';
import {filterDuplicateBooks} from '../../utils/books';
import Theme from '../../Theme';
import RouteNames from '../../RouteNames';
import {RoundedButton, Icon} from '../common';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Actions = styled.View`
  align-self: flex-end;
  margin-bottom: 8px;
  margin-top: ${({theme}) => theme.spacing.base}px;
  padding-top: ${({theme}) => theme.spacing.tiny}px;
  padding-bottom: ${({theme}) => theme.spacing.tiny}px;
  margin-right: ${({theme}) => theme.spacing.small}px;
`;

class BooksFetchList extends React.Component {
  state = {
    books: [],
    isInitialLoading: true,
    isPaginationLoading: false,
    refreshing: false,
  };

  componentDidMount() {
    this.page = 1;
    this.totalPages = Infinity;
    this.totalItems = Infinity;
    this.pageSize = 24;
    // eslint-disable-next-line
    requestAnimationFrame(() => {
      this.fetchFirstPage({isInitial: true});
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.fetchFunction !== nextProps.fetchFunction) {
      this.fetchFirstPage({nextProps});
      return false;
    }

    if (this.state === nextState && this.props === nextProps) {
      return false;
    }

    return true;
  }

  onRefresh = () => {
    const {refreshing} = this.state;
    if (refreshing) return;
    this.fetchFirstPage();
  };

  onListEndReached = () => {
    const {isPaginationLoading, refreshing} = this.state;
    if (isPaginationLoading || refreshing || this.page >= this.totalPages)
      return;
    this.fetchNextPage();
  };

  async fetchFirstPage({isInitial, nextProps} = {}) {
    const {fetchFunction, refetch} = nextProps || this.props;

    this.setState({refreshing: true});
    const initialPage = 1;
    const refetchAction = isInitial
      ? refetch.fetchUntilSuccess
      : refetch.fetchSafe;
    try {
      const data = await refetchAction(() =>
        fetchFunction({page: initialPage, query: this.props.query}),
      );

      this.page = initialPage;
      this.totalItems = data.totalItems;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);

      this.setState({
        books: [...data.books],
        isInitialLoading: false,
        refreshing: false,
      });
    } catch (error) {
      this.setState({refreshing: false});
    }
  }

  async fetchNextPage() {
    const {fetchFunction, refetch} = this.props;

    this.setState({isPaginationLoading: true});
    const {books: booksBeforeFetch} = this.state;
    const data = await refetch.fetchUntilSuccess(() =>
      fetchFunction({page: this.page + 1, query: this.props.query}),
    );
    const {books} = this.state;
    const booksProps = {};
    if (books === booksBeforeFetch) {
      booksProps.books = filterDuplicateBooks([...books, ...data.books]);
      this.page++;
      this.totalItems = data.totalItems;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
    this.setState({isPaginationLoading: false, ...booksProps});
  }

  renderLoadingIndicator = () => (
    <ActivityIndicator
      size={Theme.specifications.activityIndicatorSize}
      color={Theme.colors.darkSky}
    />
  );

  renderListHeader = () => {
    return (
      <Actions>
        <RoundedButton
          label="Filtrar"
          icon={<Icon i="filter" />}
          primary
          onPress={() => this.props.navigation.navigate(RouteNames.BooksFilter)}
        />
      </Actions>
    );
  };
  renderListFooter = () => {
    const {isPaginationLoading} = this.state;
    return isPaginationLoading ? <FooterLoading /> : null;
  };

  renderBookList = () => {
    const {withRefresh, withPagination, ...props} = this.props;
    const {books, refreshing, isPaginationLoading} = this.state;
    const refreshProps = withRefresh
      ? {refreshing, onRefresh: this.onRefresh}
      : {};
    const paginationProps = withPagination
      ? {
          onEndReached: this.onListEndReached,
          onEndReachedThreshold: 3,
          extraData: isPaginationLoading,
        }
      : {};

    return (
      <BooksTileList
        books={books}
        ListHeaderComponent={this.renderListHeader}
        ListFooterComponent={this.renderListFooter}
        {...refreshProps}
        {...paginationProps}
        {...props}
      />
    );
  };

  render() {
    const {isInitialLoading} = this.state;
    return (
      <Container>
        {isInitialLoading
          ? this.renderLoadingIndicator()
          : this.renderBookList()}
      </Container>
    );
  }
}

BooksFetchList.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  withRefresh: PropTypes.bool,
  withPagination: PropTypes.bool,
};

BooksFetchList.defaultProps = {
  withRefresh: true,
  withPagination: true,
};

export default withRefetch(BooksFetchList);
