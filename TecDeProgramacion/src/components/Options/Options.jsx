import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Options() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.selected}>All</Text>
            </View>
                <Text style={styles.noSelected}>Group</Text>
                <Text style={styles.noSelected}>Chats</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderRadius: 20,
        paddingVertical: 5,
        alignItems: "center",
    },
    selected: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    noSelected: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
    },
    textContainer: {
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
});
