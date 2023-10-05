import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { Pepe } from "../../assets";
import { useAppContext } from "../hooks/useAppContext";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import CardComponent from "../components/CardComponent";
import ContactsComponent from "../components/ContactsComponent";

const DATA = [
    {
        id: 1,
        number: "**** 1024",
        amount: "$ 13,397.23",
    },
    {
        id: 2,
        number: "**** 2048",
        amount: "$ 25,841.85",
    },
    {
        id: 3,
        number: "**** 5712",
        amount: "$ 4.69",
    },
];

const CONTACTS = [
    {
        id: 1,
        name: "Benjamin Parker",
        number: "**** 3294",
        image: "https://picsum.photos/900",
    },
    {
        id: 2,
        name: "Emma Davis",
        number: "**** 2352",
        image: "https://picsum.photos/300",
    },
    {
        id: 3,
        name: "Olivia Williams",
        number: "**** 3629",
        image: "https://picsum.photos/700",
    },
    {
        id: 4,
        name: "Ethan Johnson",
        number: "**** 4264",
        image: "https://picsum.photos/400",
    },
    {
        id: 5,
        name: "Noah Wilson",
        number: "**** 7419",
        image: "https://picsum.photos/500",
    },
];

export default function MyCards() {
    const { isDarkMode, toggleTheme } = useAppContext();

    const styles = StyleSheet.create({
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
        imagen: {
            width: 55,
            height: 55,
            borderRadius: 15,
        },
        btnDots: {
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: isDarkMode ? "white" : "black",
            padding: 8,
        },
        txtCards: {
            fontSize: 40,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
            marginLeft: 10,
            marginBottom: 20,
        },
        plusContainer: {
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isDarkMode ? "#edf893" : "black",
            padding: 8,
            marginLeft: 10,
            width: 50,
            height: 100,
        },
        optionsContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
        },
        optionContainer: {
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#1c1c1c" : "#f2f2f2",
            borderRadius: 15,
            width: 110,
            height: 75,
        },
        txtOption: {
            fontSize: 20,
            color: isDarkMode ? "#edf893" : "black",
            marginLeft: 10,
        },
        options2Container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
        },
        option2: {
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderColor: isDarkMode ? "#edf893" : "black",
            borderWidth: 1,
            padding: 11,
            borderRadius: 15,
        },
        txtOption2: {
            fontSize: 15,
            color: isDarkMode ? "white" : "black",
        },
        option2Selected: {
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#edf893" : "black",
            padding: 11,
            borderRadius: 15,
        },
        txtOption2Selected: {
            fontSize: 15,
            color: isDarkMode ? "black" : "white",
        },
        contactsContainer: {
            backgroundColor: isDarkMode ? "#1f1f1f" : "#f2f2f2",
            borderRadius: 20,
            marginHorizontal: 10,
            marginTop: 10,
        },
        topBar2: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
        },
        txtContacts: {
            fontSize: 20,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
            marginLeft: 5,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image source={Pepe} style={styles.imagen} />
                <TouchableOpacity style={styles.btnDots} onPress={() => toggleTheme()}>
                    <MaterialCommunityIcons name="dots-grid" size={29} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
            </View>
            <Text style={styles.txtCards}>My cards</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.plusContainer}>
                    <AntDesign name="plus" size={18} color={isDarkMode ? "black" : "white"} />
                </TouchableOpacity>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({ item }) => <CardComponent item={item} />}
                ></FlatList>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionContainer}>
                    <MaterialCommunityIcons name="email-send-outline" size={24} color={isDarkMode ? "white" : "black"} />
                    <Text style={styles.txtOption}>Send</Text>
                </View>
                <View style={styles.optionContainer}>
                    <MaterialCommunityIcons name="email-receive" size={24} color={isDarkMode ? "white" : "black"} />
                    <Text style={styles.txtOption}>Receive</Text>
                </View>
                <View style={styles.optionContainer}>
                    <Ionicons name="reload" size={24} color={isDarkMode ? "white" : "black"} />
                    <Text style={styles.txtOption}>Swap</Text>
                </View>
            </View>
            <View style={styles.options2Container}>
                <View style={styles.option2}>
                    <Text style={styles.txtOption2}>Activity</Text>
                </View>
                <View style={styles.option2Selected}>
                    <Text style={styles.txtOption2Selected}>Contacts</Text>
                </View>
                <View style={styles.option2}>
                    <Text style={styles.txtOption2}>Payments</Text>
                </View>
                <View style={styles.option2}>
                    <Text style={styles.txtOption2}>Swap</Text>
                </View>
            </View>
            <View style={styles.contactsContainer}>
                <View style={styles.topBar2}>
                    <Text style={styles.txtContacts}>My Contacts</Text>
                    <AntDesign name="search1" size={24} color={isDarkMode ? "white" : "black"} />
                </View>
                <FlatList
                    data={CONTACTS}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ContactsComponent item={item} />}
                ></FlatList>
            </View>
        </View>
    );
}
