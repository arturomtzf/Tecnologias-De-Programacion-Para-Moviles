import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons name="dots-grid" size={24} color="#55afb1" />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <Feather name="bell" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20,
    },
    iconContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
});
