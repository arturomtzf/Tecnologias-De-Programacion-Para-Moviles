import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";

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
            <Text style={{ fontSize: 30 }}>Caracteres</Text>
            <FlatList
                data={characters}
                ItemSeparatorComponent={() => <View ></View>}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.gender}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
