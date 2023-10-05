import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAppContext } from "../hooks/useAppContext";

export default function CardComponent({ item }) {
    const { isDarkMode } = useAppContext();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "#f2f2f2",
            borderRadius: 20,
            padding: 13,
            marginHorizontal: 10,
            width: 200,
            height: 100,
            justifyContent: "space-between",
        },
        topBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        txtNumber: {
            fontSize: 20,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
        txtAmout: {
            fontSize: 20,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <FontAwesome name="cc-visa" size={24} color={isDarkMode ? "white" : "black"} />
                <Text style={styles.txtNumber}>{item.number}</Text>
            </View>
            <Text style={styles.txtAmout}>{item.amount}</Text>
        </View>
    );
}
