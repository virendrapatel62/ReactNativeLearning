/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ColorChangerScreen from './screens/ColorChanger.screen';
import TodoAppScreen from './screens/TodoApp.screen';

AppRegistry.registerComponent(appName, () => TodoAppScreen);
