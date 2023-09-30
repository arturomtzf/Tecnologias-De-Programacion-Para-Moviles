import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect, } from "react";

export default function Character({ character }) {
    const [voiceActor, setVoiceActor] = useState("Indefinido");
    const [image, setImage] = useState(
        "https://cdn.myanimelist.net/r/42x62/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
    );
    const [language, setLanguage] = useState("Indefinido");

    useEffect(() => {
        // console.log(character.voice_actors);
        if (character.voice_actors.length > 0) {
            setVoiceActor(character.voice_actors[0].person.name);
            setImage(character.voice_actors[0].person.images.jpg.image_url);
            setLanguage(character.voice_actors[0].language);
        }
    }, []);
    return (
        <View style={styles.container}>
            <Image source={{ uri: character.character.images.jpg.image_url }} style={styles.imageCharacter} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.txt1}>{character.character.name}</Text>
                    <Text style={styles.txt2}>{character.role}</Text>
                </View>
                <View>
                    <Text style={styles.txt1}>{voiceActor}</Text>
                    <Text style={styles.txt2}>{language}</Text>
                </View>
            </View>
            <Image source={{ uri: image }} style={styles.imageCharacter} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageCharacter: {
        width: 64,
        height: 100,
        resizeMode: "contain",
        borderRadius: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 5,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    txt1: {
        fontSize: 14,
        fontWeight: "bold",
        color: "blue",
    },
    txt2: {
        fontSize: 12,
        // fontWeight: "bold",
        color: "gray",
    },
});
