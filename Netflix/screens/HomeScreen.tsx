import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import HeroPoster from '../components/organisms/HeroPoster';
import HorizontalScrollPosters from '../components/templates/HorizontalScrollPosters';
import {movies} from '../lib/movies';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.poster}>
          <HeroPoster />
        </View>

        <View>
          <HorizontalScrollPosters
            shuffle
            title="New Releases"
            posters={movies}
            width={120}
            aspectRatio={3 / 4}
          />
          <HorizontalScrollPosters
            shuffle
            title="Binge-Worthy"
            posters={movies}
            width={160}
            aspectRatio={2 / 3}
          />
          <HorizontalScrollPosters
            shuffle
            title="Popular on Netflix"
            posters={movies}
            width={228}
            aspectRatio={5 / 6}
          />
          <HorizontalScrollPosters
            shuffle
            title="Family Favorites"
            posters={movies}
            width={200}
            aspectRatio={1 / 1}
          />
          <HorizontalScrollPosters
            shuffle
            title="Award-Winning Movies"
            posters={movies}
            width={328}
            aspectRatio={16 / 9}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2e303d',
    paddingBottom: 200,
  },
  container: {},
  poster: {
    padding: 16,
  },
});
