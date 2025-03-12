import React from 'react';
import {View} from 'react-native';
import LocationIcon from '../../atoms/icons/Location.icon';
import colors from '../../atoms/colors';
import Text from '../../atoms/Text/Text.component';
import Flexbox from '../Flexbox/Flexbox.component';
import ChevronDown from '../../atoms/icons/ChevronDown.icon';
import Avatar from '../../atoms/Avatar/Avatar.component';

export default function LocationHeader() {
  return (
    <Flexbox
      row
      justifyContentSpaceBetween
      style={{
        width: '100%',
        padding: 10,
      }}>
      <Flexbox style={{flex: 1}} gap={6} row alignItemsCenter>
        <LocationIcon style={{fill: colors.primary}} width={24} height={24} />
        <Flexbox gap={4}>
          <Flexbox column>
            <Flexbox row alignItemsCenter>
              <Text size={16} weight={600}>
                Barela, Jabalpur
              </Text>
              <ChevronDown width={24} height={24}></ChevronDown>
            </Flexbox>
            <Text size={12} color={colors.textPrimary}>
              India
            </Text>
          </Flexbox>
        </Flexbox>
      </Flexbox>

      <Avatar
        rounded
        username="Virendra"
        backgroundColor="lightblue"
        size={32}
        color={'blue'}
      />
    </Flexbox>
  );
}
