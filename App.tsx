import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeeMore } from './src/screens/SeeMore';
import { Colors } from './src/constants/colors';
import { ThemeProvider } from './src/context/theme/ThemeProvider';
import { WishlistProvider } from './src/context/WishlistContext';
import MovieDetail from './src/screens/MovieDetail';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <WishlistProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={BottomTabsNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SeeMore"
                component={SeeMore}
                options={{
                  headerShown: true,
                  headerStyle: { backgroundColor: Colors.backgroundDark },
                  headerTintColor: Colors.primary,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: 'Gilroy-SemiBold',
                  },
                }}
              />
              <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{
                  headerShown: true,
                  headerStyle: { backgroundColor: Colors.backgroundDark },
                  headerTintColor: Colors.primary,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: 'Gilroy-SemiBold',
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </WishlistProvider>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
