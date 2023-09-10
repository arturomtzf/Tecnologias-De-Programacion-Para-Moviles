import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function PrimaryButton({ text }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff8a39",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
        marginVertical: 5,
    },
    text: {
        fontSize: 18,
        color: "#fff",
    },
});

export default PrimaryButton;
