import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Options({ name }) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: name === "Burgers" ? "#55afb1" : "#fff",
            height: 30,
            width: 90,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
            borderWidth: name === "Burgers" ? 0 : 1,
        },
        text: {
            color: name === "Burgers" ? "#fff" : "#000",
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}
