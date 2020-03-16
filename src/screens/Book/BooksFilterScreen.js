import React from 'react';
import styled from 'styled-components/native';
import {Typography} from '../../components/common';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  font-size: 15px;
  padding-left: 16px;
  padding-top: 16px;
`;

class BooksFilterScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title', ' '),
  });

  render() {
    return (
      <Container>
        <Typography type="largeTitle">[implmentar]</Typography>
      </Container>
    );
  }
}

export default BooksFilterScreen;
