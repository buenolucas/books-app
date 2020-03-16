import React from 'react';
import {shallow} from 'enzyme';
import GoogleBooks from '../../../src/components/common/GoogleBooks';

describe('GoogleBooks', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<GoogleBooks />);
      expect(component).toMatchSnapshot();
    });
  });
});
