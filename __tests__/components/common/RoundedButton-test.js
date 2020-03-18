import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import RoundedButton from '../../../src/components/common/RoundedButton';
import Icon from '../../../src/components/common/Icon';

const pressFn = jest.fn();

describe('RoundedButton', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const component = shallow(
        <RoundedButton
          label="button render test"
          icon={<Icon i="search" />}
          onPress={pressFn}
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
