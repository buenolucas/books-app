import React from 'react';
import PropTypes from 'prop-types';
import {getFontStyleObject} from '../../utils/font';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Theme from './../../Theme';

const Text = styled.Text`
  ${getFontStyleObject()}
  color: ${props => props.theme.colors.text};
`;

const Typography = props => {
  const {children, style, type} = props;
  !Theme.typography[type] &&
    console.warn(`Typography: There is no ${type} type in typography.`);
  const textStyles = [Theme.typography[type], style];
  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
};
Typography.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.any,
};

Typography.defaultProps = {
  type: 'body',
};

export default Typography;
