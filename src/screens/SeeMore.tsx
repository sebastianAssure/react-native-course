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
import { TMDB_IMAGE_SIZES } from '../constants/tmdb';
import { IMAGE_BASE_URL } from '@env';
import { Colors } from '../constants/colors';

type SeeMoreRouteProp = RouteProp<RootStackParamList, 'SeeMore'>;

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2 - 16;

export const SeeMore = () => {
  const route = useRoute<SeeMoreRouteProp>();
  const { endpoint, param } = route.params;
  const { movies, loading } = useTMDB(endpoint, param);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading movies...</Text>
      </View>
    );
  }

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${TMDB_IMAGE_SIZES.SMALL}${item.poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
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
    backgroundColor: Colors.backgroundDark,
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
    fontFamily: 'Gilroy-Medium',
  },
});
