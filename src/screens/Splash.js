import React from 'react';
import styled from 'styled-components/native';
import {Typography} from '../components/common';

const SplashScreen = styled.View`
  flex: 1;
  background-color: #cccccc;
`;

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Typography>SplashScreen</Typography>
      </View>
    );
  }
}

export default Spash;
