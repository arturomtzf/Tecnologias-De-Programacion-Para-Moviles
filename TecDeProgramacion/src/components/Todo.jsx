import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

export default function Todo({ name }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{name}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <CustomButton text="Delete" light={true}/>
                <CustomButton text="Edit" light={true}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "#2d705f",
    },
});
