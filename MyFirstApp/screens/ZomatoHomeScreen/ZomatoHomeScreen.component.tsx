import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import colors from '../../components/atoms/colors';
import Dropdown from '../../components/atoms/icons/Dropdown.icon';
import NewIcon from '../../components/atoms/icons/New.icon';
import RupeeIcon from '../../components/atoms/icons/Rupee.icon';
import SortIcon from '../../components/atoms/icons/Sort.icon';
import LocationHeader from '../../components/organisms/LocationHeader/LocationHeader.component';
import SearchInput from '../../components/organisms/SearchInput/SearchInput.component';
import SeparatorHeading from '../../components/organisms/SeparatorHeading/SeparatorHeading.component';
import Filters from '../../components/templates/Filters/Filters.component';
import ImageFilters from '../../components/templates/ImageFilters/ImageFilters.component';
import Restaurants from '../../components/templates/Restaurants/Restaurants.component';
import foodFilterDataRaw from './foodFilter.data.json';
import foodData from './foods.data.json';
import shuffle from 'lodash.shuffle';

const filterOptions = [
  {
    label: 'Sort',
    leftIcon: <SortIcon />,
    rightIcon: <Dropdown />,
    selected: true,
  },
  {
    label: 'Cuisine',
    leftIcon: <NewIcon />,
    selected: true,
  },
  {
    label: 'Price',
    leftIcon: <RupeeIcon />,
  },
  {
    label: 'Rating 4.5 +',
  },
  {
    label: 'Distance',
  },
  {
    label: 'Open Now',
  },
];

export default function ZomatoHomeScreen() {
  const [foodList, setFoodList] = useState(foodData);
  const [foodFilterData, setFoodFilterData] = useState(foodFilterDataRaw);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log('Refresh Started');
    setRefreshing(true);
    setTimeout(() => {
      setFoodList(shuffle(foodList));
      setFoodFilterData(shuffle(foodFilterDataRaw));
      console.log('after 2 sec Setting refreshing to false.....');
      setRefreshing(false);
    }, 2000);
  };

  console.log({foodList, foodFilterData, refreshing});

  const renderSepratorHeading = (text: string) => {
    return (
      <SeparatorHeading
        textProps={{
          size: 14,
          color: colors.grayDark,
          style: {
            letterSpacing: 2,
          },
        }}
        uppercase>
        {text}
      </SeparatorHeading>
    );
  };

  return (
    <View
      style={{
        width: '100%',
      }}>
      <LocationHeader />
      <SearchInput />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}></RefreshControl>
        }>
        <View>
          {renderSepratorHeading("What's on your mind")}
          <ImageFilters data={foodFilterData}></ImageFilters>
        </View>
        <View
          style={{
            marginVertical: 16,
          }}>
          {renderSepratorHeading('All restaurants')}

          <Filters options={filterOptions} />
          <Restaurants data={foodList} />
        </View>
      </ScrollView>
    </View>
  );
}
