import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Login from "./src/screens/Login";
import { useState } from "react";

export default function App() {
    const [inputValue, setInputValue] = useState("Value");

    return (
        <View style={styles.container}>
            <TextInput
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
                style={{ borderWidth: 1, paddingHorizontal: 10, fontSize: 20 }}
            />
            <Text style={{ fontSize: 50 }}>{inputValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
