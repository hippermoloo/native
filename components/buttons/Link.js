import React from 'react';
import { Linking, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as specs from '../../utils/constants';

class Link extends React.Component {
  navigateURL = () => {
    const { href, onPress } = this.props;

    Linking.openURL(href);
    onPress();
  };

  render() {
    const { style, color, ...props } = this.props;

    return (
      <Text {...props} onPress={this.navigateURL} style={[styles.link, { color }, style]}>
        {props.children}
      </Text>
    );
  }
}

Link.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  onPress: PropTypes.func,
  style: Text.propTypes.style,
};

Link.defaultProps = {
  color: specs.LINK_COLOR,
  href: 'null',
  onPress: () => {},
  style: {},
};

export default Link;

export const styles = StyleSheet.create({
  link: {
    height: specs.BUTTON_HEIGHT,
    paddingVertical: specs.BUTTON_PADDING,
  },
});
