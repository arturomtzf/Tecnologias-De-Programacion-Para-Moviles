import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function AddButton({ onPress, editMode, onPressEdit }) {
    return (
        <View>
            {editMode ? (
                <TouchableOpacity onPress={onPressEdit} style={styles.container}>
                    <AntDesign name="edit" size={24} color="white" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <AntDesign name="arrowup" size={24} color="white" />
                </TouchableOpacity>
            )}
        </View>
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
    },
});
