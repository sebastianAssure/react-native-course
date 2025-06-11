import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    marginHorizontal: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: 'white',
    gap: 8
  },
  topNav: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    paddingVertical: 10
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textCenter: {
    color: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const Slider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Text>My List</Text>
        <Text>Discover</Text>
      </View>
      <View style={styles.centerBox}>
        <Text style={styles.textCenter}>1</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
