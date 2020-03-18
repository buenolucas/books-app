import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Typography from './Typography';
import Theme from '../../Theme';

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  background-color: ${props =>
    props.primary
      ? props.theme.colors.buttonPrimary
      : props.theme.colors.buttonDefault};
  border-radius: ${props => props.theme.spacing.small}px;
  padding: ${({theme}) =>
    theme.spacing.tiny + 'px ' + theme.spacing.small + 'px'};
`;

const RoundedButton = props => {
  const {label, icon, primary, iconPosition, style, onPress} = props;
  const typograpyStyle = {};
  if (primary) {
    typograpyStyle.color = Theme.colors.white;
  }
  if (icon && label) {
    if (iconPosition == 'left') {
      typograpyStyle.marginLeft = Theme.spacing.tiny;
    } else {
      typograpyStyle.marginRight = Theme.spacing.tiny;
    }
  }

  return (
    <ButtonContainer primary={primary} onPress={onPress} style={style}>
      {icon && iconPosition == 'left' && icon}
      {label && (
        <Typography type="caption2" style={typograpyStyle}>
          {label}
        </Typography>
      )}
      {icon && iconPosition == 'right' && icon}
    </ButtonContainer>
  );
};

RoundedButton.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  primary: PropTypes.bool,
  iconPosition: PropTypes.string,
  style: PropTypes.object,
};

RoundedButton.defaultProps = {
  primary: false,
  iconPosition: 'left',
};

export default RoundedButton;
