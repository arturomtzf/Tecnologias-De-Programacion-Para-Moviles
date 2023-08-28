import React from "react";
import { Text, StyleSheet } from "react-native";

const TextComponent = ({ text, fontSize, fontWeight, color }) => {
    return <Text style={{fontSize, fontWeight, color}}>{text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "",
    }
});

export default TextComponent;
