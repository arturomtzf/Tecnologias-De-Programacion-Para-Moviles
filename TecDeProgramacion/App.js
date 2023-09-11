import { StyleSheet, View, Image, Dimensions, TextInput } from "react-native";
import Constants from "expo-constants";
import HomePage from "./src/screens/HomePage";

export default function App() {
    return (
        <View style={styles.container}>
            <HomePage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
    },
});
