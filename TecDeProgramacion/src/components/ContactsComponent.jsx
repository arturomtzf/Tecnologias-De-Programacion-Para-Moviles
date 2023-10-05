import { StyleSheet, Text, View, Image } from "react-native";
import { useAppContext } from "../hooks/useAppContext";
import { Entypo } from "@expo/vector-icons";

export default function ContactsComponent({ item }) {
    const { isDarkMode } = useAppContext();

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
        },
        name: {
            fontSize: 16,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
        number: {
            fontSize: 14,
            color: isDarkMode ? "#E5E5E5" : "#4F4F4F",
        },
        imagen: {
            width: 40,
            height: 40,
            borderRadius: 15,
            marginRight: 16,
        },
    });

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Image source={{ uri: item.image }} style={styles.imagen}/>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.number}>{item.number}</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color={isDarkMode ? "white" : "black"} />
        </View>
    );
}
