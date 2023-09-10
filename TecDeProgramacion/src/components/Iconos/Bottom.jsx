import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

function Bottom() {
    return (
        <View>
            <View>
                <Feather name="home" size={24} color="black" />
                <Text>Home</Text>
            </View>
            <View>
                <Feather name="home" size={24} color="black" />
                <Text>Wallet</Text>
            </View>
            <View>
                <Feather name="home" size={24} color="black" />
                <Text>Chart</Text>
            </View>
            <View>
                <Feather name="home" size={24} color="black" />
                <Text>Settings</Text>
            </View>
        </View>
    );
}

export default Bottom;
