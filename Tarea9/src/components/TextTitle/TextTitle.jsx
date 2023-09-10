import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TextTitle({ text }) {
    return <Text style={styles.estilos}>{text}</Text>;
}

const styles = StyleSheet.create({
    estilos: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
    },
});

export default TextTitle;
