import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  border: 2px solid
    ${({checked, theme}) =>
      checked ? theme.colors.robinEgg : theme.colors.lightPeriwinkle};
  width: 16px;
  height: 16px;
  border-radius: 3px;
  padding: 2px;
`;

const Filled = styled.View`
  background-color: ${({checked, theme}) =>
    checked ? theme.colors.robinEgg : theme.colors.lightPeriwinkle};
  width: 100%;
  height: 100%;
`;
const CheckBoxIcon = ({checked, onPress}) => {
  return (
    <Container checked={checked}>
      {checked && <Filled checked={checked} />}
    </Container>
  );
};
CheckBoxIcon.propTypes = {
  checked: PropTypes.bool,
};

export default CheckBoxIcon;
