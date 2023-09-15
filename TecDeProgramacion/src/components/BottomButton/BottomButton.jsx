import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function BottomButton() {
    return (
        <View style={styles.container}>
            <Entypo name="home" size={34} color="black" />
            <Feather name="bell" size={34} color="black" />
            <AntDesign name="plussquare" size={34} color="black" />
            <Feather name="phone" size={34} color="black" />
            <MaterialCommunityIcons name="google-circles-communities" size={34} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "#dfe5f9",
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
});

export default BottomButton;
