import { Image, StyleSheet, View } from 'react-native';
import { MovieProps } from '../interfaces/types/MovieProps';
import { IMAGE_BASE_URL } from '@env';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants/colors';
import { TMDB_IMAGE_SIZES } from '../constants/tmdb';
import useTheme from '../context/theme/useTheme';

export const Movie = ({ movie }: MovieProps) => {
  const { currentTheme } = useTheme();
  const DARK_GRADIENT_COLORS = [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.2)',
    'rgba(0, 0, 0, 0.4)',
    'rgba(0, 0, 0, 0.7)',
    'black',
    'black',
  ];
  const LIGHT_GRADIENT_COLORS = [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.6)',
    '#fff',
    '#fff',
  ];
  const GRADIENT_LOCATIONS = [0, 0.2, 0.4, 0.6, 0.8, 1];

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${TMDB_IMAGE_SIZES.ORIGINAL}${movie.poster_path}` }}
        style={styles.poster}
      />
      <LinearGradient
        style={styles.blackLinearGradient}
        colors={currentTheme === 'dark' ? DARK_GRADIENT_COLORS : LIGHT_GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
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
  blackLinearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '70%',
    bottom: 0,
    pointerEvents: 'none',
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
