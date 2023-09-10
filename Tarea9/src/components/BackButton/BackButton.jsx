import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function BackButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="arrowleft" size={24} color="#1b1c21" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 44,
    },
});

export default BackButton;
