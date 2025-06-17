import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
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
