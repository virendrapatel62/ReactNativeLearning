import React, {useMemo} from 'react';
import {
  TextProps,
  TextStyle,
  Text as ReactNativeText,
  ViewProps,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../colors';
import Text from '../Text/Text.component';
import Flexbox from '../../organisms/Flexbox/Flexbox.component';

interface IAvatar {
  size?: TextStyle['width'];
  fontWeight?: TextStyle['fontWeight'];

  backgroundColor?: TextStyle['backgroundColor'];
  color?: TextStyle['color'];

  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  rounded?: boolean;

  username: string;
}

export default function Avatar(props: IAvatar) {
  const styles: TextStyle = Object.assign({} as TextProps, props.textStyle);

  const viewStyle: ViewStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    width: props.size,
    backgroundColor: props.backgroundColor,

    borderRadius: props.rounded ? 50 : 0,
    ...props.containerStyle,
  };

  return (
    <View style={viewStyle}>
      <Text style={styles}>{props.username.charAt(0).toUpperCase()}</Text>
    </View>
  );
}
