import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames, screens} from './navigation.config';

const Stack = createNativeStackNavigator();

export default function NavigationLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.HOME}>
        {screens.map(({Component, title}) => {
          return <Stack.Screen name={title} component={Component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
