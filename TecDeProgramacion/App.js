import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Dimensions, TextInput, Text } from "react-native";
import Constants from "expo-constants";
import Examen from "./src/screens/Examen";
import Login from "./src/screens/Login";
import Iconos from "./src/screens/Iconos";
import { AntDesign } from "@expo/vector-icons";

import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
    const { height } = Dimensions.get("screen");

    return (
        <View style={styles.container}>
            {/* <Login /> */}
            {/* <Examen /> */}

            {/* <Text>Armafu</Text>
            <AntDesign name="doubleright" size={60} color="#a0f0f0" /> */}

            {/* <Iconos /> */}

            <StatusBar style="auto" />
            <WelcomeScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: "#000",
        // color: "#fff",
    },
});
