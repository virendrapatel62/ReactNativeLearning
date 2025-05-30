import React, {Fragment, useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';

// Push Notification Permission
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
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      return fcmToken;
    }
  } catch (err) {
    console.error('FCM token error:', err);
  }
};

function PushNotificationSetup() {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const navigation = useNavigation();

  function onNotificationReceived(remoteMessage: any) {
    console.log('Notification:', remoteMessage.notification);
    const notification = remoteMessage.notification;
    const data = remoteMessage.data || {};

    const screenType = data.screenType;
    const itemId = data.id;

    if (screenType === 'ProductDetails') {
      navigation.navigate('ProductDetails', {id: itemId});
    } else if (screenType === 'TodoDetails') {
      navigation.navigate('TodoDetails', {id: itemId});
    }
  }

  useEffect(() => {
    requestUserPermission();
    getToken().then(token => {
      if (token) {
        setFcmToken(token);
      }
    });

    // Foreground message handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage);
      onNotificationReceived(remoteMessage);
    });

    // When app is opened from background by tapping notification
    const unsubscribeOnNotificationOpened = messaging().onNotificationOpenedApp(
      remoteMessage => {
        onNotificationReceived(remoteMessage);
      },
    );

    // When app is opened from quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          onNotificationReceived(remoteMessage);
        }
      });

    // Cleanup subscriptions
    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpened();
    };
  }, []);

  console.log('fcmToken', fcmToken);

  return <Fragment></Fragment>;
}

export default PushNotificationSetup;
