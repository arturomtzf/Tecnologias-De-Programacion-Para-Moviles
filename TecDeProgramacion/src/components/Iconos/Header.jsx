import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Header() {
    return (
        <View style={styles.mainView}>
            <Text style={styles.texto}>Wallet</Text>
            <View style={styles.secondaryView}>
                <View style={styles.iconContainer}>
                    <AntDesign name="bells" size={19} color="black" style={styles.icon} />
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    secondaryView: {
        flexDirection: "row",
        alignItems: "center",
    },
    texto: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        margin: 15,
    },
    icon: {
        color: "black",
    },
    iconContainer: {
        backgroundColor: "#ffecd3",
        borderRadius: 50,
        padding: 15,
        marginRight: 10,
    },
});

export default Header;
