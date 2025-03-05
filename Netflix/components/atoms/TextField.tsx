import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';
import {COLORS} from '../../lib/colors';

export default function TextField(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
      {...props}></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    marginTop: 20,
    padding: 16,
    fontSize: 16,

    borderWidth: 1,
    borderColor: COLORS.INPUT_BORDER,
    borderRadius: 4,
    color: COLORS.WHITE,
  },
});
