import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { Movie } from './Movie';
import { CustomButton } from './CustomButton';
import { MainCarouselProps } from '../interfaces/MainCarouselProps';
import { Colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export const MainCarousel = ({ movies }: MainCarouselProps) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.48}
        data={movies}
        onProgressChange={progress}
        loop
        autoPlay
        scrollAnimationDuration={700}
        autoPlayInterval={3000}
        renderItem={({ index }) => <Movie movie={movies[index]} />}
      />

      <View style={styles.overlay}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>My list</Text>
          <Text style={styles.menuText}>Discover</Text>
        </View>

        <View style={styles.buttons}>
          <CustomButton text="+  Wishlist" color={Colors.secondary} colorText="white" />
          <CustomButton text="Details" color={Colors.primary} colorText={Colors.secondary} />
        </View>

        <Pagination.Basic
          progress={progress}
          data={movies}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          containerStyle={styles.paginationContainer}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    marginBottom: 20,
  },
  overlay: {
    position: 'absolute',
    top: height * 0.37,
    width: '100%',
    paddingHorizontal: 20,
    gap: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Medium'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    paddingTop: 5,
  },
  dot: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  paginationContainer: {
    gap: 15,
    marginTop: 2,
  },
});
