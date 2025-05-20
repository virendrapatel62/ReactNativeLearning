import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SecureScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>🔒 This is a protected screen.</Text>
      </View>
    </View>
  );
};

export default SecureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  warningText: {
    color: '#fff',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
