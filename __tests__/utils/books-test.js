import {getFontStyleObject} from '../../src/utils/font';
import {
  filterBooks,
  availableFormatFilter,
  saleabilityFilter,
  prieceFilter,
} from '../../src/utils/books';

const books = [
  {
    title: 'Primeira Histórias',
    availableFormats: {
      epub: true,
      pdf: true,
    },
    priece: 10,
    saleability: 'FREE',
  },
  {
    title: 'Sagarana',
    availableFormats: {
      epub: true,
      pdf: false,
    },
    priece: 49.9,
    saleability: 'FOR_SALE',
  },
  {
    title: 'Grande Sertão: Veredas',
    availableFormats: {
      epub: true,
      pdf: false,
    },
    priece: 49.9,
    saleability: 'FOR_SALE',
  },
  {
    title: 'Magma',
    availableFormats: {
      epub: true,
      pdf: false,
    },
    priece: 100,
    saleability: 'FOR_SALE',
  },
  {
    title: 'Manuelzão e Miguilim',
    hasEpub: false,
    hasPdf: true,
    availableFormats: {
      epub: true,
      pdf: false,
    },
    priece: 10,
    saleability: 'FOR_PREORDER',
  },
  {
    title: 'O Burrinho Pedrês',
    availableFormats: {
      epub: true,
      pdf: false,
    },
    priece: 0,
    saleability: 'NOT_FOR_SALE',
  },
];

describe('utils.books', () => {
  describe('availableFormatFilter()', () => {
    it('should return true with a pdf param', () => {
      expect(
        availableFormatFilter({availableFormats: {pdf: true, epub: false}}, [
          'pdf',
          'epub',
        ]),
      ).toBe(true);
    });
    it('should return false with a pdf param', () => {
      expect(
        availableFormatFilter({availableFormats: {pdf: false, epub: false}}, [
          'epub',
        ]),
      ).toBe(false);
    });
    it('should return true with send empty filter', () => {
      expect(
        availableFormatFilter({availableFormats: {pdf: false, epub: false}}),
      ).toBe(true);
    });
  });

  describe('saleabilityFilter()', () => {
    it('should return false when filtred saleability filtred param that does not exist', () => {
      expect(
        saleabilityFilter({saleability: 'FOR_SALE'}, ['NOT_FOR_SALE', 'FREE']),
      ).toBe(false);
    });
    it('should return true when filtred saleability filtred param match', () => {
      expect(
        saleabilityFilter({saleability: 'FOR_SALE'}, [
          'NOT_FOR_SALE',
          'FOR_SALE',
        ]),
      ).toBe(true);
    });
    it('should return true with send empty filter', () => {
      expect(saleabilityFilter({saleability: 'FOR_SALE'}, null)).toBe(true);
    });
  });

  describe('prieceFilter()', () => {
    it('returns true when the value is between any range', () => {
      expect(
        prieceFilter({priece: 50}, [
          {min: 10, max: 20},
          {min: 30, max: 50},
        ]),
      ).toBe(true);
    });
    it('returns true when the value is between any range', () => {
      expect(
        prieceFilter({priece: 50.1}, [
          {min: 10, max: 20},
          {min: 30, max: 50},
        ]),
      ).toBe(false);
    });
    it('should return true with send empty filter', () => {
      expect(prieceFilter({priece: 50.1}, null)).toBe(true);
    });
  });

  describe('booksFilter()', () => {
    it('should return objects that match with filter array', () => {
      const filters = {
        availableFormats: ['pdf'],
        priece: [
          {min: 10, max: 20},
          {min: 30, max: 50},
        ],
        saleability: ['FREE'],
      };
      expect(filterBooks(books, filters)).toStrictEqual([
        {
          title: 'Primeira Histórias',
          availableFormats: {
            epub: true,
            pdf: true,
          },
          priece: 10,
          saleability: 'FREE',
        },
      ]);
    });
  });
});
