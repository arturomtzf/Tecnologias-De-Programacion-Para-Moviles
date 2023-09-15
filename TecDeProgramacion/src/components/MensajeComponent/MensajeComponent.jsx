import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function MensajeComponent({ name, message, time, image }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.imagen}></Image>
            <View style={styles.container2}>
                <Text style={styles.nombre}>{name}</Text>
                <Text style={styles.mensaje}>{message}</Text>
            </View>
            <Text style={styles.hora}>{time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
    },
    imagen: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    container2: {
        flexDirection: "column",
        marginHorizontal: 10,
        flex: 1,
    },
    nombre: {
        fontSize: 20,
        fontWeight: "bold",
    },
    mensaje: {
        fontSize: 15,
    },
    hora: {
        fontSize: 15,
    },
});
