import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Story({ name, image }) {
    return (
        <View>
            <View style={styles.bubble}>
                <Image source={{ uri: image }} style={styles.imagen} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bubble: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#ff8501",
        marginHorizontal: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    imagen: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    name: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        marginTop: 3,
    },
});
