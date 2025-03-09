import React, {PropsWithChildren, ReactElement, ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Typography, {ITypographyProps} from './Typography';

interface ButtonProps extends PropsWithChildren, ITypographyProps {
  containerStyle?: ViewStyle;
  children: string;
  backgroundColor?: string;
  icon?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const {children, containerStyle, ...typographyProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.button,
        ...(props.containerStyle || {}),
        backgroundColor:
          props.backgroundColor || props.containerStyle?.backgroundColor,
      }}>
      {props.icon}
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
    flexDirection: 'row',
    gap: 4,

    borderRadius: 4,
  },
});
