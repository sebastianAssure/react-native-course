import {Image, StyleSheet, View} from 'react-native';
import {MovieProps} from '../interfaces/types/MovieProps';
import {IMAGE_BASE_URL} from '@env';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants/colors';
import { TMDB_IMAGE_SIZES } from '../constants/tmdb';

export const Movie = ({movie}: MovieProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${TMDB_IMAGE_SIZES.ORIGINAL}${movie.poster_path}`}}
        style={styles.poster}
      />
      <LinearGradient
        colors={[ 
          'transparent',
          Colors.gradientLight,
          'rgba(0,0,0,0.5)',
          Colors.gradientDark,
          'black',
        ]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        style={styles.gradient}
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
    elevation: 10,
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
  },
});
