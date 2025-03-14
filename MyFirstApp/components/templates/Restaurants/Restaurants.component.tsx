import React from 'react';
import Text from '../../atoms/Text/Text.component';
import {FlatList, useWindowDimensions, View} from 'react-native';
import FoodCard from '../../organisms/FoodCard/FoodCard.component';
import useIsIpad from '../../../hooks/useIsIpad';

export interface TRestaurantsProps {
  data: {
    image: string;
    name: string;
    rating: string;
    category: string;
    price: string;
    time?: string;
  }[];
}

export default function Restaurants(props: TRestaurantsProps) {
  const isIpad = useIsIpad();
  return (
    <View>
      <FlatList
        contentContainerStyle={{}}
        numColumns={isIpad ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({item, index}) => {
          return (
            <FoodCard
              containerStyle={{
                width: isIpad ? '50%' : '100%',
              }}
              key={index}
              {...item}></FoodCard>
          );
        }}></FlatList>
    </View>
  );
}
