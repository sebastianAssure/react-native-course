import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { IMAGE_BASE_URL } from '@env';
import { CarouselHeader } from './CarouselHeader';
import { SliderProps } from '../interfaces/SliderProps';

export const Slider = ({ movies, categoryName, showTitle }: SliderProps) => {
  const handlePress = () => {
    console.log('See more was clicked!');
  };

  return (
    <View style={styles.container}>
      <CarouselHeader text={categoryName} colorText="white" onPressed={handlePress} />
      <FlatList
        horizontal
        data={movies}
        style={styles.flatList}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              style={styles.image}
            />
            {showTitle && <Text style={styles.title}>{item.title}</Text>}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
  },
  flatList: {
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  contentContainer: {
    gap: 16,
    paddingHorizontal: 4,
  },
  card: {
    width: 160,
    borderRadius: 12,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  title: {
    color: 'white',
    paddingTop: 8,
    fontFamily: 'Gilroy-Medium'
  },
});
