import React from 'react';
import {shallow} from 'enzyme';
import Icon from '../../../src/components/common/Icon';
import IconButton from '../../../src/components/common/Typography';

describe('IconButton', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<IconButton icon={<Icon i="search" />} />);
      expect(component).toMatchSnapshot();
    });
  });
});
