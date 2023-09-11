import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

function FilterComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.textInput}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput value="Divoom" />
            </View>
            <TouchableOpacity style={styles.btnFilter}>
                <FontAwesome name="filter" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "77%",
    },
    btnFilter: {
        backgroundColor: "#f2b450",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});

export default FilterComponent;
