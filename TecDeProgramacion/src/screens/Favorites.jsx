import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import Collections from "../components/Collections";

const EXPLORE = [
    {
        id: 1,
        name: "Travel",
        imagen: "",
    },
    {
        id: 2,
        name: "Travel",
        imagen: "",
    },
    {
        id: 3,
        name: "Vintage",
        imagen: "",
    },
    {
        id: 4,
        name: "Foods",
        imagen: "",
    },
    {
        id: 5,
        name: "Portrait",
        imagen: "",
    },
    {
        id: 6,
        name: "Sports",
        imagen: "",
    },
];

export default function Favorites() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="left" size={24} color="white" />
                <Text style={styles.title}>Explore</Text>
                <View></View>
            </View>
            <View>
                <View style={styles.colections}>
                    <Collections name={EXPLORE[0].name} />
                    <Collections name={EXPLORE[1].name} />
                </View>
                <View style={styles.colections}>
                    <Collections name={EXPLORE[2].name} />
                    <Collections name={EXPLORE[3].name} />
                </View>
                <View style={styles.colections}>
                    <Collections name={EXPLORE[4].name} />
                    <Collections name={EXPLORE[5].name} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#1f1d2b",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    colections: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
});
