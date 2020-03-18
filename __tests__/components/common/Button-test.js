import React from 'react';
import {shallow} from 'enzyme';
import Button from '../../../src/components/common/Button';
import 'jest-styled-components';

const pressFn = jest.fn();

describe('Button', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const component = shallow(
        <Button label="button render test" onPress={pressFn} />,
      );
      expect(component).toMatchSnapshot();
    });

    it('should render with color variation', () => {
      const component = shallow(
        <Button primary={false} label="button render test" onPress={pressFn} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
