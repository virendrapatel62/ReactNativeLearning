import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import NavigationLayout from './navigation/navigation.layout';

import ReactNativeBiometrics from 'react-native-biometrics';
import Flexbox from './components/atoms/FlexBox/Flexbox.component';
import Text from './components/atoms/Text/Text.component';

const disableAuthentication = true;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(disableAuthentication);
  const [isAuthenticating, setIsAuthenticating] = useState(
    !disableAuthentication,
  );

  useEffect(() => {
    console.log('@App mounted');

    try {
      if (!disableAuthentication) {
        authenticateUser();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const authenticateUser = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();

      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (
        available &&
        (biometryType === 'TouchID' ||
          biometryType === 'FaceID' ||
          biometryType === 'Biometrics')
      ) {
        rnBiometrics
          .simplePrompt({promptMessage: 'Unlock to continue'})
          .then(result => {
            if (result.success) {
              console.log('@AppUseEffect: Auth success');
              setIsAuthenticated(true);
            } else {
              console.log('@AppUseEffect: Auth failed');
              setIsAuthenticated(false);
            }
          })
          .catch(() => {
            console.log('@AppUseEffect: Auth cancelled or error');
            setIsAuthenticated(false);
          })
          .finally(() => {
            setIsAuthenticating(false);
          });
      } else {
        console.log('@AppUseEffect: Biometrics not available');
        setIsAuthenticating(false);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticating) {
    return (
      <Flexbox justifyContent="center" alignItems="center" style={{flex: 1}}>
        <ActivityIndicator size="large" color="#fff" />
        <Text color="white" fontSize={18} style={{marginTop: 10}}>
          Authenticating...
        </Text>
      </Flexbox>
    );
  }

  if (isAuthenticated) {
    return <NavigationLayout />;
  }

  return (
    <Flexbox justifyContent="center" alignItems="center" style={{flex: 1}}>
      <Text color="white" fontSize={20}>
        ❌ Cannot use app without authentication
      </Text>
    </Flexbox>
  );
}
