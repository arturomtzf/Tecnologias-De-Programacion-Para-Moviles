import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const CustomTextInput = ({ label, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: 15,
    },
    label: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "white",
        paddingHorizontal: 5,
        fontSize: 12,
        color: "gray",
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        padding: 10,
        paddingLeft: 30,
        fontSize: 16,
    },
});

export default CustomTextInput;
