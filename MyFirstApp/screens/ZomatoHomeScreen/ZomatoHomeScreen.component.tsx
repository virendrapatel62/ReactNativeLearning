import React, {Fragment} from 'react';
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
import SeparatorHeading from '../../components/organisms/SeparatorHeading/SeparatorHeading.component';
import colors from '../../components/atoms/colors';
import Restaurants from '../../components/templates/Restaurants/Restaurants.component';
import ImageFilters from '../../components/templates/ImageFilters/ImageFilters.component';
import Filters from '../../components/templates/Filters/Filters.component';
import SortIcon from '../../components/atoms/icons/Sort.icon';
import NewIcon from '../../components/atoms/icons/New.icon';
import RupeeIcon from '../../components/atoms/icons/Rupee.icon';
import ChevronDown from '../../components/atoms/icons/ChevronDown.icon';
import Dropdown from '../../components/atoms/icons/Dropdown.icon';

const filterOptions = [
  {
    label: 'Sort',
    leftIcon: <SortIcon />,
    rightIcon: <Dropdown />,
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

      <ScrollView>
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
          <Restaurants data={foodData} />
        </View>
      </ScrollView>
    </View>
  );
}
