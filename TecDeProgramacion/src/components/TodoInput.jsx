import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function TodoInput({ value, onChangeText}) {
    return <TextInput style={styles.container} value={value} onChangeText={onChangeText} />;
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 20,
        flex: 1,
        borderRadius: 5,
        height: 40,
    },
});
