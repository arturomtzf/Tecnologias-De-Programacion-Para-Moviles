import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Hearder from "../components/Hearder";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation, route }) => {
    const { name } = route.params;
    const { canGoBack, goBack } = navigation;
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Hearder quantity={name} />
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <AntDesign name="calendar" size={29} color="black" />
                        <Text>Today</Text>
                    </View>
                    <View style={styles.container3}>
                        <Feather name="clock" size={29} color="black" />
                        <Text>10:11:00</Text>
                    </View>
                </View>
                <View style={styles.ticketContainer}>
                    <View style={styles.ticketHeader}>
                        <Text style={styles.txt}>Ticket 1</Text>
                        <Ionicons name="reload" size={20} color="#fff" />
                    </View>
                    <View style={styles.circleContainer}>
                        <Text style={styles.number}>1</Text>
                        <Text style={styles.number}>7</Text>
                        <Text style={styles.number}>14</Text>
                        <Text style={styles.number}>16</Text>
                        <Text style={styles.number}>19</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.option}>
                        <View>
                            <Text style={styles.txt1}>Rate type</Text>
                            <Text style={styles.txt2}>One time bet</Text>
                        </View>
                        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                            <Text></Text>
                            <AntDesign name="check" size={24} color="#fff" style={styles.check} />
                        </View>
                    </View>
                    <View style={styles.option}>
                        <View>
                            <Text style={styles.txt1}>Rate type</Text>
                            <Text style={styles.txt2}>Subscription</Text>
                        </View>
                        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                            <Text></Text>
                            <AntDesign name="check" size={24} color="#666260" style={styles.check1} />
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.resultsContainer}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Watch Results</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = new StyleSheet.create({
    resultsContainer: {
        backgroundColor: "#006441",
        marginHorizontal: 85,
        padding: 20,
        borderRadius: 40,
        alignItems: "center",
    },
    check: {
        backgroundColor: "#f26c3f",
        borderRadius: 30,
        padding: 2,
    },
    check1: {
        backgroundColor: "#eeeceb",
        borderRadius: 30,
        padding: 2,
    },
    optionsContainer: {
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 15,
        justifyContent: "space-around",
    },
    txt1: {
        fontSize: 15,
        color: "#000",
    },
    txt2: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
    option: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 175,
        height: 150,
        padding: 10,
        justifyContent: "space-around",
        marginHorizontal: 10,
    },
    number: {
        fontSize: 20,
        color: "#000",
        marginHorizontal: 10,
        backgroundColor: "#fed24a",
        borderRadius: 50,
        width: 45,
        height: 45,
        textAlign: "center",
        textAlignVertical: "center",
    },
    header: {
        backgroundColor: "#ce8455",
        paddingVertical: 5,
    },
    container: {
        backgroundColor: "#ead8bc",
        flex: 1,
    },
    container2: {
        backgroundColor: "#dfc8a4",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 44,
    },
    container3: {
        flexDirection: "row",
    },
    ticketContainer: {
        backgroundColor: "#006441",
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
    },
    ticketHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    txt: {
        color: "#fff",
        fontSize: 20,
    },
    circleContainer: {
        flexDirection: "row",
        marginVertical: 20,
    },
});

export default LoginScreen;
