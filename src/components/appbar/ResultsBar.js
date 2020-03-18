import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {GoogleBooks, IconButton, Icon, Typography} from '../common';
import Skin from './skins';
import RouteNames from '../../RouteNames';

function ResultsBar({navigation}) {
  const route = useRoute();
  return (
    <Skin.Container primary>
      <Skin.Wrapper>
        <Skin.Actions>
          <IconButton
            onPress={() => navigation.goBack()}
            icon={<Icon i="caretLeft" />}
          />
        </Skin.Actions>
        <Skin.Title>
          <Typography type="header">
            {route.params.query || 'Resultado da Busca'}
          </Typography>
        </Skin.Title>
        <Skin.Actions />
      </Skin.Wrapper>
    </Skin.Container>
  );
}
export default ResultsBar;
