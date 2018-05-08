import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const propTypes = {
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    paddingLeft: PropTypes.number.isRequired,
    highlighted: PropTypes.bool.isRequired,
};

const defaultProps = {
    backgroundColor: 'transparent',
    color: '#333333',
    paddingLeft: 20,
    highlighted: false,
};

const ListSeparator = ({ color, backgroundColor, paddingLeft, highlighted }) => {
    if (highlighted) return null;
    return (
      <View style={{ height: StyleSheet.hairlineWidth, backgroundColor, paddingLeft }} >
        <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: color }} />
      </View>
    );
};


ListSeparator.defaultProps = defaultProps;
ListSeparator.propTypes = propTypes;
export default ListSeparator;
