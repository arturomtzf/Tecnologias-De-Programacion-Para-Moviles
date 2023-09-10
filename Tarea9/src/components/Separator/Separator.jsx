import React from "react";
import { View, StyleSheet } from "react-native";

function Separator() {
    return (
        <View style={styles.container}>
            <View style={styles.separator1} />
            <View style={styles.separator2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 50,
    },
    separator1: {
        width: 50,
        height: 4,
        backgroundColor: "#ff8a39",
    },
    separator2: {
        width: 50,
        height: 4,
        backgroundColor: "#bbbbbb",
    },
});

export default Separator;
