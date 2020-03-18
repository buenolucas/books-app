export const ROOT_URL = 'https://www.googleapis.com/books/v1';

const withUrl = url => `${ROOT_URL}${url}`;

export const getBookShielf = query => {
  return `${withUrl('/volumes')}?q=${query}&startIndex=0&maxResults=16`;
};

export const getSearchBooksUrl = ({
  startIndex = 0,
  query = '',
  itemsByPage = 24,
}) => {
  return `${withUrl(
    '/volumes',
  )}?q=${query}&startIndex=${startIndex}&maxResults=${itemsByPage}`;
};
