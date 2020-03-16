import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BooksShelfScreen from './screens/Book/BooksShelfSceen';
import BooksFilterScreen from './screens/Book/BooksFilterScreen';
import BooksResultsScreen from './screens/Book/BooksResultsScreen';

import RouteNames from './RouteNames';
import {MainBar, ModalBar, ResultsBar} from './components/appbar';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export function BooksSearchNavigation() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={RouteNames.BooksShelf}
        component={BooksShelfScreen}
        options={{
          header: ({route, navigation}) => (
            <MainBar route={route} navigation={navigation} />
          ),
        }}
      />
      <MainStack.Screen
        name={RouteNames.BooksResults}
        component={BooksResultsScreen}
        initialParams={{query: 'fadaputa', itemId: 42}}
        options={{
          header: ({route, navigation}) => (
            <ResultsBar route={route} navigation={navigation} />
          ),
        }}
      />
    </MainStack.Navigator>
  );
}

export function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={RouteNames.BooksResultStack}
          component={BooksSearchNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          mode="modal"
          name={RouteNames.BooksFilter}
          component={BooksFilterScreen}
          options={{
            header: ({scene, navigation}) => (
              <ModalBar scene={scene} navigation={navigation} />
            ),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
