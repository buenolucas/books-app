import React, {useState} from 'react';
import {GoogleBooks, IconButton, Icon} from '../common';
import Skin from './skins';
import RouteNames from '../../RouteNames';
import SearchBox from './SearchBox';

function MainBar({navigation}) {
  const [searchMode, setSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  onSubmit = () => {
    const params = {
      query: searchValue,
      title: 'Resultado da Busca',
    };
    setSearchValue('');
    setSearchMode(false);
    navigation.navigate(RouteNames.BooksResults, params);
  };
  return (
    <Skin.Container primary={!searchMode} shadow={searchMode}>
      <Skin.Wrapper>
        {searchMode ? (
          <SearchBox
            value={searchValue}
            onChangeText={setSearchValue}
            searchExitHandler={() => setSearchMode(false)}
            onSubmit={() => onSubmit()}
          />
        ) : (
          <>
            <Skin.Title>
              <GoogleBooks />
            </Skin.Title>
            <Skin.Actions>
              <IconButton
                onPress={() => setSearchMode(true)}
                icon={<Icon i="search" />}
              />
            </Skin.Actions>
          </>
        )}
      </Skin.Wrapper>
    </Skin.Container>
  );
}
export default MainBar;
