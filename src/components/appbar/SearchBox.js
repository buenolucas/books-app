import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Theme from '../../Theme';
import {IconButton, Icon} from '../common';

const Container = styled.View`
  width: 100%;
`;
const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.gray.darkest};
`;
const ActionsContainer = styled.View``;
class SearchBox extends React.PureComponent {
  onFocus = () => {};

  onBlur = () => {};

  onSearchTextChange = text => {
    const {onChangeText} = this.props;
    onChangeText(text);
  };

  onSubmit = () => {
    const {onSubmit} = this.props;
    onSubmit();
  };
  onRef = ref => {
    const {inputRef} = this.props;
    this.textInput = ref;
    inputRef && inputRef(ref);
  };

  onClearPress = () => {
    this.clearInput();
  };
  onBackPress = () => {
    const {searchExitHandler} = this.props;
    this.clearInput();
    searchExitHandler();
  };
  clearInput = () => {
    this.textInput.clear();
    this.onSearchTextChange('');
  };

  render() {
    const {value, navigation, ...props} = this.props;

    return (
      <Container>
        <InputContainer>
          <ActionsContainer>
            <IconButton
              onPress={this.onBackPress}
              icon={<Icon i="caretLeft" />}
            />
          </ActionsContainer>
          <SearchInput
            ref={this.onRef}
            selectionColor={Theme.colors.darkSky}
            autoCorrect={false}
            spellCheck={false}
            value={value}
            placeholder="Busca por livros ou autores"
            returnKeyType="search"
            onSubmitEditing={this.onSubmit}
            onChangeText={this.onSearchTextChange}
          />
          <ActionsContainer>
            {value.length > 0 && (
              <IconButton
                onPress={this.onClearPress}
                icon={<Icon i="cancel" />}
              />
            )}
          </ActionsContainer>
        </InputContainer>
      </Container>
    );
  }
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchExitHandler: PropTypes.func.isRequired,
  inputRef: PropTypes.func,
};

SearchBox.defaultProps = {
  value: '',
};

export default SearchBox;
