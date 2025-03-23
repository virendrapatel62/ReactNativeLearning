import React from 'react';

import {
  Platform,
  SafeAreaView as SafeAreaViewIOS,
  StyleSheet,
  View,
} from 'react-native';
import ZomatoHomeScreen from './screens/ZomatoHomeScreen/ZomatoHomeScreen.component';

import {SafeAreaView} from 'react-native-safe-area-context';
import IconDemoScreen from './screens/IconDemoScreen';
import TextInputScreen from './screens/TextInputsScreen';

const CurrentSafeArea = Platform.OS === 'ios' ? SafeAreaViewIOS : SafeAreaView;

function App(): React.JSX.Element {
  return (
    <View style={styles.view}>
      <CurrentSafeArea style={styles.view}>
        {/* <FlexLayoutPractice1 />
        <FlexLayoutPractice2 /> */}

        {/* <ZomatoHomeScreen /> */}
        {/* <CartScreen /> */}
        {/* <CartScreenAnkt /> */}

        {/* <IconDemoScreen /> */}
        <TextInputScreen />
      </CurrentSafeArea>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
