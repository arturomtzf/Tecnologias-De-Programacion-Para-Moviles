import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Options({ name }) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#272735",
            height: 30,
            width: 90,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
        },
        text: {
            color: "gray",
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}
