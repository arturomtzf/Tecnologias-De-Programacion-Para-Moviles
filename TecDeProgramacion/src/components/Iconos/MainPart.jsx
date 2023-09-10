import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

function MainPart() {
    return (
        <View style={{ alignItems: "center", marginTop: 25, marginBottom: 25 }}>
            <Text style={styles.mainText}>$23,867</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.secondaryText}>Wallet id: 2678900085</Text>
                <FontAwesome name="copy" size={14} color="white" />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={styles.iconContainer}>
                    <Feather name="arrow-down-left" size={24} color="black" />
                </View>
                <View style={[styles.iconContainer, { transform: [{ rotate: "180deg" }] }]}>
                    <Feather name="arrow-down-left" size={24} color="black" />
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="reload" size={24} color="black" />
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="plus" size={24} color="black" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 65,
        fontWeight: "bold",
        color: "#fffece",
    },
    secondaryText: {
        fontSize: 14,
        color: "white",
        marginRight: 5,
    },
    iconContainer: {
        backgroundColor: "#efc46b",
        borderRadius: 50,
        padding: 25,
        margin: 10,
    },
});

export default MainPart;
