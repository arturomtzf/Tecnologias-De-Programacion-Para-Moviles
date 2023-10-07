import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Welc } from "../../assets";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    const Hola = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <Image source={Welc} style={styles.imagen} />
            <Text style={styles.title}>Shopping with best e-comerce store</Text>
            <Text style={styles.secondary}>Find best shopping experience with us by your favorite daily needs!</Text>
            <TouchableOpacity style={styles.button} onPress={() => Hola()}>
                <Text style={styles.started}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfcfe",
        paddingHorizontal: 10,
        paddingVertical: 50,
        alignContent: "center",
        justifyContent: "center",
    },
    imagen: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 20,
        color: "#4f4a4a",
        textAlign: "center",
    },
    secondary: {
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
        color: "#4f4a4a",
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: "#55afb1",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 60,
    },
    started: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
});
