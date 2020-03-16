import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components/native';

import Typography from '../Typography';
import CheckBoxIcon from './CheckBoxIcon';

const Component = styled.TouchableOpacity`
  margin: ${({theme}) => theme.spacing.tiny}px
  margin-left: 10px;
  margin-right: 10px;

`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CheckBox = ({theme, checked, label, onPress}) => {
  const accessibilityStates = [
    ...(checked ? ['checked'] : []),
    ...(!checked ? ['unchecked'] : []),
  ];

  const textStyle = {
    marginLeft: theme.spacing.tiny,
    color: checked ? theme.colors.darkGrey : theme.colors.steel,
  };
  return (
    <Component
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityStates={accessibilityStates}>
      <Wrapper>
        <CheckBoxIcon checked={checked} />
        <Typography type="body" style={textStyle}>
          {label}
        </Typography>
      </Wrapper>
    </Component>
  );
};

CheckBox.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

CheckBox.defaultProps = {
  checked: false,
};

export default withTheme(CheckBox);
