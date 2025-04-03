import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Text from '../../components/atoms/Text/Text.component';
import {Contact} from 'react-native-contacts/type';

import {check} from 'react-native-permissions';
import {createIconSetFromFontello} from 'react-native-vector-icons';

const isAndroid = Platform.OS == 'android';

export default function ContactExample() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      if (isAndroid) {
        const response = await check('android.permission.READ_CONTACTS');
        if (response == 'granted') {
          getContacts();
        }
      } else {
        getContacts();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getContacts = async () => {
    Contacts.getAll()
      .then(contacts => {
        console.log(contacts);
        setContacts(contacts);
      })
      .catch(error =>
        console.log('Error loading contacts:', error.message, error),
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts List</Text>

      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <View style={styles.contactItem}>
            <Text style={styles.name}>{item.givenName}</Text>
            <Text style={styles.number}>
              {item.phoneNumbers.length > 0
                ? item.phoneNumbers[0].number
                : 'No number'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row', // नाम और नंबर को एक ही लाइन में लाने के लिए
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  number: {
    fontSize: 16,
    color: '#007bff', // Blue color for better visibility
  },
});
