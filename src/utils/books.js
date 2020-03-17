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
  };
  return {...book};
};
//const parseBook = book => ({...book});
