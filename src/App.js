import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Theme from './Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootNavigation} from './Navigation';
import BooksShelfScreen from './screens/Book/BooksShelfSceen';
import {Typography} from './components/common';

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <RootNavigation />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
