import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TextTitle from "../components/TextTitle/TextTitle";
import SecondaryText from "../components/SecondaryText/SecondaryText";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton/SecondaryButton";
import { balloon } from "../../assets";

function LoginScreen() {
    return (
        <View style={styles.container}>
            <TextTitle text="Welcome!" />
            <SecondaryText text="Sign in or create a new account" />
            <Image source={balloon} style={styles.image} />
            <PrimaryButton text="Go to Sign In" />
            <SecondaryButton text="No account yet? " text2="Sign up"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        marginVertical: 30,
    },
});

export default LoginScreen;
