import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Entypo } from "@expo/vector-icons";

export default function CharacterInfo({ route, navigation }) {
    const { id } = route.params;
    const { getCharacter } = useCharacters();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        getCharacter(id).then((data) => setCharacter(data));
        // console.log(character);
    }, []);

    var origin = "";
    var location = "";
    try {
        console.log(character);
        origin = character.origin.name;
        location = character.location.name;
    } catch (error) {
        console.log(error);
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.imagen} />
            <View style={styles.nameContainer}>
                <Entypo name="dot-single" size={66} color={character.status === "Alive" ? "green" : "red"} />
                <Text style={styles.name}>{character.name}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.prop}>Type: </Text>
                <Text style={styles.value}>{character.species}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.prop}>Gender: </Text>
                <Text style={styles.value}>{character.gender}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.prop}>Origin: </Text>
                <Text style={styles.value}>{origin}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.prop}>Location: </Text>
                <Text style={styles.value}>{location}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.prop}>Created At: </Text>
                <Text style={styles.value}>{character.created}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    imagen: {
        width: "50%",
        height: "25%",
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#3c3e44",
    },
    prop: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#3c3e44",
    },
    value: {
        fontSize: 20,
        color: "#3c3e44",
    },
});
