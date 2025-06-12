import {StyleSheet, View} from 'react-native';
import { MainCarousel } from '../components/MainCarousel';
import { Slider } from '../components/Slider';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    gap: 20,
    height: '100%'
  },
});

export const Home = () => {

  return (
    <View style={styles.container}>
        <MainCarousel />
        <Slider />
    </View>
  );
};
