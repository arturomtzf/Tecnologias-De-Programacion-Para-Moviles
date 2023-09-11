import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import FilterComponent from "../components/FilterComponent/FilterComponent";
import OptionsSearch from "../components/OptionsSearch/OptionsSearch";
import Product from "../components/Product/Product";
import Botom from "../components/Bottom/Botom";

const OPTIONS = [
    {
        id: 1,
        text: "Miniso",
    },
    {
        id: 2,
        text: "Neurso",
    },
    {
        id: 3,
        text: "Mumuso",
    },
    {
        id: 4,
        text: "Yoyoso",
    },
    {
        id: 5,
        text: "Daiso",
    },
];
const PRODUCTS = [
    {
        id: 1,
        hastag: "#Portable FM",
        name: "Divoom Radio",
        price: "$52.00",
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        hastag: "#Smallest FM",
        name: "Manual FM",
        price: "$48.32",
        image: "https://picsum.photos/300/400",
    },
    {
        id: 3,
        hastag: "#Compact FM",
        name: "Radioshack",
        price: "$32.77",
        image: "https://picsum.photos/400/500",
    },
];
function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title1}>Discover</Text>
                    <Text style={styles.title2}>your products</Text>
                </View>
                <ProfilePicture />
            </View>
            <FilterComponent />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {OPTIONS.map((option) => (
                    <OptionsSearch key={option.id} text={option.text} />
                ))}
            </ScrollView>
            <Text style={styles.title}>Popular Product</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {PRODUCTS.map((product) => (
                    <Product
                        key={product.id}
                        hastag={product.hastag}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </ScrollView>
            <Botom style={styles.botom} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    title1: {
        fontSize: 30,
        fontWeight: "900",
    },
    title2: {
        fontSize: 30,
        fontWeight: "200",
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    botom: {
        position: "absolute",
        bottom: 0,
    },
});

export default HomePage;
