import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

export const CircleImageComp = props => {
  const {styles} = props;
  return (
    <Image
      source={props?.image}
      style={{
        borderRadius: Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ),
        width: Dimensions.get('window').width * 0.13,
        height: Dimensions.get('window').width * 0.13,
        ...styles,
      }}
    />
  );
};
