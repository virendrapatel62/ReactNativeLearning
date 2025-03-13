import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import FoodCard from '../../components/organisms/FoodCard/FoodCard.component';
import foodFilterData from './foodFilter.data.json';
import FoodFilterCard from '../../components/organisms/FoodFilterCard/FoodFilterCard.component';
import foodData from './foods.data.json';
import LocationHeader from '../../components/organisms/LocationHeader/LocationHeader.component';
import SearchInput from '../../components/organisms/SearchInput/SearchInput.component';

export default function ZomatoHomeScreen() {
  const {width} = useWindowDimensions();
  const isIpad = width > 600;

  return (
    <View
      style={{
        width: '100%',
      }}>
      <LocationHeader />
      <SearchInput />
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foodFilterData}
          contentContainerStyle={{}}
          renderItem={({item, index}) => {
            return (
              <FoodFilterCard
                key={index}
                title={item.title}
                thumbnail={item.src}></FoodFilterCard>
            );
          }}></FlatList>

        <View
          style={{
            marginTop: 16,
          }}>
          <FlatList
            contentContainerStyle={{}}
            numColumns={isIpad ? 2 : 1}
            showsHorizontalScrollIndicator={false}
            data={foodData}
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
      </ScrollView>
    </View>
  );
}
