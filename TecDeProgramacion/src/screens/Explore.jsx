import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { Agua } from "../../assets";

export default function Explore() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="left" size={24} color="white" />
                <Text style={styles.title}>Explore</Text>
                <View></View>
            </View>
            <View style={styles.algo}>
                <Image style={styles.imagen} source={Agua} />
                <View style={styles.info}>
                    <View style={styles.txtInfo}>
                        <Text style={styles.published}>Published on Octuber 10,2015</Text>
                        <Text style={styles.where}>Lelystad, Nederland</Text>
                    </View>
                    <AntDesign name="hearto" size={24} color="orange" style={{ marginRight: 10 }} />
                    <AntDesign name="sharealt" size={24} color="orange" />
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
    algo: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    imagen: {
        width: 350,
        height: 500,
        borderRadius: 10,
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#23212e",
        width: 350,
        padding: 10,
    },
    txtInfo: {
        flexDirection: "column",
        justifyContent: "center",
        marginRight: 40,
    },
    published: {
        color: "#fff",
        fontSize: 15,
    },
    where: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
