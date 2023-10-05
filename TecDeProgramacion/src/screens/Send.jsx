import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppContext } from "../hooks/useAppContext";
import { Angek, Wallet } from "../../assets";

export default function Send() {
    const { isDarkMode, toggleTheme } = useAppContext();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? "black" : "white",
        },
        txtTitle: {
            fontSize: 30,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
        topBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
        },
        imagen1: {
            width: 50,
            height: 50,
            position: "absolute",
            left: 160,
            borderRadius: 50,
        },
        imagen2: {
            position: "absolute",
            width: 50,
            height: 50,
            left: 190,
            borderRadius: 50,
        },
        txtSend: {
            fontSize: 16,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
        txtPass: {
            fontSize: 15,
            color: isDarkMode ? "white" : "black",
        },
        containerText: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
        },
        txtQuantity: {
            fontSize: 50,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
            textAlign: "center",
            marginTop: 30,
        },
        containerKeyboard: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
        },
        column: {
            flexDirection: "row",
        },
        containerKey: {
            width: 100,
            height: 60,
            borderRadius: 50,
            backgroundColor: isDarkMode ? "#1f1f1f" : "#E5E5E5",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
        },
        txtNumber: {
            fontSize: 30,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
        },
        btnSend: {
            width: 150,
            height: 50,
            borderRadius: 50,
            backgroundColor: isDarkMode ? "#8ebc7e" : "#8ebc7e",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 130,
        },
        btnContainer: {
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: isDarkMode ? "white" : "black",
            padding: 8,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.btnContainer} onPress={() => toggleTheme()}>
                    <AntDesign name="arrowleft" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <Text style={styles.txtTitle}>Send</Text>
                <TouchableOpacity onPress={() => toggleTheme()} style={styles.btnContainer}>
                    <AntDesign name="message1" size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={Angek} style={styles.imagen1} />
                <Image source={Wallet} style={styles.imagen2} />
                <View style={styles.containerText}>
                    <Text style={styles.txtSend}>Angel Gallegos</Text>
                    <Text style={styles.txtPass}>**** 3001</Text>
                </View>
            </View>
            <View>
                <Text style={styles.txtQuantity}>$777.69</Text>
            </View>
            <View style={styles.containerKeyboard}>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>{"<"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerKey}>
                        <Text style={styles.txtNumber}>.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.btnSend}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
}
