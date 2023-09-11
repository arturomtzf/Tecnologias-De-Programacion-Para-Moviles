import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

function OptionsSearch({ text }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{text}</Text>
            <Feather name="x" size={20} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginHorizontal: 4,
        marginVertical: 20,
    },
});

export default OptionsSearch;
