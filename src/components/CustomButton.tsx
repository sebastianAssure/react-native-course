import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonProps } from '../interfaces/types/ButtonProps';

export const CustomButton = ({ text, color, textColor, onPressed }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]} onPress={onPressed}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 8,
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Gilroy-SemiBold'
  },
});
