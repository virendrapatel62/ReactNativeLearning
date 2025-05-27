import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import messaging, {
  RemoteMessage,
  Notification,
} from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('FCM Token:', fcmToken);
    // Send this token to your server to send push notifications
  }
};

function App() {
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    requestUserPermission();
    getToken();

    // Foreground message handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage.notification);
      setNotification(remoteMessage.notification);
      Alert.alert(
        remoteMessage.notification?.title || '',
        remoteMessage.notification?.body || '',
      );
    });

    // When app is opened from background state by tapping notification
    const unsubscribeOnNotificationOpened = messaging().onNotificationOpenedApp(
      remoteMessage => {
        console.log(
          'Notification caused app to open from background:',
          remoteMessage.notification,
        );
        setNotification(remoteMessage.notification);
      },
    );

    // When app is opened from quit state by tapping notification
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

export default App;
