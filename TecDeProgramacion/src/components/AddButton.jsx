import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function AddButton({ onPress, editMode }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {
                editMode ? (
                    <AntDesign name="edit" size={24} color="white" />
                ) : (
                    <AntDesign name="arrowup" size={24} color="white" />
                )
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    }
});
