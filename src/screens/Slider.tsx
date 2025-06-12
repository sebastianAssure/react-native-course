import { useEffect, useState } from 'react';
import { IMAGE_BASE_URL } from '@env';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { getPopularMovies } from '../utils/service/TMDBService';
import { Movie } from '../interfaces/Movie';

export const Slider = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Text style={styles.topNavText}>My List</Text>
        <Text style={styles.topNavText}>Discover</Text>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          horizontal
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
                style={styles.poster}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  topNavText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  flatListContainer: {
    height: 380,
  },
  flatListContent: {
    gap: 16,
    paddingHorizontal: 4,
  },
  card: {
    width: 200,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 3,
  },
  poster: {
    width: '100%',
    height: 300,
  },
  movieTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
