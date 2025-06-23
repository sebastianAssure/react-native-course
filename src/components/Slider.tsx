import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { IMAGE_BASE_URL } from '@env';
import { CarouselHeader } from './CarouselHeader';
import { SliderProps } from '../interfaces/types/SliderProps';
import { Colors } from '../constants/colors';
import { TMDB_IMAGE_SIZES } from '../constants/tmdb';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/types/RootStackParamList';
import { categoryConfigMap } from '../utils/categoryConfigMap';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SeeMore'>;

export const Slider = ({ movies, categoryName, showTitle }: SliderProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    const { endpoint, param } = categoryConfigMap[categoryName];

    if (!endpoint) {
      console.warn(`No endpoint configured for category: ${categoryName}`);
      return;
    }

    navigation.navigate('SeeMore', {
      endpoint,
      title: categoryName,
      param: param
    });
  };

  return (
    <View style={styles.container}>
      <CarouselHeader
        text={categoryName}
        colorText="white"
        onPressed={handlePress}
      />
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
              source={{
                uri: `${IMAGE_BASE_URL}${TMDB_IMAGE_SIZES.SMALL}${item.poster_path}`,
              }}  
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
    backgroundColor: Colors.backgroundDark,
    paddingVertical: 10,
  },
  contentContainer: {
    gap: 16,
    paddingHorizontal: 4,
  },
  card: {
    width: 160,
    borderRadius: 12,
    backgroundColor: Colors.backgroundDark,
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
    fontFamily: 'Gilroy-Medium',
  },
});
