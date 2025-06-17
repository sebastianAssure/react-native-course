import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../constants/colors"

export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundDark
    },
  text: {
    color: Colors.primary,
  },
});