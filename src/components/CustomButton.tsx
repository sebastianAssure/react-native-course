import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonProps } from '../interfaces/ButtonProps';

export const CustomButton = ({ text, color, colorText }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={[styles.text, { color: colorText }]}>{text}</Text>
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
    fontFamily: 'Gilroy-Semibold'
  },
});
