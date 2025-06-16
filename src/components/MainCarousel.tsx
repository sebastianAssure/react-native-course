import * as React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {Movie} from './Movie';
import {CustomButton} from './CustomButton';
import {MainCarouselProps} from '../interfaces/MainCarouselProps';
import {Colors} from '../constants/colors';
import {useState} from 'react';
import {IMovie} from '../interfaces/Movie';
import {BottomModal} from './BottomModal';

const {width, height} = Dimensions.get('window');

export const MainCarousel = ({movies}: MainCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
    setCurrentIndex(index);
  };

  return (
    <>
      <View style={styles.container}>
        <Carousel
          ref={ref}
          width={width}
          height={height * 0.48}
          data={movies}
          onProgressChange={progress}
          onSnapToItem={index => {
            setCurrentIndex(index);
          }}
          loop
          autoPlay
          scrollAnimationDuration={700}
          autoPlayInterval={3000}
          renderItem={({index}) => <Movie movie={movies[index]} />}
        />

        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>My list</Text>
            <Text style={styles.menuText}>Discover</Text>
          </View>

          <View style={styles.buttons}>
            <CustomButton
              text="+  Wishlist"
              color={Colors.secondary}
              colorText="white"
            />
            <CustomButton
              text="Details"
              color={Colors.primary}
              colorText={Colors.secondary}
              onPressed={() => {
                setSelectedMovie(movies[currentIndex]);
                setModalVisible(true);
              }}
            />
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
      <BottomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}>
        {selectedMovie && (
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedMovie.title}</Text>

            <Text style={styles.modalDate}>
              Release date:{' '}
              {new Date(selectedMovie.release_date).toLocaleDateString()}
            </Text>

            <Text style={styles.modalOverview}>{selectedMovie.overview}</Text>
          </View>
        )}
      </BottomModal>
    </>
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
    fontFamily: 'Gilroy-Medium',
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
  modalContent: {
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
    fontFamily: 'Gilroy-SemiBold',
    marginBottom: 8,
  },
  modalDate: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: 'Gilroy-Regular',
    marginBottom: 16,
  },
  modalOverview: {
    fontSize: 16,
    color: Colors.textBlack,
    fontFamily: 'Gilroy-Regular',
    lineHeight: 22,
  },
});
