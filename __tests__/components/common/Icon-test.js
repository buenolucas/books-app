import React from 'react';
import {shallow} from 'enzyme';
import Icon from '../../../src/components/common/Typography';

describe('Icon', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Icon i="cancel" />);
      expect(component).toMatchSnapshot();
    });
  });
});
