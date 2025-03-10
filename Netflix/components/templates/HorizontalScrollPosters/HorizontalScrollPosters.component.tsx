import shuffle from 'lodash.shuffle';
import React, {useMemo} from 'react';
import {FlatList, Image, ImageStyle, StyleSheet, View} from 'react-native';
import {COLORS} from '../../atoms/colors';
import Typography from '../../atoms/Typography/Typograpy.component';
import {styles} from './HorizontalScrollPosters.styles';
import {IHorizontalScrollPostersProps} from './HorizontalScrollPosters.types';

export default function HorizontalScrollPosters(
  props: IHorizontalScrollPostersProps,
) {
  const movieList = useMemo(
    () => (props.shuffle ? shuffle(props.posters) : props.posters),
    [props.shuffle],
  );

  return (
    <View style={styles.container}>
      <Typography color={COLORS.WHITE} weight={600} style={styles.title}>
        {props.title}
      </Typography>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movieList}
        horizontal
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.thumbnail}
        renderItem={item => {
          const _styles: ImageStyle[] = [styles.image];

          if (item.index == 0) {
            _styles.push(styles.firstImage);
          }

          return (
            <Image
              key={item.index}
              style={StyleSheet.flatten([
                ..._styles,
                {
                  width: props.width,
                  aspectRatio: props.aspectRatio,
                },
                props.cardStyle,
              ])}
              src={item.item.thumbnail}></Image>
          );
        }}></FlatList>
    </View>
  );
}
