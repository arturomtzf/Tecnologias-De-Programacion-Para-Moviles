import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const StyledButton = ({ text, functionBoton }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={functionBoton}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3498db",
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
