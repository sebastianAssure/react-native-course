import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home';
import SearchScreen from '../screens/Search';
import { getTabIcon } from '../utils/getTabIcon';
import { StyleSheet } from 'react-native';
import WishListScreen from '../screens/WishList';
import ProfileScreen from '../screens/Profile';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { ThemeColors } from '../../types/ThemeColors';

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  const { colors } = useThemedStyles();
  const styles = getStyles(colors);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
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

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabBarStyle: {
      backgroundColor: colors.background,
      borderTopWidth: 0,
    },
    tabBarLabelStyle: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 12,
    },
  });
