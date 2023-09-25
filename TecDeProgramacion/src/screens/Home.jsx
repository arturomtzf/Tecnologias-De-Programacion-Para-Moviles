import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Character from "../components/Character";
import { useCharacters } from "../hooks/useCharacters";

export default function Home({ navigation }) {
    const { characters, getApiData } = useCharacters();
    useEffect(() => {
        getApiData();
    }, []); // Unicamente se ejecuta cuando el valor de input cambia

    return (
        <View style={styles.container}>
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
                        id={item.id}
                        navigation={navigation}
                    />
                )}
            />
            {/* <Button title="Go to Login Page" onPress={() => navigation.navigate("Login", { name: "Armafu" })}></Button> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#272b33",
        // paddingTop: Constants.statusBarHeight,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
