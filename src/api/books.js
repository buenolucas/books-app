import axios from 'axios';
import {getSearchBooksUrl, getBookShielf} from './urls';
import Config from '../Config';
import {parseBooksArray} from '../utils/books';

const bookshielf = [
  {key: 'adventure', title: 'Aventura', books: null},
  {key: 'kids', title: 'Infantil', books: null},
  {key: 'featured', title: 'Destaques', isFeatured: true, books: null},
  {key: 'action', title: 'Ação', books: null},
];

export const fetchCategoriesBooks = async () => {
  const startIndex = 0;
  const urls = [
    axios.get(getBookShielf('Aventura')),
    axios.get(getBookShielf('Infantil')),
    axios.get(getBookShielf('Destaques')),
    axios.get(getBookShielf('Ação')),
  ];

  const res = await axios.all(urls).then(
    axios.spread((...responses) => {
      responses.map(({data}, i) => {
        addParsedBooksToData(data);
        bookshielf[i].books = data.books;
      });
      return bookshielf;
    }),
  );
  return res;
};

export const fetchSearchBooks = (
  {page, query, itemsByPage = 24},
  reqParams = {},
) =>
  new Promise(async (resolve, reject) => {
    let startIndex = (page - 1) * itemsByPage;
    const url = getSearchBooksUrl({startIndex, query});

    try {
      const {data} = await axios.get(url);
      addParsedBooksToData(data);
      resolve(data);
    } catch (error) {
      Config.logNetworkErrors && console.log(error);
      reject(error);
    }
  });

const addParsedBooksToData = data => (data.books = parseBooksArray(data.items));
