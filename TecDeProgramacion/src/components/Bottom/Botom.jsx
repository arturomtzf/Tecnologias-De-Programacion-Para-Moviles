import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

export default function Botom() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.selected}>
                <Entypo name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        marginVertical: 10,
    },
    selected: {
        backgroundColor: "#000",
        width: 60,
        height: 60,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    option: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
});
