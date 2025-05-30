import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PushNotificationScreen from './screens/PushNotificationSetup';
import ProductDetailsScreen from './screens/ProductDetails.screen';
import TodoDetailsScreen from './screens/TodoDetails.screen';
import PushNotificationSetup from './screens/PushNotificationSetup';

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
      <PushNotificationSetup />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
