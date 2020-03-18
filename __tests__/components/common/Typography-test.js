import React from 'react';
import {shallow} from 'enzyme';
import Typography from '../../../src/components/common/Typography';

describe('Typography', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Typography type="body">test text</Typography>);
      expect(component).toMatchSnapshot();
    });
  });
});
