import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './FoodFilterCard.styes';

export interface IFoodFilterCardProps {
  title: string;
  thumbnail: string;
}

export default function FoodFilterCard(props: IFoodFilterCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={props.thumbnail}></Image>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}
