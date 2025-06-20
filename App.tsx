import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeeMore } from './src/screens/SeeMore';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({}) => ({
            headerShown: true,
          })}>
          <Stack.Screen name="Main" component={BottomTabsNavigator} />
          <Stack.Screen name="SeeMore" component={SeeMore} />
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
