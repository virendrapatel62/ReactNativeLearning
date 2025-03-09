import React, {useRef} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import shuffle from 'lodash.shuffle';
import LinearGradient from 'react-native-linear-gradient';
import sample from 'lodash.sample';
import {mainPosterImages} from '../../lib/movies';
import {COLORS} from '../../lib/colors';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import PlayIcon from '../icons/Play.icon';
import PlusIcon from '../icons/Plus.icon';

export default function HeroPoster() {
  return (
    <View
      style={StyleSheet.flatten([
        heroPosterStyle.container,
        heroPosterStyle.borderRadius,
      ])}>
      <View
        style={StyleSheet.flatten([
          heroPosterStyle.gredientContainer,
          heroPosterStyle.borderRadius,
        ])}>
        <LinearGradient
          colors={['transparent', 'transparent', 'black']}
          style={StyleSheet.flatten([
            heroPosterStyle.gredient,
            heroPosterStyle.borderRadius,
          ])}></LinearGradient>
      </View>
      <Image
        style={StyleSheet.flatten([
          heroPosterStyle.image,
          heroPosterStyle.borderRadius,
        ])}
        src={sample(mainPosterImages)}></Image>

      <View style={heroPosterStyle.footer}>
        <Typography weight={500} color={COLORS.WHITE} center>
          Watch in Hindi, Tamil,English
        </Typography>
        <View style={heroPosterStyle.actions}>
          <Button
            icon={<PlayIcon />}
            weight={600}
            containerStyle={heroPosterStyle.playButton}>
            Play
          </Button>
          <Button
            icon={<PlusIcon fill={COLORS.WHITE} />}
            weight={600}
            color={COLORS.WHITE}
            containerStyle={heroPosterStyle.addToListButton}>
            My List
          </Button>
        </View>
      </View>
    </View>
  );
}

const heroPosterStyle = StyleSheet.create({
  borderRadius: {
    borderRadius: 16,
  },

  container: {
    position: 'relative',
    aspectRatio: 3 / 4,
  },

  gredientContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  gredient: {
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    zIndex: 9,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },

  playButton: {
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  addToListButton: {
    backgroundColor: COLORS.BUTTON_DARK,
    flexGrow: 1,
  },
});
