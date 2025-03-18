import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView as SafeAreaViewIOS,
  Platform,
} from 'react-native';
import ZomatoHomeScreen from './screens/ZomatoHomeScreen/ZomatoHomeScreen.component';

import {SafeAreaView} from 'react-native-safe-area-context';
import CartScreen from './screens/CartScreen/CartScreen.component';
import CartScreenAnkt from './screens/CartScreen/CartScreenAnkt.component';
import IconDemoScreen from './screens/IconDemoScreen';

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

        <IconDemoScreen />
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
