import Constants from "expo-constants";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import Character from "./src/components/Character";

export default function App() {
    const [characters, setCharacters] = useState([]);
    const getApiData = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []); // Unicamente se ejecuta cuando el valor de input cambia

    return (
        <View style={styles.container}>
            <Text style={styles.title}>The Rick and Morty API</Text>
            <FlatList
                data={characters}
                ItemSeparatorComponent={() => <View></View>}
                renderItem={({ item }) => (
                    <Character
                        image={item.image}
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        location={item.location.name}
                        origin={item.origin.name}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#272b33",
        paddingTop: Constants.statusBarHeight,
        // alignItems: "center",
        // justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
});
