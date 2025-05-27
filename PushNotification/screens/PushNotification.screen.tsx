import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

function PushNotificationScreen() {
  const [notification, setNotification] = useState<any | null>(null);

  useEffect(() => {
    // Foreground message handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage.notification);
      setNotification(remoteMessage.notification);
      Alert.alert(
        remoteMessage.notification?.title || '',
        remoteMessage.notification?.body || '',
      );
    });

    // When app is opened from background by tapping notification
    const unsubscribeOnNotificationOpened = messaging().onNotificationOpenedApp(
      remoteMessage => {
        console.log(
          'Notification caused app to open from background:',
          remoteMessage.notification,
        );
        setNotification(remoteMessage.notification);
      },
    );

    // When app is opened from quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setNotification(remoteMessage.notification);
        }
      });

    // Cleanup subscriptions
    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpened();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>
        App to demonstrate push notification
      </Text>

      {notification ? (
        <>
          <Text style={{marginTop: 20, fontSize: 28, fontWeight: '600'}}>
            Notification Received:
          </Text>
          <Text style={{fontSize: 24, textAlign: 'center', marginTop: 10}}>
            {notification.title}
          </Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 5}}>
            {notification.body}
          </Text>
        </>
      ) : (
        <Text style={{marginTop: 20, fontSize: 20, color: 'gray'}}>
          No notification yet
        </Text>
      )}
    </View>
  );
}

export default PushNotificationScreen;
