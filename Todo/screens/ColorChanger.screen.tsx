/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ColorChangerScreen(): React.JSX.Element {
  const [colors, setColor] = useState(['dodgerblue', 'tomato', 'lightblue']);

  const getRandomHexColor = (): string => {
    // Generate a random hex color code
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };

  function handleColorChange(index: number) {
    const updated = [...colors];
    updated[index] = getRandomHexColor();
    setColor(updated);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={[styles.container]}>
        {colors.map((_color, index) => (
          <TouchableOpacity
            key={_color}
            onPress={() => handleColorChange(index)}
            style={[styles.button, {backgroundColor: _color}]}>
            <Text style={styles.buttonText}>{_color}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    gap: 16,

    flex: 1,
  },

  button: {
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,
    borderRadius: 16,

    borderColor: '#fff',
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 700,
  },
});

export default ColorChangerScreen;
