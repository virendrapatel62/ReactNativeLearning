import React from 'react';
import Text from '../../atoms/Text/Text.component';
import {FlatList, useWindowDimensions, View} from 'react-native';
import FoodCard from '../../organisms/FoodCard/FoodCard.component';
import useIsIpad from '../../../hooks/useIsIpad';
import FoodFilterCard from '../../organisms/FoodFilterCard/FoodFilterCard.component';

export interface TImageFiltersProps {
  data: {
    src: string;
    title: string;
  }[];
}

export default function ImageFilters(props: TImageFiltersProps) {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          return (
            <FoodFilterCard
              key={index}
              title={item.title}
              thumbnail={item.src}></FoodFilterCard>
          );
        }}></FlatList>
    </View>
  );
}
