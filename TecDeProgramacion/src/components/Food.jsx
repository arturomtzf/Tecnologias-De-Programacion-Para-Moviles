import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Food({ name, price, image }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        marginRight: 20,
        width: 222,
        height: 300,
        borderColor: "#55afb1",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    price: {
        fontSize: 22,
        color: "#55afb1",
        marginTop: 5,
        fontWeight: "bold",
        textAlign: "center",
    },
});
