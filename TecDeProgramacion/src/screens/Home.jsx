import { Button, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import Account from "./Account";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { Profile, Banner } from "../../assets";
import Options from "../components/Options";
import Collections from "../components/Collections";
import BannerComp from "../components/BannerComp";

const OPTIONS = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "New",
    },
    {
        id: 3,
        name: "Most Viewed",
    },
    {
        id: 4,
        name: "Musica",
    },
];

const COLL = [
    {
        id: 1,
        name: "Travel",
        image: "https://fastly.picsum.photos/id/257/200/300.jpg?hmac=j0NVivHS9qSXBGkBOUjchG0Ckt6pje1KSfHsnwtr_8M",
    },
    {
        id: 2,
        name: "Foood",
        image: "https://picsum.photos/300/400",
    },
    {
        id: 3,
        name: "Vintage",
        image: "https://picsum.photos/400/500",
    },
    {
        id: 4,
        name: "Wild Fire",
        image: "https://picsum.photos/500/600",
    },
];

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>SnapSync</Text>
                <Image source={Profile} style={styles.imagen} />
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.searchTxt}>Search</Text>
                <AntDesign name="search1" size={24} color="gray" />
            </View>
            <View style={{ marginLeft: 10 }}>
                <FlatList
                    data={OPTIONS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Options name={item.name} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <Text style={styles.collectionsTxt}>Collections</Text>
                <FlatList
                    data={COLL}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Collections name={item.name} imagen={item.image} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginLeft: 10 }}
                />
            </View>
            <Text style={styles.collectionsTxt}>Recommended</Text>
            <FlatList
                data={COLL}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <BannerComp imagen={item.image} />}
                vertical
                showsVerticalScrollIndicator={false}
                style={{ marginLeft: 10 }}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#1f1d2b",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    imagen: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: "#252836",
        padding: 10,
        margin: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    searchTxt: {
        color: "gray",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
    },
    collectionsTxt: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
    },
});
