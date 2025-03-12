import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

interface FlexboxContainerProps {
  row?: boolean;
  column?: boolean;
  justifyContentCenter?: boolean;
  alignItemsCenter?: boolean;
  justifyContentSpaceBetween?: boolean;
  gap?: ViewStyle['gap'];
  style?: ViewStyle;
  children: React.ReactNode;
}

const Flexbox: React.FC<FlexboxContainerProps> = ({
  row = false,
  column = false,
  justifyContentCenter = false,
  alignItemsCenter = false,
  justifyContentSpaceBetween = false,
  style,
  children,
  ...props
}) => {
  const flexDirection = row ? 'row' : column ? 'column' : 'column';
  const justifyContent = justifyContentCenter
    ? 'center'
    : justifyContentSpaceBetween
    ? 'space-between'
    : 'flex-start';
  const alignItems = alignItemsCenter ? 'center' : 'stretch';

  console.log({justifyContent});

  const containerStyle: ViewStyle = {
    flexDirection,
    justifyContent,
    alignItems,
    gap: props.gap,
    ...style,
  };

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default Flexbox;
