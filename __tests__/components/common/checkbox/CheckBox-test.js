import React from 'react';
import {Image, View, Text} from 'react-native';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import Theme from '../../../../src/Theme';
import CheckBox from '../../../../src/components/common/checkbox/CheckBox';
import CheckBoxIcon from '../../../../src/components/common/checkbox/CheckBoxIcon';

describe('CheckBox', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox theme={Theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
