import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Therapist = ({ image, name, job, rate }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.image}
            />
            <View style={styles.therapistInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.grayText}>{job}</Text>
            </View>
            <View style={styles.therapistRate}>
                <AntDesign name={rate > 4 ? "star" : "staro"} size={24} color="#2263df" />
                <Text style={styles.grayText}>{rate.toFixed(1)}</Text>
            </View>
        </View>
    );
};

export default Therapist;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "red",
        borderRadius: 10,
        backgroundColor: "#f7f8fa",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    therapistInfo: {},
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#495258",
    },
    grayText: {
        color: "#d4d4d7",
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 15,
    },
    therapistRate: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
});
