import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { profile } from "../../../assets";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style= {styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.image} source={profile}></Image>
                <Text>Hey Alireza 👋</Text>
            </View>
            <View style={styles.options}>
                <Feather name="search" size={24} color="black" />
                <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    options: {
        flexDirection: "row",
        alignItems: "center",
    }
});
