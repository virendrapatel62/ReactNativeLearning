import shuffle from 'lodash.shuffle';
import React, {useMemo, useRef} from 'react';
import {FlatList, Image, ImageStyle, StyleSheet, View} from 'react-native';
import Typography from '../atoms/Typography';
import {movies} from '../../lib/movies';
import {COLORS} from '../../lib/colors';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export interface IProps {
  title: string;
  posters: {
    thumbnail: string;
  }[];
  shuffle?: boolean;
  cardStyle?: ImageStyle;
  width: ImageStyle['width'];
  aspectRatio: ImageStyle['aspectRatio'];
}

export default function HorizontalScrollPosters(props: IProps) {
  const movieList = useMemo(
    () => (props.shuffle ? shuffle(props.posters) : props.posters),
    [props.shuffle],
  );

  return (
    <View style={horizontalScrollStyles.container}>
      <Typography
        color={COLORS.WHITE}
        weight={600}
        style={horizontalScrollStyles.title}>
        {props.title}
      </Typography>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movieList}
        horizontal
        contentContainerStyle={horizontalScrollStyles.listContainer}
        keyExtractor={item => item.thumbnail}
        renderItem={item => {
          const styles: ImageStyle[] = [horizontalScrollStyles.image];

          if (item.index == 0) {
            styles.push(horizontalScrollStyles.firstImage);
          }

          const style = StyleSheet.flatten(styles);

          return (
            <Image
              key={item.index}
              style={StyleSheet.flatten([
                style,
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

const horizontalScrollStyles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  title: {
    marginLeft: 16,
  },
  listContainer: {
    gap: 8,
    marginTop: 16,
  },
  image: {
    borderRadius: 8,
    objectFit: 'cover',
    backgroundColor: '#141414',
  },
  firstImage: {
    marginLeft: 16,
  },
});
