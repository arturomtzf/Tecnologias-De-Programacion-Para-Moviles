import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Login Page" onPress={() => navigation.navigate("Login", { name: "Armafu" })}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});
