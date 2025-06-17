import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from './src/screens/Search';
import {WishListScreen} from './src/screens/WishList';
import {getTabIcon} from './src/utils/getTabIcon';
import Icon from 'react-native-vector-icons/Foundation';
import {Colors} from './src/constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.secondary,
            tabBarStyle: {
              backgroundColor: Colors.backgroundDark,
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontFamily: 'Gilroy-Medium',
              fontSize: 12
            },
            tabBarIcon: ({focused, color, size}) => {
              const icon = getTabIcon(route.name, focused, color, size);
              return icon;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="WishList" component={WishListScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
export default App;
