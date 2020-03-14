import {getFontStyleObject} from '../../src/utils/font';

describe('utils.fonts', () => {
  describe('getFontStyleObject', () => {
    it('get empty font object', () => {
      const defaultFontObject = {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontStyle: 'normal',
      };
      const result = getFontStyleObject();
      console.log(result);
    });
  });
});
