import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';

const TextInputScreen = () => {
  const [defaultText, setDefaultText] = useState('');
  const [numericText, setNumericText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [decimalText, setDecimalText] = useState('');
  const [numberText, setNumberText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [twitterText, setTwitterText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Keyboard Types Example</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Default Keyboard</Text>
        <TextInput
          style={styles.input}
          placeholder="Default"
          value={defaultText}
          onChangeText={setDefaultText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numeric Keyboard</Text>
        <TextInput
          style={styles.input}
          placeholder="Numeric"
          keyboardType="numeric"
          value={numericText}
          onChangeText={setNumericText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Pad</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phoneText}
          onChangeText={setPhoneText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Keyboard</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={emailText}
          onChangeText={setEmailText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Decimal Pad</Text>
        <TextInput
          style={styles.input}
          placeholder="Decimal"
          keyboardType="decimal-pad"
          value={decimalText}
          onChangeText={setDecimalText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number Pad</Text>
        <TextInput
          style={styles.input}
          placeholder="Number"
          keyboardType="number-pad"
          value={numberText}
          onChangeText={setNumberText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Visible Password Keyboard</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={false}
          keyboardType="visible-password"
          value={passwordText}
          onChangeText={setPasswordText}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Twitter Keyboard</Text>
        <TextInput
          style={styles.input}
          placeholder="Twitter"
          keyboardType="twitter"
          value={twitterText}
          onChangeText={setTwitterText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default TextInputScreen;
