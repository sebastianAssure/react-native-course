import { Pressable, Text, View, StyleSheet } from 'react-native';
import { CarouselHeaderProps } from '../interfaces/types/CarouselHeaderProps';
import { Colors } from '../constants/colors';
import { ThemeColors } from '../../types/ThemeColors';
import { useThemedStyles } from '../hooks/useThemedStyles';

export const CarouselHeader = ({ text, colorText, onPressed }: CarouselHeaderProps) => {
  const { colors } = useThemedStyles();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{text}</Text>
      <Pressable onPress={onPressed}>
        <Text style={styles.seeMore}>See more</Text>
      </Pressable>
    </View>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Gilroy-SemiBold'
    },
    seeMore: {
      color: colors.primary,
      fontSize: 16,
      fontFamily: 'Gilroy-SemiBold'
    },
  });
