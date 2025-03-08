import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../lib/colors';
import TextField from '../atoms/TextField';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

export default function LoginForm() {
  return (
    <Fragment>
      <Typography
        size={32}
        weight={700}
        color={COLORS.WHITE}
        style={{marginTop: 16}}>
        Sign In
      </Typography>

      <View>
        <TextField
          keyboardType="email-address"
          placeholder="Email or mobile number"></TextField>
        <TextField secureTextEntry placeholder="Password"></TextField>

        <Button
          containerStyle={styles.button}
          backgroundColor={COLORS.NETFLIX_RED}
          color={COLORS.WHITE}>
          Sign In
        </Button>

        <Typography color={COLORS.WHITE} opacity={0.7} style={styles.or}>
          OR
        </Typography>

        <Button
          color={COLORS.WHITE}
          containerStyle={styles.button}
          backgroundColor={COLORS.BUTTON_DARK}>
          Use a sign-in code
        </Button>

        <Typography color={COLORS.WHITE} style={styles.forgotPassword}>
          Forgot password?
        </Typography>

        <View style={styles.newToNetflixContainer}>
          <Typography opacity={0.7} color={COLORS.WHITE}>
            New to Netflix?
          </Typography>
          <Typography weight={400} color={COLORS.WHITE}>
            Sign up now.
          </Typography>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  or: {
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },

  forgotPassword: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  newToNetflixContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginTop: 40,
  },
});
