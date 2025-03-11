import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import StarIcon from '../../atoms/icons/Star.icon';
import {styles} from './FoodCard.styes';

interface IFoodCardProps {
  image: string;
  name: string;
  rating: string;
  category: string;
  price: string;
  time?: string;
}

export default function FoodCard(props: IFoodCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={props.image}></Image>

      <View style={styles.details}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {props.name}
          </Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{props.rating}</Text>
            <StarIcon style={styles.ratingIcon} />
          </View>
        </View>
        <View style={styles.row}>
          <Text
            numberOfLines={1}
            style={StyleSheet.flatten([styles.category, styles.left])}>
            {props.category}
          </Text>
          <Text style={StyleSheet.flatten([styles.right, styles.price])}>
            {props.price}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.category}></Text>
          <Text style={StyleSheet.flatten([styles.right, styles.time])}>
            {props.time}
          </Text>
        </View>
      </View>
    </View>
  );
}
