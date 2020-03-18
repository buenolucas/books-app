import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import Typography from './Typography';
//import TouchableHighlightView from './TouchableHighlightView';
import Theme from '../../Theme';
import styled from 'styled-components/native';

const TouchableHighlightView = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
class IconButton extends React.PureComponent {
  render() {
    const {text, icon, textStyle, ...props} = this.props;

    return (
      <TouchableHighlightView {...props} contentStyle={styles.touchable}>
        {icon}
        {text && (
          <Typography style={[styles.text, textStyle]} type="caption2">
            {text}
          </Typography>
        )}
      </TouchableHighlightView>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: Theme.spacing.xTiny,
  },
});

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  textStyle: PropTypes.any,
};

export default IconButton;
