import * as React from 'react';
import {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {getPopularMovies} from '../utils/service/TMDBService';
import {IMovie} from '../interfaces/Movie';
import {Movie} from './Movie';
import {ButtonCustom} from './ButtonCustom';


const {width, height} = Dimensions.get('window');

export const MainCarousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data.slice(0, 5));
    };

    fetchMovies();
  }, []);

  return (
    <View style={{height: height * 0.5}}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.48}
        data={movies}
        onProgressChange={progress}
        loop={true}
        autoPlay={true}
        renderItem={({index}) => <Movie movie={movies[index]} />}
      />
      <View
        style={{
          position: 'absolute',
          top: height * 0.37,
          width: '100%',
          paddingHorizontal: 20,
          gap: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>My list</Text>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Discover</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 18,
            paddingTop: 5,
          }}>
          <ButtonCustom text="+ Wishlist" color="#333333" colorText="white" />
          <ButtonCustom text="Details" color="#F2C94C" colorText="#333333" />
        </View>

        <Pagination.Basic
          progress={progress}
          data={movies}
          dotStyle={{backgroundColor: 'white', borderRadius: 50}}
          activeDotStyle={{backgroundColor: '#F2C94C'}}
          containerStyle={{gap: 15, marginTop: 2}}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};
