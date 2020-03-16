export const bookId = book => book.id.toString();

export const parseBooksArray = books => books.map(book => parseBook(book));

export const filterDuplicateBooks = books =>
  books.filter(
    (book, index) => index === books.findIndex(m => bookId(m) === bookId(book)),
  );

const parseBook = book => ({...book});
