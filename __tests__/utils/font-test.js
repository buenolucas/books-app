import {getFontStyleObject} from '../../src/utils/font';

describe('utils.fonts', () => {
  describe('getFontStyleObject', () => {
    it('get empty font object', () => {
      const result = getFontStyleObject();
      expect(result).toEqual({
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontStyle: 'normal',
      });
    });
  });
});
