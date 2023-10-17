import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

export default function Signin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <AntDesign name="arrowleft" size={24} color="black" style={{ marginTop: 25, marginHorizontal: 10 }} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <Text>Already have an account? </Text>
                <TouchableOpacity>
                    <Text
                        style={{ textAlign: "center", color: "#55afb1", textDecorationLine: "underline" }}
                        onPress={() => navigation.navigate("Login")}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Text style={{ fontWeight: "bold" }}>Name</Text>
                <TextInput
                    placeholder="Enter your name"
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 20,
                    }}
                />
                <Text style={{ fontWeight: "bold" }}>Email</Text>
                <TextInput
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
                    placeholder="Enter your password"
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 20,
                    }}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 20, marginTop: 10 }}>
                By signin up, you are agreeing to our <Text style={{ color: "#55afb1" }}>Terms of Service </Text>and{" "}
                <Text style={{ color: "#55afb1" }}>Privacy Policy</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    button: {
        backgroundColor: "#55afb1",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 30,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
    },
});
