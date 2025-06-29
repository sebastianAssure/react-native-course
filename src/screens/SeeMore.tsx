import { RouteProp, useRoute } from '@react-navigation/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { RootStackParamList } from '../interfaces/types/RootStackParamList';
import { useTMDB } from '../hooks/useTMDB';
import MovieCard from '../components/MovieCard';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { ThemeColors } from '../../types/ThemeColors';

type SeeMoreRouteProp = RouteProp<RootStackParamList, 'SeeMore'>;

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 16;

export const SeeMore = () => {
  const route = useRoute<SeeMoreRouteProp>();
  const { endpoint, param } = route.params;
  const { movies, loading } = useTMDB(endpoint, param);
  const { colors } = useThemedStyles();
  const styles = getStyles(colors);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading movies...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <MovieCard movie={item} showTitle={true} isWishListScreen={false} />
        )}
      />
    </View>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 10
    },
    listContent: {
      padding: 8,
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    card: {
      width: ITEM_WIDTH,
      borderRadius: 12,
      backgroundColor: '#1e1e1e',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 220,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    title: {
      color: 'white',
      padding: 8,
      fontFamily: 'Gilroy-Medium',
      fontSize: 14,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    loadingText: {
      color: 'white',
      marginTop: 10,
      fontFamily: 'Gilroy-Medium',
    },
  });
