import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>🏠 Home Screen</Text>
    </View>
  );
}

function ProfileScreen({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>👤 Profile Screen for ID: {route.params.id}</Text>
    </View>
  );
}

// Push Notification Permission
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('FCM Token:', fcmToken);
    }
  } catch (err) {
    console.error('FCM token error:', err);
  }
};

// Deep Linking Config
const linking = {
  prefixes: ['virendra://'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile/:id',
    },
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
