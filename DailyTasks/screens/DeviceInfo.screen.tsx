import React, {useEffect, useState} from 'react';
import deviceInfo from 'react-native-device-info';
import Text from '../components/atoms/Text/Text.component';
import {View} from 'react-native';

export default async function DeviceInfoScreen() {
  return (
    <View>
      <Text color="black">{deviceInfo.getAndroidIdSync()}</Text>
      <Text color="black">{deviceInfo.getHostSync()}</Text>
      <Text color="black">{deviceInfo.getHostNamesSync()}</Text>
      <Text color="black">{deviceInfo.getDeviceSync()}</Text>
      <Text color="black">{deviceInfo.getDisplaySync()}</Text>
      <Text color="black">{deviceInfo.getFreeDiskStorageSync()}</Text>
    </View>
  );
}
