import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Product({ hastag, name, price, image }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.imagen} />
            <Text style={styles.hastag}>{hastag}</Text>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.priceContainer}>
                <FontAwesome5 name="bitcoin" size={24} color="#f4c242" />
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 200,
    },
    imagen: {
        width: 160,
        height: 160,
        borderRadius: 10,
    },
    hastag: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gray",
        marginTop: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 5,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 5,
    },
});
