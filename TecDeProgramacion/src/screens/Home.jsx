import { Button, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Account from "./Account";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import Options from "../components/Options";
import Food from "../components/Food";
import TopBar from "../components/TopBar";

const OPTIONS = [
    {
        id: 1,
        name: "Burgers",
    },
    {
        id: 2,
        name: "Pizza",
    },
    {
        id: 3,
        name: "Tacos",
    },
    {
        id: 4,
        name: "Sushi",
    },
];

const FOOD = [
    {
        id: 1,
        name: "Burgers",
        price: 24.99,
        image: "https://media.istockphoto.com/id/1182502390/vector/flat-hamburger-icon-color-vector-illustration.jpg?s=612x612&w=0&k=20&c=vSMwq8AOa6iDfuDJs5IR1NATQasq-LAVsFjvIC2AgEo=",
    },
    {
        id: 2,
        name: "Pizza",
        price: 15.99,
        image: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-yellow-pizza-illustration-png-image_4634672.jpg",
    },
    {
        id: 3,
        name: "Sushi",
        price: 19.99,
        image: "https://png.pngtree.com/element_pic/00/16/07/18578bc4ca34166.jpg",
    },
];

const Home = () => {
    const navigation = useNavigation();
    const { handleLogOut: onLogOut } = useAuthContext();

    const handleLogOut = () => {
        try {
            onLogOut();
            navigation.navigate("Welcome");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TopBar />
            <Text style={styles.title}>Store for fast food & etc.</Text>
            <View style={styles.searchContainer}>
                <View style={{ flexDirection: "row" }}>
                    <Feather name="search" size={24} color="#55afb1" />
                    <Text style={{ marginLeft: 10 }}>burgers</Text>
                </View>
                <Feather name="filter" size={24} color="black" />
            </View>
            <View>
                <FlatList
                    data={OPTIONS}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginVertical: 20, marginLeft: 20 }}
                    renderItem={({ item }) => <Options name={item.name} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View>
                <FlatList
                    data={FOOD}
                    horizontal
                    style={{ marginLeft: 20 }}
                    renderItem={({ item }) => <Food name={item.name} price={item.price} image={item.image} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            {/* <Button
        title="Ir a mi cuenta"
        onPress={() => navigation.navigate("Account")}
      />
      <Button title="Cerrar sesion" onPress={() => handleLogOut()} /> */}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fbfcfe",
    },
    title: {
        fontSize: 28,
        marginVertical: 25,
        marginHorizontal: 20,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        backgroundColor: "#f2f6f6",
        borderRadius: 10,
        padding: 10,
    },
});
