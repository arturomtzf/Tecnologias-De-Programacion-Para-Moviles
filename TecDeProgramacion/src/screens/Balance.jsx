import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { useAppContext } from "../hooks/useAppContext";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Graph } from "../../assets";

const DATA = [
    {
        id: 1,
        name: "Ethan Johnson",
        date: "May 7, 2023",
        operation: "+$1,220.00",
    },
    {
        id: 2,
        name: "Emma Davis",
        date: "May 7, 2023",
        operation: "-$1,220.00",
    },
    {
        id: 3,
        name: "Olivia Williams",
        date: "May 7, 2023",
        operation: "-$1,220.00",
    },
];

export default function Balance() {
    const { isDarkMode, toggleTheme } = useAppContext();

    const styles = StyleSheet.create({
        btnContainer: {
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: isDarkMode ? "white" : "black",
            padding: 8,
        },
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? "black" : "white",
        },
        topBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
        },
        txtBalance: {
            fontSize: 20,
            color: isDarkMode ? "white" : "black",
        },
        txtAmount: {
            fontSize: 44,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
            marginTop: 10,
        },
        timeContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
        },
        imagen: {
            width: "100%",
            height: 250,
        },
        botomPart: {
            backgroundColor: isDarkMode ? "#edf893" : "#edf893",
            borderRadius: 20,
            marginTop: 10,
        },
        topBar2: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
        },
        transactions: {
            fontSize: 20,
            color: isDarkMode ? "black" : "black",
        },
        see: {
            fontSize: 15,
            color: isDarkMode ? "gray" : "gray",
        },
        icon: {
            backgroundColor: "black",
            borderRadius: 60,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.btnContainer} onPress={() => toggleTheme()}>
                    <AntDesign name="arrowleft" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => toggleTheme()}>
                    <MaterialCommunityIcons name="dots-grid" size={29} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.txtBalance}>Total balance</Text>
                <Text style={styles.txtAmount}>$32,751.69</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={{ color: isDarkMode ? "white" : "black", marginHorizontal: 20 }}>Day</Text>
                <Text style={{ color: isDarkMode ? "white" : "black", marginHorizontal: 20 }}>Week</Text>
                <Text style={{ color: isDarkMode ? "#edf893" : "#edf893", marginHorizontal: 20 }}>Month</Text>
                <Text style={{ color: isDarkMode ? "white" : "black", marginHorizontal: 20 }}>Year</Text>
            </View>
            <Image source={Graph} style={styles.imagen} />
            <View style={styles.botomPart}>
                <View style={styles.topBar2}>
                    <Text style={styles.transactions}>Transactions</Text>
                    <Text style={styles.see}>See All</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name="email-receive" size={24} color="#edf893" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: isDarkMode ? "black" : "black" }}>{item.name}</Text>
                                <Text style={{ fontSize: 15, color: isDarkMode ? "gray" : "gray" }}>{item.date}</Text>
                            </View>
                            <Text style={{ fontSize: 18, color: isDarkMode ? "black" : "black" }}>{item.operation}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                ></FlatList>
            </View>
        </View>
    );
}
