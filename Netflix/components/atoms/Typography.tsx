import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {COLORS} from '../../lib/colors';

export interface ITypographyProps extends PropsWithChildren {
  children: string;
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
  opacity?: TextStyle['opacity'];
  style?: StyleProp<TextStyle>;
  muted?: boolean;
}

export default function Typography(props: ITypographyProps) {
  const defaultStyke: TextStyle = {
    fontSize: 16,
    color: COLORS.BLACK,
  };

  const additional: TextStyle = {
    ...(props.muted ? {color: COLORS.MUTED} : {}),
    ...(props.size ? {fontSize: props.size} : {}),
    ...(props.weight ? {fontWeight: props.weight} : {}),
    ...(props.color ? {color: props.color} : {}),
    ...(props.opacity ? {opacity: props.opacity} : {}),
  };

  return (
    <Text
      style={StyleSheet.flatten([defaultStyke, props.style || {}, additional])}>
      {props.children}
    </Text>
  );
}
