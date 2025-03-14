import React, {ReactNode} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Text from '../../atoms/Text/Text.component';
import colors from '../../atoms/colors';
import Flexbox from '../../organisms/Flexbox/Flexbox.component';
import SortIcon from '../../atoms/icons/Sort.icon';
import CloseIcon from '../../atoms/icons/Close.icon';

interface IFilterOption {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label: string;
  selected?: boolean;
}
export interface IFilterProps {
  options: IFilterOption[];
}
export interface IFilterChipProps {
  item: IFilterOption;
  selected?: boolean;
}

function FilterChip({item}: IFilterChipProps) {
  return (
    <Flexbox
      style={StyleSheet.flatten([
        styles.textContainer,
        item.selected ? styles.selectedChip : {},
      ])}
      row
      justifyContentCenter
      alignItemsCenter>
      {item.leftIcon && (
        <Flexbox
          justifyContentCenter
          alignItemsCenter
          style={{
            height: 20,
            width: 20,
          }}>
          {item.leftIcon}
        </Flexbox>
      )}

      <Text style={styles.text}>{item.label}</Text>

      {!item.selected && item.rightIcon && (
        <Flexbox
          justifyContentCenter
          alignItemsCenter
          style={{
            height: 20,
            width: 20,
          }}>
          {item.rightIcon}
        </Flexbox>
      )}

      {item.selected && (
        <Flexbox
          justifyContentCenter
          alignItemsCenter
          style={{
            height: 12,
            width: 12,
          }}>
          <CloseIcon />
        </Flexbox>
      )}
    </Flexbox>
  );
}

export default function Filters(props: IFilterProps) {
  console.log(props.options);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={props.options}
      renderItem={FilterChip}></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginVertical: 8,
    paddingHorizontal: 10,
  },

  textContainer: {
    padding: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: colors.grayLight,
    gap: 4,
  },

  selectedChip: {
    borderColor: 'green',
    backgroundColor: '#edf5ee',
  },

  text: {
    fontSize: 12,
    color: colors.textPrimary,
  },
});
