import React from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

function StyledSwitch({ text }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Switch />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    text: {
        fontSize: 18,
        color: "#878787",
    },
});

export default StyledSwitch;
