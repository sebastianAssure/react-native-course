import {StyleSheet, View, ScrollView, ActivityIndicator, Text} from 'react-native';
import {MainCarousel} from '../components/MainCarousel';
import {Slider} from '../components/Slider';
import {useEffect, useState} from 'react';
import {IMovie} from '../interfaces/Movie';
import {getMarvelMovies, getPopularMovies, getTopRateMovies} from '../utils/service/TMDBService';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    gap: 10,
    marginBottom: 40,
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

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
        getTopRateMovies()
      ]);

      setMovies(popular.slice(11, 16));
      setMarvelMovies(marvel);
      setRatedMovies(topRated);
      setLoading(false);
    };

    fetchAllMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F2C94C" />
        <Text style={{color: 'white', marginTop: 10}}>Cargando películas...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.container}>
        <MainCarousel movies={movies}/>
        <View style={{paddingHorizontal: 10}}>
          <Slider
            movies={marvelMovies}
            categoryName="Marvel Studios"
            showTitle={true}
          />
          <Slider
            movies={ratedMovies}
            categoryName="Best Movies"
            showTitle={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
