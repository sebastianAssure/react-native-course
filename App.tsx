import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  }
})
export default App;
