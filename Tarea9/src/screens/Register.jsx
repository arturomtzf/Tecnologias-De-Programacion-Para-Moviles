import React from "react";
import { View, StyleSheet } from "react-native";
import TextTitle from "../components/TextTitle/TextTitle";
import BackButton from "../components/BackButton/BackButton";
import Separator from "../components/Separator/Separator";
import TextInputStyled from "../components/TextInputStyled/TextInputStyled";
import StyledSwitch from "../components/StyledSwitch/StyledSwitch";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

function Register() {
    return (
        <View style={styles.container}>
            <BackButton />
            <TextTitle text="Create new account" />
            <Separator />
            <TextInputStyled text="Full name" placeholder="Enter your name" type="default" />
            <TextInputStyled text="Email address" placeholder="name@example.com" type="email-address" />
            <TextInputStyled text="Create password" placeholder="Enter your password" type="default" password={true} />
            <View style={{ marginTop: 44, alignItems: "center" }}>
                <PrimaryButton text="Sign Up!" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },
});

export default Register;
