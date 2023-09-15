import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { plusIcon } from "../../../assets";

export default function StoryComponent({ name, image, addStory }) {
    return (
        <View style={styles.container}>
            {addStory ? (
                <View>
                    <Image source={plusIcon} style={styles.imagen}></Image>
                    <Text style={styles.nombre}>Your Story</Text>
                </View>
            ) : (
                <View>
                    <Image source={{ uri: image }} style={styles.imagen}></Image>
                    <Text style={styles.nombre}>{name}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: "center",
    },
    imagen: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    nombre: {
        fontSize: 12,
        textAlign: "center",
    },
});
