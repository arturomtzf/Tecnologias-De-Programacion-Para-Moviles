import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Number = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={() => onPress(text)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Number;

const styles = StyleSheet.create({
    container: {
        // padding: 30,
        width: 60,
        height: 60,
        backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    numberContainer: {
        backgroundColor: "blue",
    },
    operatorContainer: {
        backgroundColor: "gray",
    },
    text: {
        fontSize: 25,
        color: "black",
    },
});
