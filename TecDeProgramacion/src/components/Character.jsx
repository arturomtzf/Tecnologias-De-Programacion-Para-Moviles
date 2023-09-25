import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Character({ image, name, status, species, location, id, navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View>
                <View>
                    <Text style={styles.txtName}>{name.length > 21 ? name.substring(0, 21 - 3) + "..." : name}</Text>
                    <View style={styles.status}>
                        <Entypo name="dot-single" size={30} color={status === "Alive" ? "green" : "red"} />
                        <Text style={styles.txtStatus}>
                            {status} - {species}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtTitle}>Last known location:</Text>
                    <Text style={styles.txtSecondary}>
                        {location.length > 25 ? location.substring(0, 25 - 3) + "..." : location}
                    </Text>
                </View>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Character", { id })}>
                    <Text>Ver mas informacion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#3c3e44",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    txtName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    txtStatus: {
        fontSize: 16,
        color: "#fff",
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#9e9e9e",
    },
    txtSecondary: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 5,
    },
    image: {
        width: 165,
        height: 165,
        marginRight: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    status: {
        flexDirection: "row",
        alignItems: "center",
    },
    boton: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        alignItems: "center",
    },
});
