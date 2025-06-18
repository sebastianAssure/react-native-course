import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/navigation/BottomTabs';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabsNavigator />
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
