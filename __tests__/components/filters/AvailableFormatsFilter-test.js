import React from 'react';
import {shallow} from 'enzyme';

import 'jest-styled-components';
import {AvailableFormatsFilter} from '../../../src/components/filters';

const pressFn = jest.fn();

describe('AvailableFormatsFilter', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const filters = [];
      const component = shallow(
        <AvailableFormatsFilter
          selectedFilters={filters}
          updateFilter={pressFn}
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
