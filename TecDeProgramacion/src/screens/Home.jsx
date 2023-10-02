import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Story from "../components/Story";

const STORIES = [
    {
        id: 1,
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
    },
    {
        id: 2,
        name: "Amber",
        image: "https://i.waifu.pics/_zlfBgp.jpg",
    },
    {
        id: 3,
        name: "Diluc",
        image: "https://i.waifu.pics/4Ni15Gm.jpg",
    },
    {
        id: 4,
        name: "Jean",
        image: "https://i.waifu.pics/4Ni15Gm.jpg",
    },
    {
        id: 5,
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
    },
    {
        id: 6,
        name: "Amber",
        image: "https://i.waifu.pics/_zlfBgp.jpg",
    },
    {
        id: 7,
        name: "Diluc",
        image: "https://i.waifu.pics/4Ni15Gm.jpg",
    },
    {
        id: 8,
        name: "Jean",
        image: "https://i.waifu.pics/4Ni15Gm.jpg",
    },
];

const POSTS = [
    {
        id: 1,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
        likes: 100,
        caption: "This is a caption",
    },
    {
        id: 2,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
        likes: 100,
        caption: "This is a caption",
    },
    {
        id: 3,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
        likes: 100,
        caption: "This is a caption",
    },
    {
        id: 4,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Eula",
        image: "https://i.waifu.pics/jIClgKA.jpg",
        likes: 100,
        caption: "This is a caption",
    },
];

const Home = () => {
    return (
        <View style={{ backgroundColor: "#000", flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, color: "#fff" }}>Instagram</Text>
                <View style={styles.icons}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <AntDesign name="message1" size={24} color="white" />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Story name="Your Story" image="https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_1280.png" />
                <FlatList
                    data={STORIES}
                    keyExtractor={({ id }) => id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Story name={item.name} image={item.image} />}
                />
            </View>
            <View>
                <FlatList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10,
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 60,
    },
});

export default Home;
