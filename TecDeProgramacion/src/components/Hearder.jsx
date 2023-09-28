import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Hearder = ({ quantity }) => {
    const { canGoBack, goBack } = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} style={styles.icon}>
                <Ionicons name="chevron-back" size={24} color="#5a5454" />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.text}>${quantity}</Text>
                <Text style={styles.text2}>ArmafuMillions</Text>
            </View>
            <TouchableOpacity style={styles.icon}>
                <Feather name="x" size={24} color="#5a5454" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ead8bc",
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: "row",
        marginTop: 10,
    },
    icon: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5,
        color: "#000",
    },
    text2: {
        fontSize: 18,
        marginLeft: 5,
        color: "#000",
    },
});

export default Hearder;
