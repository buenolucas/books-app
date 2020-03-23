import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Theme from './Theme';

import {RootNavigation} from './Navigation';

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

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
