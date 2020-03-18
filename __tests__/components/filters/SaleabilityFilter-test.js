import React from 'react';
import {shallow} from 'enzyme';

import 'jest-styled-components';
import {SaleabilityFilter} from '../../../src/components/filters';

const pressFn = jest.fn();

describe('SaleabilityFilter', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const filters = [];
      const component = shallow(
        <SaleabilityFilter selectedFilters={filters} updateFilter={pressFn} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
