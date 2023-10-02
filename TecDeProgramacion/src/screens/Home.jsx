import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Story from "../components/Story";
import Post from "../components/Post";

const STORIES = [
    {
        id: 1,
        name: "Ganyu",
        image: "https://i.waifu.pics/dPXxQqE.png",
    },
    {
        id: 2,
        name: "Amber",
        image: "https://i.waifu.pics/-ABlAvr.jpg",
    },
    {
        id: 3,
        name: "Diluc",
        image: "https://i.waifu.pics/8TL6ycS.jpg",
    },
    {
        id: 4,
        name: "Jean",
        image: "https://i.waifu.pics/-eOx7uI.jpg",
    },
    {
        id: 5,
        name: "Kazuha",
        image: "https://i.waifu.pics/q7xF_wS.png",
    },
    {
        id: 6,
        name: "Zhongli",
        image: "https://i.waifu.pics/fuGfYQJ.jpg",
    },
    {
        id: 7,
        name: "Ayaka",
        image: "https://i.waifu.pics/vzh9Dhm.jpg",
    },
    {
        id: 8,
        name: "Mona",
        image: "https://i.waifu.pics/4Ni15Gm.jpg",
    },
];

const POSTS = [
    {
        id: 1,
        profilePic: "https://i.waifu.pics/3x~ovC6.jpg",
        name: "Ganyu",
        image: "https://i.waifu.pics/mbQ4c4V.jpg",
        likes: 100,
        caption: "Dale like si te gustan las clases de Eder",
    },
    {
        id: 2,
        profilePic: "https://i.waifu.pics/8hqFjfL.png",
        name: "Keqing",
        image: "https://i.waifu.pics/6NYYSw6.png",
        likes: 100,
        caption: "Denme primo gemas",
    },
    {
        id: 3,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Amber",
        image: "https://i.waifu.pics/mUTwf4z.jpg",
        likes: 100,
        caption: "With my friends",
    },
    {
        id: 4,
        profilePic: "https://i.waifu.pics/jIClgKA.jpg",
        name: "Eula",
        image: "https://i.waifu.pics/sLd~4NU.jpg",
        likes: 100,
        caption: "Genshin Impact",
    },
];

const Home = () => {
    return (
        <View style={{ backgroundColor: "#000", flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, color: "#fff" }}>Instagram</Text>
                <View style={styles.icons}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <FontAwesome5 name="facebook-messenger" size={24} color="white" />
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
                <FlatList
                    data={POSTS}
                    keyExtractor={({ id }) => id.toString()}
                    vertical
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Post
                            profilePic={item.profilePic}
                            name={item.name}
                            image={item.image}
                            likes={item.likes}
                            caption={item.caption}
                        />
                    )}
                    ListFooterComponent={() => <View style={{ marginBottom: 120 }} />} // Para que no se corte el último post
                />
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
