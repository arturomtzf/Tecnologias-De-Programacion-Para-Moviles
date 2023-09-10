import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Card = ({ isDarkBlue, text, iconName, iconType }) => {
    const customIconColor = isDarkBlue ? "#537adc" : "white";

    const CustomIcon =
        iconType === "Ionicons" ? (
            <Ionicons color={customIconColor} name={iconName} size={24} />
        ) : (
            <AntDesign color={customIconColor} name={iconName} size={24} />
        );

    return (
        <View style={[styles.cardContainer, isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight]}>
            <View style={[styles.cardIconContainer, isDarkBlue ? styles.cardIconContainerDark : styles.cardIconContainerLight]}>
                {/* <AntDesign name="hdd" size={24} color="white" /> */}
                {CustomIcon}
            </View>
            <Text style={[styles.cardText, isDarkBlue ? styles.cardTextDark : styles.cardTextLight]}>{text}</Text>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        height: 160,
        width: 160,
        borderRadius: 40,
        paddingHorizontal: 20,
        justifyContent: "center",
        gap: 50,
        marginRight: 20,
    },
    cardContainerLight: {
        backgroundColor: "#c6ceff",
    },
    cardContainerDark: {
        backgroundColor: "#2263df",
    },
    cardIconContainer: {
        width: 35,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    cardIconContainerDark: {
        backgroundColor: "#e6ecff",
    },
    cardIconContainerLight: {
        backgroundColor: "#2362df",
    },
    cardText: {
        fontSize: 22,
    },
    cardTextLight: {
        color: "#48525e",
    },
    cardTextDark: {
        color: "white",
    },
});
