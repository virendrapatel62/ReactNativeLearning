import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../lib/colors';
import Typography, {ITypographyProps} from './Typography';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {TouchableProps} from 'react-native-svg';

interface ButtonProps extends PropsWithChildren, ITypographyProps {
  containerStyle?: ViewStyle;
  children: string;
  backgroundColor?: string;
}

export default function Button(props: ButtonProps) {
  const {children, containerStyle, ...typographyProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.button,
        ...(props.containerStyle || {}),
        backgroundColor: props.backgroundColor,
      }}>
      <Typography {...typographyProps}>{props.children}</Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
