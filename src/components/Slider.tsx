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
import MovieCard from './MovieCard';
import { ThemeColors } from '../../types/ThemeColors';
import { useThemedStyles } from '../hooks/useThemedStyles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SeeMore'>;

export const Slider = ({ movies, categoryName, showTitle }: SliderProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useThemedStyles();
  const styles = getStyles(colors);

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
          <MovieCard
            movie={item}
            showTitle={true}
            isWishListScreen={false}
          />
        )}
      />
    </View>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: 5,
    },
    flatList: {
      backgroundColor: colors.background,
      paddingVertical: 10,
    },
    contentContainer: {
      gap: 16,
      paddingHorizontal: 4,
    },
    card: {
      width: 160,
      borderRadius: 12,
      backgroundColor: colors.background,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 220,
      borderRadius: 12,
    },
    title: {
      color: colors.text,
      paddingTop: 8,
      fontFamily: 'Gilroy-Medium',
    },
  });
