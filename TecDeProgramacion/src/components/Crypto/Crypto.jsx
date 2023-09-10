import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function Crypto({ title, value, amout, percentage }) {
    return (
        <TouchableOpacity style={styles.mainContainer}>
            <View style={{ flexDirection: "row" }}>
                <View
                    style={[
                        styles.containerIcon,
                        { backgroundColor: title == "Ethereum" ? "#c65e33" : title == "Binance" ? "#fdc72b" : "#7d9651" },
                    ]}
                >
                    {title == "Ethereum" ? <FontAwesome5 name="ethereum" size={29} color="white" /> : null}
                    {title == "Binance" ? <FontAwesome5 name="exclamation-triangle" size={29} color="white" /> : null}
                    {title == "Tether usd" ? <FontAwesome5 name="instalod" size={29} color="white" /> : null}
                </View>
                <View style={styles.secondColumn}>
                    <Text>{title}</Text>
                    <Text>{percentage}</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
            <View style={{ alignItems: "flex-end" }}>
                <Text>{value}</Text>
                <Text>{amout}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    secondColumn: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "gray",
        marginVertical: 10,
    },
});

export default Crypto;
