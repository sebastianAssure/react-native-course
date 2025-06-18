import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home';
import { SearchScreen } from '../screens/Search';
import { WishListScreen } from '../screens/WishList';
import { ProfileScreen } from '../screens/Profile';
import { getTabIcon } from '../utils/getTabIcon';
import { Colors } from '../constants/colors';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.backgroundLight,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({ focused, color, size }) =>
          getTabIcon(route.name, focused, color, size),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.backgroundDark,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 12,
  },
});
