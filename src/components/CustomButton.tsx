import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../interfaces/ButtonProps';

export const CustomButton = ({text, color, colorText}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${color}`,
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 8,
      }}>
      <Text style={{color: `${colorText}`, fontWeight: '600', fontSize: 18}}>{text}</Text>
    </TouchableOpacity>
  );
};
