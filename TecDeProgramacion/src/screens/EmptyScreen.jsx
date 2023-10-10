import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import TopBar from "../components/TopBar";

export default function EmptyScreen() {
    return (
        <View style={styles.container}>
            <TopBar />
            <Text style={styles.title}>EmptyScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fbfcfe",
    },
    title: {
        fontSize: 28,
        marginVertical: 25,
        marginHorizontal: 20,
    },
});
