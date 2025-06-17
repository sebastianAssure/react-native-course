import {JSX} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const getTabIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
): JSX.Element => {
  switch (routeName) {
    case 'Home':
      return focused ? <Foundation name="home" size={size} color={color} /> : <Octicons name="home" size={size} color={color} />;
    case 'Search':
      return <Octicons name="search" size={size} color={color} />;
    case 'WishList':
      return (
        <Ionicons
          name={focused ? 'bookmark' : 'bookmark-outline'}
          size={size}
          color={color}
        />
      );
    case 'Profile':
      return (
        <Ionicons
          name={focused ? 'person' : 'person-outline'}
          size={size}
          color={color}
        />
      );
    default:
      return <Foundation name="record" size={size} color={color} />;
  }
};
