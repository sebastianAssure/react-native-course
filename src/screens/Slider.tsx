import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getPopularMovies} from '../utils/service/TMDBService';
import {Movie} from '../interfaces/Movie';

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    marginHorizontal: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: 'white',
    gap: 8,
  },
  topNav: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  centerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10
  },
  textCenter: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
        <Text>My List</Text>
        <Text>Discover</Text>
      </View>
      <View style={styles.centerBox}>
        <ScrollView>
          {movies.map(movie => (
            <Text key={movie.id} style={styles.textCenter}>
              {movie.title}
            </Text>
          ))}
        </ScrollView>
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
