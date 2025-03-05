import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../lib/colors';

interface ButtonProps {
  title: string;
  textStyle?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.button,
        ...(props.containerStyle || {}),
      }}>
      <Text
        style={{
          ...styles.buttonText,
          ...(props.textStyle || {}),
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: COLORS.NETFLIX_RED,

    marginTop: 16,
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: COLORS.WHITE,

    fontSize: 16,
    fontWeight: 500,
  },
});
