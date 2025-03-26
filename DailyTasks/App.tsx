import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/Home.screen';
import TodoScreen from './screens/Todo.screen';
import UsersScreen from './screens/Users/Users.screen';

export const screens = [
  {
    Component: UsersScreen,
    title: 'Users',
  },
  {
    Component: TodoScreen,
    title: 'Todo',
  },
  {
    Component: HomeScreen,
    title: 'Home',
  },
];

type RootStackParamList = Record<string, undefined>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.title}
            component={screen.Component}
            options={{title: screen.title}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
