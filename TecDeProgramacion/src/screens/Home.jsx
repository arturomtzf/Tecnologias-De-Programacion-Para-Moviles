import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Story from "../components/Story";
import Post from "../components/Post";
import { STORIES, POSTS } from "../data/HomeData";

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
