import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContexts";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { handleLogin: onLogin } = useAuthContext();

    const handleLogin = async () => {
      try {
        const loginValue = await onLogin(username, password);
        if (loginValue) {
          navigation.navigate("StartNav", { screen: "Home" });
          setPassword("");
          setUsername("");
        } else {
          Alert.alert("Error", "Credenciales invalidas", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://media.newyorker.com/photos/5d5c40f07ec6dc000826edfa/master/w_1920,c_limit/Rosner-Popeyes-Primary.jpg",
                }}
                style={styles.imagen}
            />
            <Text style={styles.title}>Welcome!</Text>
            <View style={{ margin: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Email</Text>
                <TextInput
                    value={username}
                    onChangeText={(e) => setUsername(e)}
                    placeholder="Enter your email"
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 20,
                    }}
                />
                <Text style={{ fontWeight: "bold" }}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    placeholder="Enter your password"
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 5,
                    }}
                    secureTextEntry
                />
                <Text style={{ color: "#55afb1", textAlign: "right" }}>Forgot password?</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <Text style={{ textAlign: "center" }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={{ textAlign: "center", color: "#55afb1", textDecorationLine: "underline" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    imagen: {
        width: "100%",
        height: 250,
    },
    title: {
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#55afb1",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 30,
    },
});
