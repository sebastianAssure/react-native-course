import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Slider } from './src/screens/Slider';

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  }
})
export default App;
