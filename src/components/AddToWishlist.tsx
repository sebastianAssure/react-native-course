import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IMovie } from '../interfaces/Movie';
import { useWishlist } from '../context/WishlistContext';

interface WishlistProps {
  item: IMovie;
  style?: ViewStyle;
}

const AddToWishlist = ({item, style}: WishlistProps) => {
  const {isInWishlist, toggleWishlistItem} = useWishlist();
  const selected = isInWishlist(item.id);

  const handlePress = () => {
    toggleWishlistItem(item);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <FontAwesome5 name="heart" solid={selected} color="#E3D947" size={24} />
    </TouchableOpacity>
  );
};

export default AddToWishlist;
