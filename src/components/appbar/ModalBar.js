import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Skin from './skins';
import {Typography, IconButton, Icon} from '../common';

function ModalBar({navigation}) {
  return (
    <Skin.Container>
      <Skin.Wrapper>
        <Skin.Title>
          <Typography type="header">Filtro</Typography>
        </Skin.Title>
        <Skin.Actions>
          <IconButton
            onPress={() => navigation.goBack()}
            icon={<Icon i="close" />}
          />
        </Skin.Actions>
      </Skin.Wrapper>
    </Skin.Container>
  );
}
export default ModalBar;
