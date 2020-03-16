import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

const Icon = ({i}) => {
  switch (i) {
    case 'search':
      return <Image source={require('../../assets/icons/search.png')} />;
    case 'filter':
      return <Image source={require('../../assets/icons/filter.png')} />;
    case 'caretLeft':
      return <Image source={require('../../assets/icons/caret-left.png')} />;
    case 'caretRight':
      return <Image source={require('../../assets/icons/caret-right.png')} />;
    case 'close':
      return <Image source={require('../../assets/icons/close.png')} />;
    case 'cancel':
      return <Image source={require('../../assets/icons/cancel.png')} />;
    case 'rightGo':
      return <Image source={require('../../assets/icons/right-go.png')} />;
    case 'rightGoLight':
      return (
        <Image source={require('../../assets/icons/right-go-light.png')} />
      );
  }
};

Icon.propTypes = {
  i: PropTypes.string.isRequired,
};

export default Icon;
