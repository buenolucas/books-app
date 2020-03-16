import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Typography from './Typography';
import Theme from '../../Theme';

const ButtonContainer = styled.TouchableOpacity`
    color: ${({theme}) => theme.colors.white}
    background-color: ${({theme}) => theme.colors.buttonPrimary}
    width:100%;
    display:flex;
    alignItems:center;
    padding: ${({theme}) =>
      theme.spacing.tiny +
      theme.spacing.xTiny +
      'px ' +
      theme.spacing.small +
      'px'};
`;

const Button = props => {
  const {label, onPress} = props;
  const typograpyStyle = {color: '#FFFFFF'};

  return (
    <ButtonContainer onPress={onPress}>
      <Typography type="caption1" style={typograpyStyle}>
        {label}
      </Typography>
    </ButtonContainer>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  primary: PropTypes.bool,
};
Typography.defaultProps = {
  primary: true,
};
export default Button;
