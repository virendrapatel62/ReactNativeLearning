import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../lib/colors';
import TextField from '../atoms/TextField';
import Button from './Button';

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.signInHeading}>Sign In</Text>

      <View>
        <TextField
          keyboardType="email-address"
          placeholder="Email or mobile number"></TextField>
        <TextField secureTextEntry placeholder="Password"></TextField>

        <Button title="Sign In"></Button>
        <Text style={styles.or}>OR</Text>
        <Button
          containerStyle={styles.useCodeButtonContainer}
          title="Use a sign-in code"></Button>

        <Text style={styles.forgotPassword}>Forgot password?</Text>

        <View style={styles.newToNetflixContainer}>
          <Text style={styles.newToNetflix}>New to Netflix?</Text>
          <Text style={styles.signupNow}>Sign up now.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signInHeading: {
    fontSize: 32,
    fontWeight: 700,
    color: COLORS.WHITE,
    marginTop: 16,
  },

  or: {
    fontSize: 16,
    color: COLORS.WHITE,
    opacity: 0.7,
    textAlign: 'center',
  },

  useCodeButtonContainer: {
    backgroundColor: COLORS.BUTTON_DARK,
  },

  forgotPassword: {
    color: COLORS.WHITE,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 16,
  },

  newToNetflixContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginTop: 40,
  },

  newToNetflix: {
    color: COLORS.WHITE,
    opacity: 0.8,
    fontSize: 16,
  },
  signupNow: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 400,
  },
});
