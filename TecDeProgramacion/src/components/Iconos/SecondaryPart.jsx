import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Crypto from "../Crypto/Crypto";
import { StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const DATA = [
    {
        id: "1",
        title: "Ethereum",
        value: "79.006 ETH",
        amout: "$1,000,000.00",
        percentage: "29.74% ($28,015)",
    },
    {
        id: "2",
        title: "Binance",
        value: "107.70 BNB",
        amout: "$30,812.92",
        percentage: "15.96% ($28,015)",
    },
    {
        id: "3",
        title: "Tether usd",
        value: "79.006 ETH",
        amout: "$100,000.00",
        percentage: "29.74% ($28,015)",
    },
];

function SecondaryPart() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>My Assets</Text>
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                keyExtractor={({ id }) => id}
                renderItem={(
                    { item: { title, value, amout, percentage }, index } // Para destructurar item
                ) => <Crypto title={title} value={value} amout={amout} percentage={percentage} />}
            />
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomButton}>
                    <Feather name="home" size={24} color="black" />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton}>
                    <AntDesign name="wallet" size={24} color="black" />
                    <Text>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton}>
                    <AntDesign name="piechart" size={24} color="black" />
                    <Text>Chart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton}>
                    <Feather name="settings" size={24} color="black" />
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        marginHorizontal: 5,
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    bottomButton: {
        alignItems: "center",
    },
});

export default SecondaryPart;
