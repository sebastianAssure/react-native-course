import { JSX } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const getTabIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
): JSX.Element => {
  const routeObject: Record<string, JSX.Element> = {
    Home: focused
      ? <Foundation name="home" size={size} color={color} />
      : <Octicons name="home" size={size} color={color} />,
    Search: <Octicons name="search" size={size} color={color} />,
    WishList: <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={size} color={color} />,
    Profile: <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />,
  };

  return routeObject[routeName] ?? <Foundation name="record" size={size} color={color} />;
};
