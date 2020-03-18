export const bookId = book => book.id.toString();

export const parseBooksArray = books => books.map(book => parseBook(book));

export const filterDuplicateBooks = books =>
  books.filter(
    (book, index) => index === books.findIndex(m => bookId(m) === bookId(book)),
  );

const parseBook = b => {
  const book = {
    id: b.id,
    thumbnail:
      b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail
        ? b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail
        : null,
    title: b.volumeInfo.title,
    description: b.volumeInfo.description,
    authors: b.volumeInfo.authors,
    publisher: b.volumeInfo.publisher,
    pageCount: b.volumeInfo.pageCount,
    language: b.volumeInfo.language,
    availableFormats: {
      epub: b.accessInfo.epub.isAvailable,
      pdf: b.accessInfo.pdf.isAvailable,
    },
    priece: b.saleInfo.listPrice,
    saleability: b.saleInfo.saleability,
  };
  return {...book};
};

export const availableFormatFilter = (book, formats = []) => {
  if (!formats || formats.length == 0) return true;
  return formats.some(format => book.availableFormats[format] === true);
};

export const saleabilityFilter = (book, matches = []) => {
  if (!matches || matches.length == 0) return true;
  return matches.some(match => book.saleability === match);
};

export const prieceFilter = (book, ranges = []) => {
  if (!ranges || ranges.length == 0) return true;
  return ranges.some(
    range => book.priece >= range.min && book.priece <= range.max,
  );
};

export const filterBooks = (books, filters) => {
  return books.filter(book => {
    return (
      availableFormatFilter(book, filters.availableFormats) &&
      saleabilityFilter(book, filters.saleability) &&
      prieceFilter(book, filters.priece)
    );
  });
};
