import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Text, {ITextProps} from '../../atoms/Text/Text.component';
import {styles} from './SeparatorHeading.styes';
import Flexbox from '../Flexbox/Flexbox.component';

interface ISeparatorHeading extends PropsWithChildren {
  children: string;
  uppercase?: boolean;
  textProps?: ITextProps;
}

export default function SeparatorHeading(props: ISeparatorHeading) {
  const {children, textProps = {}, uppercase} = props;
  return (
    <Flexbox
      style={styles.container}
      row
      justifyContentCenter
      alignItemsCenter
      gap={8}>
      <View style={styles.line}></View>
      <Text {...textProps} textTransform={uppercase ? 'uppercase' : 'none'}>
        {children}
      </Text>
      <View style={styles.line}></View>
    </Flexbox>
  );
}
