import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ text, onPress, light }) {
    return (
        <TouchableOpacity style={[styles.container, light ? styles.whiteButton : {}]} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 40,
    },
    whiteButton: {
        color: "white",
        borderColor: "white",
    },
});
