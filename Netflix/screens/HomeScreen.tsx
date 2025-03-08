import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/atoms/Button';
import Typography from '../components/atoms/Typography';
import {COLORS} from '../lib/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.poster}>
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
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ba6514220048531.67bc95ef8f0b6.png"></Image>

            <View style={heroPosterStyle.footer}>
              <Typography weight={500} color={COLORS.WHITE} center>
                Watch in Hindi, Tamil,English
              </Typography>
              <View style={heroPosterStyle.actions}>
                <Button
                  weight={600}
                  containerStyle={heroPosterStyle.playButton}>
                  Play
                </Button>
                <Button
                  weight={600}
                  color={COLORS.WHITE}
                  containerStyle={heroPosterStyle.addToListButton}>
                  My List
                </Button>
              </View>
            </View>
          </View>
        </View>

        <HorizontalScrollCards />
        <HorizontalScrollCards />
        <HorizontalScrollCards />
      </ScrollView>
    </SafeAreaView>
  );
}

function HorizontalScrollCards() {
  return (
    <View style={horizontalScrollStyles.container}>
      <Typography
        color={COLORS.WHITE}
        weight={600}
        style={horizontalScrollStyles.title}>
        Relentless Crime Dramas
      </Typography>
      <FlatList
        data={Array(10).fill(0)}
        horizontal
        contentContainerStyle={horizontalScrollStyles.listContainer}
        renderItem={(item: any) => {
          const styles: any[] = [horizontalScrollStyles.image];

          if (item.index == 0) {
            styles.push(horizontalScrollStyles.firstImage);
          }

          const style = StyleSheet.flatten(styles);

          return (
            <Image
              style={style}
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76b1a1219468325.67b31310d5998.jpg"></Image>
          );
        }}></FlatList>
    </View>
  );
}

const horizontalScrollStyles = StyleSheet.create({
  container: {
    gap: 8,
    marginTop: 16,
    height: 200, // Questions for auto fit
  },

  title: {
    marginLeft: 16,
  },

  listContainer: {
    gap: 8,
    marginTop: 8,
  },
  image: {
    flex: 1,
    width: 120,
    aspectRatio: 3 / 4,
    borderRadius: 8,
  },

  firstImage: {
    marginLeft: 16,
  },
});

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

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2e303d',
    flex: 1,
    paddingBottom: 200,
  },
  container: {},

  poster: {
    padding: 16,
  },
});
