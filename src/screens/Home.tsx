import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { MainCarousel } from '../components/MainCarousel';
import { Slider } from '../components/Slider';
import { useTMDB } from '../hooks/useTMDB';
import { params } from '../utils/params';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { ThemeColors } from '../../types/ThemeColors';
import Highlight from '../components/Highlight';

export const HomeScreen = () => {
  const { movies: popularMovies, loading: loadingPopular } = useTMDB('/movie/popular', params.popular);
  const { movies: ratedMovies, loading: loadingRated } = useTMDB('/movie/top_rated', params.topRated);
  const { movies: marvelMovies, loading: loadingMarvel } = useTMDB('/discover/movie', params.marvel);
  const { colors } = useThemedStyles();
  const styles = getStyles(colors);

  const loading = loadingMarvel || loadingPopular || loadingRated;

  const topFivePopularMovies = popularMovies.slice(0, 5);
  const topFiveRatedMovies = ratedMovies.slice(0, 5);
  const topFiveMarvelMovies = marvelMovies.slice(0, 5);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading movies...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <MainCarousel movies={topFivePopularMovies} />
        <View style={{ paddingHorizontal: 10 }}>
          <Slider
            movies={topFiveMarvelMovies}
            categoryName="Marvel studios"
            showTitle={true}
          />
          <Slider
            movies={topFiveRatedMovies}
            categoryName="Best movies"
            showTitle={false}
          />
        </View>
        <View style={styles.highlight}>
          <Highlight />
        </View>
      </View>
    </ScrollView>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: colors.background,
      gap: 10,
      marginBottom: 40,
      height: '100%',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    loadingText: {
      color: colors.text,
      marginTop: 10,
      fontFamily: 'Gilroy-Medium',
    },
    highlight: {
      paddingTop: 20
    }
  });
