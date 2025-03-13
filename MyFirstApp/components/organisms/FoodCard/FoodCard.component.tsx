import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import StarIcon from '../../atoms/icons/Star.icon';
import {styles} from './FoodCard.styes';
import Text from '../../atoms/Text/Text.component';
import colors from '../../atoms/colors';

interface IFoodCardProps {
  image: string;
  name: string;
  rating: string;
  category: string;
  price: string;
  time?: string;
  containerStyle?: ViewStyle;
}

export default function FoodCard(props: IFoodCardProps) {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={[styles.content]}>
        <Image style={styles.image} src={props.image}></Image>

        <View style={styles.details}>
          <View style={styles.row}>
            <Text numberOfLines={2} weight={600} size={18} style={styles.name}>
              {props.name}
            </Text>
            <View style={styles.rating}>
              <Text weight={600} color={colors.textLight}>
                {props.rating}
              </Text>
              <StarIcon style={styles.ratingIcon} />
            </View>
          </View>
          <View style={styles.row}>
            <Text
              color={colors.textSecondary}
              size={12}
              numberOfLines={1}
              style={StyleSheet.flatten([styles.left])}>
              {props.category}
            </Text>
            <Text color={colors.textSecondary} size={12} style={styles.right}>
              {props.price}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.category}></Text>
            <Text color={colors.textPrimary} size={12} style={styles.right}>
              {props.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
