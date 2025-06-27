import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeeMore } from './src/screens/SeeMore';
import { Colors } from './src/constants/colors';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
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
              headerTintColor: Colors.primary, // color del texto y los íconos (ej. botón "back")
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'Gilroy-SemiBold', // si usas una fuente personalizada
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
