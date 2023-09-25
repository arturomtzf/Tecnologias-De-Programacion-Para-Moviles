import Constants from "expo-constants";
import { StyleSheet, View, Dimensions } from "react-native";
import Login from "./src/screens/Login";

export default function App() {
    return (
        <View style={styles.container}>
            <Login />
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
