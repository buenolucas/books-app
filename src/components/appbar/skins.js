import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${({theme, primary}) =>
    primary ? theme.colors.paleGrey : theme.colors.background};
  height: 56px;
  ${({shadow}) =>
    shadow &&
    `shadow-color: #000000;
    shadow-radius: 2px;
    elevation: 5;`}
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
`;
const Title = styled.View``;

const Actions = styled.View`
  min-width: 24px;
`;

export default {
  Container,
  Wrapper,
  Title,
  Actions,
};
