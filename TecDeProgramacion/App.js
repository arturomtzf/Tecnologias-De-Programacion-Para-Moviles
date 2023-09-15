import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Dimensions, TextInput } from "react-native";
import Messenger from "./src/screens/Messenger";
import Constants from "expo-constants";

export default function App() {
    const { height } = Dimensions.get("screen");

    return (
        <View style={styles.container}>
            <Messenger />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
