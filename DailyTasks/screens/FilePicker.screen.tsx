import React from 'react';
import {Button, View} from 'react-native';
import Text from '../components/atoms/Text/Text.component';

export default async function FilePickerScreen() {
  return (
    <Text>Hello</Text>
    // <View>
    //   <Text fontSize={28} color="black">
    //     File Picker
    //   </Text>

    //   <Button
    //     title="single file import"
    //     onPress={async () => {
    //       try {
    //         const [pickResult] = await pick();
    //         // const [pickResult] = await pick({mode:'import'}) // equivalent
    //         // do something with the picked file
    //       } catch (err: unknown) {
    //         // see error handling
    //       }
    //     }}
    //   />
    // </View>
  );
}
