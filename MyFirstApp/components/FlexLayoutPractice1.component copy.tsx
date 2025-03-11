import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';

export default function FlexLayoutPractice1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
        <Text style={styles.headerTextBlue}>Filter</Text>
      </View>
      <View style={styles.netflixSubscriptionContainer}>
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}>
          <View style={styles.netflixSubscriptionIcon}>
            <Image
              style={{width: 28, aspectRatio: 1}}
              src="https://cdn-icons-png.freepik.com/256/15313/15313590.png"></Image>
          </View>
          <View style={styles.netflixSubscriptionTitleContainer}>
            <Text style={styles.netflixSubscriptionTitle}>
              Netflix Subscriptions
            </Text>
            <Text style={styles.netflixSubscriptionDate}>
              June 20, 2024 at 1:50 PM
            </Text>
          </View>
        </View>
        <View style={styles.netflixSubscriptionAmountContainer}>
          <Text style={styles.netflixSubscriptionAmount}>- $150.00</Text>
          <Text style={styles.netflixSubscriptionCategory}>Entertainment</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: '600',
  },
  headerTextBlue: {
    fontWeight: '600',
    color: 'dodgerblue',
  },
  netflixSubscriptionContainer: {
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  netflixSubscriptionIcon: {
    height: 48,
    aspectRatio: 1,
    backgroundColor: '#eee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  netflixSubscriptionTitleContainer: {
    display: 'flex',
    gap: 4,
  },
  netflixSubscriptionTitle: {
    fontWeight: '600',
  },
  netflixSubscriptionDate: {
    fontWeight: '400',
    color: 'gray',
  },
  netflixSubscriptionAmountContainer: {
    gap: 4,
  },
  netflixSubscriptionAmount: {
    fontWeight: '600',
    color: 'red',
    textAlign: 'right',
  },
  netflixSubscriptionCategory: {
    fontWeight: '400',
    color: 'gray',
    textAlign: 'right',
  },
});
