import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

function TextInputStyled({ text, placeholder, type, password }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextInput placeholder={placeholder} keyboardType={type} secureTextEntry={password ? true : false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#bbbbbb",
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: "#878787",
    },
});

export default TextInputStyled;
