import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Flexbox from '../../components/atoms/FlexBox/Flexbox.component';
import Text from '../../components/atoms/Text/Text.component';

import {getCurrentLocation} from '../../lib/location';

export default function LocationPractice() {
  const [position, setPosition] = useState<any>({});
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

  const lat = position?.coords?.latitude;
  const long = position?.coords?.longitude;

  const handleButtonClick = async () => {
    setPermissionDenied(false);

    try {
      const position = await getCurrentLocation();
      console.log(position);
      setPosition(position);
    } catch (error: any) {
      console.log(error.message);
      setPermissionDenied(true);
    }
  };

  return (
    <Flexbox style={styles.container}>
      <Flexbox style={styles.header}>
        <Text fontSize={24} fontWeight="bold">
          Location Access
        </Text>
      </Flexbox>

      <Flexbox style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
          <Text fontSize={18} color="white">
            Click To Get The Location
          </Text>
        </TouchableOpacity>
      </Flexbox>

      {/* <Flexbox justifyContent="center" alignItems="center">
        <Text fontSize={16}>{JSON.stringify(position, null, 2)}</Text>
      </Flexbox> */}

      {permissionDenied && (
        <Flexbox justifyContent="center" alignItems="center">
          <Text fontSize={16} color="red">
            Location Permission denied
          </Text>
        </Flexbox>
      )}

      {lat && long && (
        <View>
          <Flexbox
            flexDirection="row"
            justifyContent="center"
            gap={20}
            alignItems="center">
            <Text fontSize={16}>Latitude : </Text>
            <Text fontSize={16}>{lat} </Text>
          </Flexbox>
          <Flexbox
            flexDirection="row"
            justifyContent="center"
            gap={20}
            alignItems="center">
            <Text fontSize={16}>Longitude : </Text>
            <Text fontSize={16}>{long} </Text>
          </Flexbox>
        </View>
      )}
    </Flexbox>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
