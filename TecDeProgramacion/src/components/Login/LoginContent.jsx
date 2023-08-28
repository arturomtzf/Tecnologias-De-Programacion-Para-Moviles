import React from "react";
import { Text, View } from "react-native";
import LoginInput from "../StyledInput/LoginInput";

function LoginContent() {
    return (
        <View style={styles.container}>
            <LoginInput label="Email"></LoginInput>
        </View>
    );
}

const styles = {
    container: {
        padding: 20,
    },
};

export default LoginContent;
