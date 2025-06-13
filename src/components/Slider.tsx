import {useEffect, useState} from 'react';
import {getPopularMovies} from '../utils/service/TMDBService';
import {IMovie} from '../interfaces/Movie';
import {View, Text, FlatList, Image} from 'react-native';
import {IMAGE_BASE_URL} from '@env';
import {CarouselHeader} from './CarouselHeader';

export const Slider = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const handlePress = () => {
    console.log('See more was clicked!');
  };

  return (
    <View style={{flexDirection: 'column', gap: 5, paddingTop: 15}}>
      <CarouselHeader text="Marvel studios" colorText="white" onPressed={handlePress} />
      <FlatList
        horizontal
        data={movies}
        style={{backgroundColor: 'black', paddingVertical: 10}}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 16, paddingHorizontal: 4}}
        renderItem={({item}) => (
          <View
            style={{
              width: 160,
              borderRadius: 12,
              backgroundColor: 'black',
              overflow: 'hidden',
            }}>
            <Image
              source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
              style={{width: '100%', height: 220, borderRadius: 12}}
            />
            <Text style={{color: 'white', paddingTop: 8}}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
