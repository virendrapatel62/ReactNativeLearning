import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import FlexLayoutPractice1 from './components/FlexLayoutPractice1.component copy';
import FlexLayoutPractice2 from './components/FlexLayoutPractice2.component';

function App(): React.JSX.Element {
  return (
    <View>
      <SafeAreaView style={styles.view}>
        <FlexLayoutPractice1 />

        <View
          style={{
            margin: 16,
          }}></View>

        <FlexLayoutPractice2 />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default App;
