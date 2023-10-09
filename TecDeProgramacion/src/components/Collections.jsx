import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Profile } from "../../assets";

export default function Collections({ name, imagen }) {
    return (
        <View style={styles.container}>
            <Image source={Profile} style={styles.imagen} />
            <View style={styles.txtContainer}>
                <Text style={styles.imagenTxt}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#272735",
        height: 190,
        width: 150,
        borderRadius: 5,
        marginRight: 20,
    },
    imagen: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    txtContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    imagenTxt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
