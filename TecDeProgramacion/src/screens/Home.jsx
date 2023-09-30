import React, { useEffect } from "react";
import { Button, Text, View, StyleSheet, FlatList, Pressable, Alert, Switch, ActivityIndicator } from "react-native";
import Header from "../components/CustomHeader/Header";
import { useState } from "react";
import { StyledText } from "../components/StyledText";
import Character from "../components/Character";

const Home = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [characters, setCharacters] = useState([]);

    const toggleSwitch = () => {
        if (!isEnabled) fetchData();
        setIsEnabled((previousState) => !previousState);
    };

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const fetchData = async () => {
        try {
            setIsFetching(true);
            const response = await fetch("https://api.jikan.moe/v4/anime/1735/characters");
            const json = await response.json();
            await delay(5000);
            setCharacters(json.data);
            setIsFetching(false);
            // console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <View>
            <View style={styles.botonSwitch}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{
                        alignSelf: "center",
                        margin: 10,
                        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                    }}
                />
                <Text>View Characters</Text>
            </View>
            {isEnabled && (
                <FlatList
                    data={characters}
                    keyExtractor={(item) => item.character.mal_id}
                    renderItem={({ item }) => <Character character={item} />}
                    initialNumToRender={10}
                />
            )}
            {isFetching ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    botonSwitch: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default Home;
