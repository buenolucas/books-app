import {getFontStyleObject} from '../../src/utils/font';
import {filterBooks} from '../../src/utils/books';

describe('utils.books', () => {
  describe('Testing filterBooks()', () => {
    const books = [
      {
        title: 'Primeira Histórias',
        hasEpub: true,
        hasPdf: false,
        priece: 7,
        availableForSale: false,
      },
      {
        title: 'Sagarana',
        hasEpub: false,
        hasPdf: true,
        priece: 49.9,
        availableForSale: true,
      },
      {
        title: 'Grande Sertão: Veredas',
        hasEpub: false,
        hasPdf: true,
        priece: 49.9,
        availableForSale: true,
      },
      {
        title: 'Magma',
        hasEpub: false,
        hasPdf: true,
        priece: 100,
        availableForSale: false,
      },
      {
        title: 'Manuelzão e Miguilim',
        hasEpub: false,
        hasPdf: true,
        priece: 10,
        availableForSale: true,
      },
      {
        title: 'O Burrinho Pedrês',
        hasEpub: false,
        hasPdf: true,
        priece: 0,
        availableForSale: true,
      },
      {
        title: 'O Burrinho Pedrês',
        hasEpub: false,
        hasPdf: true,
        priece: 11,
        availableForSale: true,
      },
    ];

    it('should filter a boolean, string and number filter', () => {
      expect(
        filterBooks(books, {
          hasEpub: true,
        }),
      ).toStrictEqual([
        {
          title: 'Primeira Histórias',
          hasEpub: true,
          hasPdf: false,
          priece: 7,
          availableForSale: false,
        },
      ]);
    });
    it('should filter a number inside a range', () => {
      expect(filterBooks(books, {priece: {min: 0, max: 10}})).toStrictEqual([
        {
          title: 'Primeira Histórias',
          hasEpub: true,
          hasPdf: false,
          priece: 7,
          availableForSale: false,
        },
        {
          title: 'Manuelzão e Miguilim',
          hasEpub: false,
          hasPdf: true,
          priece: 10,
          availableForSale: true,
        },
        {
          title: 'O Burrinho Pedrês',
          hasEpub: false,
          hasPdf: true,
          priece: 0,
          availableForSale: true,
        },
      ]);
    });
    it('should return complete array if the filter is empty', () => {
      expect(filterBooks(books, {})).toStrictEqual(books);
    });
  });
});
