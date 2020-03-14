import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';

const AppContainer = styled.View`
  flex: 1;
`;
const Group = styled.View`
    aligin-items: center;
    justify-content:center;
`;
const Typography = styled.Text`
  
`;
class ArvoreLivros extends Component {
  render() {
    return (
        <AppContainer>
          <Typography>Bem vindo!</Typography>
        </AppContainer>
    );
  }
}
export default ArvoreLivros;
