import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {MovieProps} from '../interfaces/MovieProps';
import {IMAGE_BASE_URL} from '@env';

export const Movie = ({movie}: MovieProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
        style={styles.poster}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 10
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'fill'
  }
});
