import React from 'react';
import {shallow} from 'enzyme';

import 'jest-styled-components';
import {PrieceRangeFilter} from '../../../src/components/filters';

const pressFn = jest.fn();

describe('PrieceRangeFilter', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const filters = [];
      const component = shallow(
        <PrieceRangeFilter selectedFilters={filters} updateFilter={pressFn} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
