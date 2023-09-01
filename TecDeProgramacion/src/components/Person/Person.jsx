import React from "react";
import { Text, TouchableOpacity, Image, Linking } from "react-native";

export const Person = ({ name, lastName, index, imagen }) => {
    return (
        <TouchableOpacity
            style={[styles.touchable, { borderColor: index % 2 === 0 ? "red" : "blue" }]}
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
        >
            <Image
                source={{
                    uri: imagen,
                }}
                style={styles.imagen}
            />
            <Text style={styles.texto}>{name}</Text>
            <Text style={styles.texto}>{lastName}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    imagen: {
        width: 85,
        height: 85,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "gray",
    },
    touchable: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    texto: {
        fontSize: 40,
        marginLeft: 10,
    },
};
