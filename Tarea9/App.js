import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import LoginScreen from "./src/screens/LoginScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

export default function App() {
    return (
        <View style={styles.container}>
            <LoginScreen />
            {/* <Login/> */}
            {/* <Register /> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
