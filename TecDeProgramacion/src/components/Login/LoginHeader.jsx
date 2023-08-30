import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import TextComponent from "../TextComponent/TextComponent";

function LoginHeader() {
    return (
        <View style={styles.header}>
            <TextComponent text="Sign in to your Account" fontSize={44} fontWeight="bold" color="white"></TextComponent>
            <TextComponent text="Sign in to your Account" fontSize={15} fontWeight="normal" color="white"></TextComponent>
        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00004d",
        height: height * 0.3,
        width: width,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingBottom: 20,
    },
});

export default LoginHeader;
