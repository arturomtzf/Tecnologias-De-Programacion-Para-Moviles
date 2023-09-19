import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Todo({ id, name, isCompleted, handleDelete, handleComplete, handleEdit, createdAt, updatedAt }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity onPress={() => handleComplete(id)}>
                    {isCompleted ? (
                        <AntDesign name="checksquare" size={24} color="#3ab34a" />
                    ) : (
                        <AntDesign name="closesquare" size={24} color="#e64d3d" />
                    )}
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{name}</Text>
                    <Text style={styles.textInfo}>Created at: {createdAt}</Text>
                    {updatedAt && <Text style={styles.textInfo}>Updated at: {updatedAt}</Text>}
                </View>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={styles.options} onPress={() => handleEdit(id)}>
                    <Feather name="edit-2" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.options} onPress={() => handleDelete(id)}>
                    <MaterialIcons name="delete" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "#2d705f",
        alignItems: "center",
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    options: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "white",
    },
    textInfo: {
        color: "white",
        fontSize: 12,
    },
});
