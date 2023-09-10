import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SecondaryText({ text }) {
    return <Text style={styles.estilos}>{text}</Text>;
}

const styles = StyleSheet.create({
    estilos: {
        fontSize: 18,
        color: "#bbbbbb",
    },
});

export default SecondaryText;
