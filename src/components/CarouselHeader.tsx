import { Pressable, Text, View, StyleSheet } from 'react-native';
import { CarouselHeaderProps } from '../interfaces/CarouselHeaderProps';
import { Colors } from '../constants/colors';

export const CarouselHeader = ({ text, colorText, onPressed }: CarouselHeaderProps) => {


  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colorText }]}>{text}</Text>
      <Pressable onPress={onPressed}>
        <Text style={styles.seeMore}>See more</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Gilroy-SemiBold'
  },
  seeMore: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold'
  },
});
