import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function index() {
    return (
        <View style={styles.container}>
            <Entypo name="home" size={34} color="#3562d7" />
            <AntDesign name="message1" size={34} color="#dfe5f9" />
            <AntDesign name="calendar" size={34} color="#dfe5f9" />
            <AntDesign name="profile" size={34} color="#dfe5f9" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#E5E5E5",
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 5,
    },
});

export default index;
