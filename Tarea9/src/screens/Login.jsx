import React from "react";
import { View, StyleSheet } from "react-native";
import TextTitle from "../components/TextTitle/TextTitle";
import BackButton from "../components/BackButton/BackButton";
import Separator from "../components/Separator/Separator";
import TextInputStyled from "../components/TextInputStyled/TextInputStyled";
import StyledSwitch from "../components/StyledSwitch/StyledSwitch";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

function Login() {
    return (
        <View style={styles.container}>
            <BackButton />
            <TextTitle text="Welcome back!" />
            <Separator />
            <TextInputStyled text="Email" placeholder="name@example.com" type="email-address" />
            <TextInputStyled text="Password" placeholder="Enter your password" type="default" password={true} />
            <StyledSwitch text="Remember me" />
            <View style={{ marginTop: 44, alignItems: "center" }}>
                <PrimaryButton text="Sign In!" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },
});

export default Login;
