export const bookId = book => book.id.toString();

export const parseBooksArray = books => books.map(book => parseBook(book));

export const filterDuplicateBooks = books =>
  books.filter(
    (book, index) => index === books.findIndex(m => bookId(m) === bookId(book)),
  );

const parseBook = b => {
  const book = {
    id: b.id,
    thumbnail: b.volumeInfo.imageLinks.thumbnail,
    title: b.volumeInfo.title,
    description: b.volumeInfo.description,
    authors: b.volumeInfo.authors,
    publisher: b.volumeInfo.publisher,
    pageCount: b.volumeInfo.pageCount,
    language: b.volumeInfo.language,
    hasEpub: b.accessInfo.epub.isAvailable,
    hasPdf: b.accessInfo.pdf.isAvailable,
    priece: b.saleInfo.listPrice,
    saleability: b.saleInfo.saleability,
    availableForSale: b.saleInfo.NOT_FOR_SALE ? false : true,
  };
  return {...book};
};

export const filterBooks = (books, filters) => {
  const filterKeys = Object.keys(filters);
  if (filterKeys.length == 0) return books;
  return books.filter(item => {
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (
        typeof filters[key] === 'boolean' ||
        typeof filters[key] === 'string' ||
        typeof filters[key] === 'number'
      )
        return filters[key] === item[key];
      else if (typeof filters[key] === 'object')
        return item[key] >= filters[key].min && item[key] <= filters[key].max;
      else if (typeof filters[key] === 'function')
        return filters[key](item[key]);
    });
  });
};
