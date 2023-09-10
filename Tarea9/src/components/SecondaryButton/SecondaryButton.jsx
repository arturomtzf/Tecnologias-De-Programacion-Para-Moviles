import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function SecondaryButton({ text, text2 }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#bbbbbb",
        borderWidth: 1,
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        color: "#878787",
    },
    text2: {
        fontSize: 18,
        color: "#ff8a39",
    },
});

export default SecondaryButton;
