import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import {IMovie} from '../interfaces/Movie';
import {
  getMarvelMovies,
  getPopularMovies,
  getTopRateMovies,
} from '../utils/service/TMDBService';
import {MainCarousel} from '../components/MainCarousel';
import {Slider} from '../components/Slider';
import {Colors} from '../constants/colors';

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [marvelMovies, setMarvelMovies] = useState<IMovie[]>([]);
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const [popular, marvel, topRated] = await Promise.all([
        getPopularMovies(),
        getMarvelMovies(),
        getTopRateMovies(),
      ]);

      setMovies(popular.slice(9, 14));
      setMarvelMovies(marvel);
      setRatedMovies(topRated);
      setLoading(false);
    };

    fetchAllMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading movies...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: Colors.backgroundDark}}>
      <View style={styles.container}>
        <MainCarousel movies={movies} />
        <View style={{paddingHorizontal: 10}}>
          <Slider
            movies={marvelMovies}
            categoryName="Marvel studios"
            showTitle={true}
          />
          <Slider
            movies={ratedMovies}
            categoryName="Best movies"
            showTitle={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.backgroundDark,
    gap: 10,
    marginBottom: 40,
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
    fontFamily: 'Gilroy-Medium',
  },
});
