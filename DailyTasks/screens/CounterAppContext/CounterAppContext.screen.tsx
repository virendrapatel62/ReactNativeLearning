import React, {useMemo, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeProvider, useTheme} from './ThemeContext';
import {ContextComposer, useColor, useShape} from './ComposerContext';

export const getCounterStyles = (dark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: dark ? '#222' : '#fff',
    },
    text: {
      fontSize: 48,
      color: dark ? '#fff' : '#000',
      borderRadius: '50%',
      borderWidth: 1,
      padding: 50,
      borderColor: dark ? '#fff' : '#000',
      marginBottom: 28,
      display: 'flex',
    },
    textContainer: {
      borderRadius: 18,
      borderWidth: 1,
      height: 50,
      width: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      marginVertical: 18,
    },
    simpleText: {
      fontSize: 20,
      color: dark ? '#fff' : '#000',
    },
    button: {
      fontSize: 16,
      padding: 8,
      borderRadius: 8,
      borderWidth: 1,
      marginTop: 16,
      color: !dark ? '#fff' : '#000',
      borderColor: dark ? '#fff' : '#000',
      backgroundColor: dark ? '#fff' : '#000',
    },
  });

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const {dark, toggleTheme} = useTheme();

  const color = useColor();
  const shape = useShape();

  const styles = useMemo(() => getCounterStyles(dark), [dark]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={styles.button}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.button}>Change Theme</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.simpleText]}>{color}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.simpleText]}>{shape}</Text>
      </View>
    </View>
  );
};

export default function CounterAppContextScreen() {
  return (
    <ContextComposer>
      <Counter />
    </ContextComposer>
  );
}
